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
  const boldRanges = info.boldRanges as { start: number; end: number; color?: string }[] | undefined;
  const segments = splitByHighlights(text, boldRanges);
  container.innerHTML = "";
  for (const seg of segments) {
    if (seg.highlighted) {
      const span = document.createElement("span");
      if (!seg.color) {
        span.classList.add("bold");
      } else if (seg.color == "italic") {
        span.classList.add("italic");
      } else {
        span.classList.add("bold");
      }
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
