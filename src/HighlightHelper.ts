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
    wrapper.style.display = "inline";

    const bg = document.createElement("span");
    bg.classList.add("highlight-bg");

    const innerText = document.createElement("span");
    innerText.classList.add("highlight-inner");
    innerText.style.display = "inline";
    innerText.textContent = seg.text;

    wrapper.appendChild(innerText);
    wrapper.appendChild(bg);
    container.appendChild(wrapper);

    revealHighlightPerLine(wrapper);
  }
}
function revealHighlightPerLine(wrap: HTMLElement, duration = 700, gap = -500) {
  const inner = wrap.querySelector<HTMLElement>(".highlight-inner");
  if (!inner || !inner.firstChild) return;

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
    bg.style.left = `${r.left - wrapRect.left}px`;
    bg.style.top = `${r.top - wrapRect.top}px`;
    bg.style.width = `${r.width}px`;
    bg.style.height = `${r.height}px`;
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

    wrap.appendChild(bg);
    bgEls.push(bg);
  });

  inner.style.position = "relative";
  inner.style.zIndex = "1";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bgEls.forEach(bg => {
        bg.style.transform = "scaleX(1)";
        bg.style.opacity = "1";
      });
    });
  });

}