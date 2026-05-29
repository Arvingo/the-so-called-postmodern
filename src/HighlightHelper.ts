import type { TextInfo } from "./templateTypes/TextInfo";
function splitByHighlights(text: string, highlights?: { start: number; end: number }[]) {
  if (!highlights || highlights.length === 0) return [{ text, highlighted: false }];
  const sorted = [...highlights].sort((a, b) => a.start - b.start);
  const segments: { text: string; highlighted: boolean }[] = [];
  let idx = 0;
  for (const h of sorted) {
    const s = Math.max(0, Math.min(text.length, h.start));
    const e = Math.max(0, Math.min(text.length, h.end));
    const len = e - s;
    if (s > idx) segments.push({ text: text.slice(idx, s), highlighted: false });
    if (len > 0) segments.push({ text: text.slice(s, s + len), highlighted: true });
    idx = s + len;
  }
  if (idx < text.length) segments.push({ text: text.slice(idx), highlighted: false });
  return segments;
}
export function highlightText(info: TextInfo, container: HTMLElement) {
  const key = info.text + "|" + JSON.stringify(info.highlightRanges ?? []);
  if (container.dataset.highlightKey === key) return;
  container.dataset.highlightKey = key;
  const text = info.text || "";
  const highlights = info.highlightRanges as { start: number; end: number }[] | undefined;
  const segments = splitByHighlights(text, highlights);
  container.innerHTML = "";
  for (const seg of segments) {
    if (!seg.highlighted) {
      const span = document.createElement("span");
      span.classList.add("plain-seg");
      span.style.display = "inline";
      span.textContent = seg.text;
      container.appendChild(span);
      continue;
    }
    const wrapper = document.createElement("span");
    wrapper.classList.add("highlight");
    // stable inline flow but predictable positioning for absolute children
    wrapper.style.display = "inline-block";
    wrapper.style.position = "relative";
    wrapper.style.verticalAlign = "baseline";
    wrapper.style.overflow = "visible";

     const innerText = document.createElement("span");
     innerText.classList.add("highlight-inner");
     innerText.style.display = "inline-block"; // make measurements consistent
     innerText.textContent = seg.text;
 
    // append inner only; per-line background overlays are created by revealHighlightPerLine
    wrapper.appendChild(innerText);
     container.appendChild(wrapper);
 
     revealHighlightPerLine(wrapper);
  }
}
function revealHighlightPerLine(wrap: HTMLElement, duration = 700, gap = -500) {
  const inner = wrap.querySelector<HTMLElement>(".highlight-inner");
  if (!inner || !inner.firstChild) return;

  // measure in the next frame so layout/fonts are settled
  requestAnimationFrame(() => {
    const range = document.createRange();
    range.selectNodeContents(inner);
    const rects = Array.from(range.getClientRects());
    if (!rects.length) return;
    const wrapRect = wrap.getBoundingClientRect();

    const bgEls: HTMLElement[] = [];
    rects.forEach((r, i) => {
      const bg = document.createElement("span");
      bg.className = "line-bg";
      bg.style.position = "absolute";
      // use floor for left/top and ceil for width/height to avoid rightward drift
      const left = Math.floor(r.left - wrapRect.left);
      const top = Math.floor(r.top - wrapRect.top);
      const width = Math.ceil(r.right - r.left);
      const height = Math.ceil(r.bottom - r.top);
      bg.style.left = `${left}px`;
      bg.style.top = `${top}px`;
      bg.style.width = `${width}px`;
      bg.style.height = `${height}px`;
      bg.style.boxSizing = "border-box";
      bg.style.pointerEvents = "none";
      bg.style.zIndex = "0";

      // start collapsed horizontally (scaleX) with left origin
      bg.style.transform = "scaleX(0)";
      bg.style.transformOrigin = "left center";
      bg.style.opacity = "0";

      // transition: scaleX + opacity, staggered by delay
      const delay = i * (duration + gap);
      bg.style.transition = `transform ${duration}ms cubic-bezier(.2,.9,.2,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`;

      bg.style.background = "rgba(255,239,100,0.45)";
      bg.style.borderRadius = "4px";

      wrap.appendChild(bg);
      bgEls.push(bg);
    });

    // ensure inner text stays above the line backgrounds
    inner.style.position = "relative";
    inner.style.zIndex = "2";

    // animate in the next frame so transitions run
    requestAnimationFrame(() => {
      bgEls.forEach(bg => {
        bg.style.transform = "scaleX(1)";
        bg.style.opacity = "1";
      });
    });
  });
}