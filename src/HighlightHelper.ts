import type { TextInfo } from "./templateTypes/TextInfo";
function splitByHighlights(text: string, highlights?: { start: number; end: number; color?: string }[]) {
  if (!highlights || highlights.length === 0) return [{ text, highlighted: false, color: "" }];
  const sorted = [...highlights].sort((a, b) => a.start - b.start);
  const segments: { text: string; highlighted: boolean, color: string }[] = [];
  let idx = 0;
  for (const h of sorted) {
    const s = Math.max(0, Math.min(text.length, h.start));
    const e = Math.max(0, Math.min(text.length, h.end));
    const len = e - s;
    if (s > idx) segments.push({ text: text.slice(idx, s), highlighted: false, color: "" });
    if (len > 0) segments.push({ text: text.slice(s, s + len), highlighted: true, color: h.color || "" });
    idx = s + len;
  }
  if (idx < text.length) segments.push({ text: text.slice(idx), highlighted: false, color: "" });
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
    wrapper.style.display = "inline";
    wrapper.style.position = "relative";
    wrapper.style.verticalAlign = "baseline";
    wrapper.style.overflow = "visible";

    const innerText = document.createElement("span");
    innerText.classList.add("highlight-inner");
    innerText.style.display = "inline"; 
    innerText.textContent = seg.text;
    requestAnimationFrame(() => {
      innerText.style.backgroundColor = seg.color || "rgba(255,239,100,0.45)";
    });
 
    wrapper.appendChild(innerText);
     container.appendChild(wrapper);
 
     //revealHighlightPerLine(wrapper, seg.color || "rgba(255,239,100,0.45)", delay);
  }
}
export function boldText(info: TextInfo, container: HTMLElement) {
  const text = info.text || "";
  const boldRanges = info.boldRanges as { start: number; end: number }[] | undefined;
  const segments = splitByHighlights(text, boldRanges);
  container.innerHTML = "";
  for (const seg of segments) {
    if (seg.highlighted) {
      const span = document.createElement("span");
      span.classList.add("bold");
      span.style.display = "inline";
      span.textContent = seg.text;
      container.appendChild(span);
      continue;
    } else {
      const span = document.createElement("span");
      span.style.display = "inline";
      span.textContent = seg.text;
      container.appendChild(span);
    }

  }
}
export function createCharacterHighlights(
  text: string,
  ch: string,
  { caseInsensitive = false, color }: { caseInsensitive?: boolean; color?: string } = {}
): { start: number; end: number; color?: string }[] {
  if (!text || !ch) return [];

  const src = caseInsensitive ? text.toLocaleLowerCase() : text;
  const needle = caseInsensitive ? ch.toLocaleLowerCase() : ch;

  const ranges: { start: number; end: number; color?: string }[] = [];
  let runStart: number | null = null;

  for (let i = 0; i < src.length; i++) {
    const match = src.substring(i, i + needle.length) === needle;
    if (match) {
      if (runStart === null) runStart = i;
      // advance index by needle.length - 1 so next loop continues after this match
      i += Math.max(0, needle.length - 1);
    } else {
      if (runStart !== null) {
        ranges.push({ start: runStart, end: i, ...(color ? { color } : {}) });
        runStart = null;
      }
    }
  }
  if (runStart !== null) {
    ranges.push({ start: runStart, end: text.length >= runStart ? runStart + needle.length : runStart, ...(color ? { color } : {}) });
  }
  return ranges;
}

// function revealHighlightPerLine(wrap: HTMLElement, color: string = "rgba(255,239,100,0.45)", preDelay = 705, duration = 700, gap = -500) {
//   const inner = wrap.querySelector<HTMLElement>(".highlight-inner");
//   if (!inner || !inner.firstChild) return;

//   // ensure stacking/positioning
//   wrap.style.position = wrap.style.position || "relative";
//   wrap.style.zIndex = wrap.style.zIndex || "0";
//   inner.style.position = inner.style.position || "relative";
//   inner.style.zIndex = inner.style.zIndex || "2";


 
//   setTimeout(() => {
//     const range = document.createRange();
//     range.selectNodeContents(inner);
//     const rects = Array.from(range.getClientRects());
//     if (!rects.length) return;

//     const bgEls: HTMLElement[] = [];

//     // rects.forEach((r, i) => {
//     //   const bg = document.createElement("span");
//     //   bg.className = "line-bg";
//     //   bg.style.position = "absolute";

//     //   // pixel coordinates relative to the wrapper
//     //   const leftPx = Math.round(r.left - wrapRect.left);
//     //   const topPx = Math.round(r.top - wrapRect.top);
//     //   const widthPx = Math.max(0, Math.round(r.width));
//     //   const heightPx = Math.max(0, Math.round(r.bottom - r.top));

//     //   bg.style.left = `${leftPx}px`;
//     //   bg.style.top = `${topPx}px`;
//     //   bg.style.width = `${widthPx}px`;
//     //   bg.style.height = `${heightPx}px`;

//     //   bg.style.boxSizing = "border-box";
//     //   bg.style.pointerEvents = "none";
//     //   bg.style.zIndex = "0";

//     //   bg.style.transform = "scaleX(0)";
//     //   bg.style.transformOrigin = "left center";
//     //   bg.style.opacity = "0";

//     //   const delay = i * (duration + gap);
//     //   bg.style.transition = `transform ${duration}ms cubic-bezier(.2,.9,.2,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`;

//     //   bg.style.background = color;
//     //   bg.style.borderRadius = "4px";

//     //   wrap.appendChild(bg);
//     //   bgEls.push(bg);
//     // });

//     // ensure inner text stays above backgrounds
//     inner.style.position = "relative";
//     inner.style.zIndex = "2";

//     // trigger animation
//     requestAnimationFrame(() => {
//       bgEls.forEach(bg => {
//         bg.style.transform = "scaleX(1)";
//         bg.style.opacity = "1";
//       });
//     });
//   }, preDelay);
// }