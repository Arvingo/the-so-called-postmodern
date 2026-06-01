import { createAnimatedPunctuation } from "./animatedPunctuation.js";
import { pageInfos } from "./data/PageInfoBank.js";
import { boldText, highlightText } from "./HighlightHelper.js";
import type { PageInfo } from "./templateTypes/PageInfo.js";
import type { TextInfo } from "./templateTypes/TextInfo.js";
//32: beloved
//77: tttc
//132: finale
let progress = 0; 

const app = document.getElementById("app") as HTMLElement;

const elements = new Map<string, HTMLDivElement>();

showCurrentText(true);
createAnimatedPunctuation();

function showCurrentText(initial = false) {
  let prevInfo;
  if (initial) {
    prevInfo = { textBlocks: [] };
  } else {
    prevInfo = pageInfos[progress - 1] || pageInfos[pageInfos.length - 1];
  }
  
  flushOldText(pageInfos[progress], prevInfo);
  const curPageInfo = pageInfos[progress];
  for (const info of curPageInfo.textBlocks) {
    createTextElement(info);
    if (initial) {
      bootRenderText(info);
    } else {
      renderText(info);
    }
  }
  if (curPageInfo.bgColor) {
    changeBackgroundColor(curPageInfo.bgColor, curPageInfo);
  }
  progress++;
}

function changeBackgroundColor(color: string, pageInfo: PageInfo) {
  if (pageInfo.bgSnapIn) {
    document.body.style.transition = "";
  } else {
    document.body.style.transition = "background-color 700ms ease";
  }
  document.body.style.backgroundColor = color;
}


function flushOldText(curPageInfo: PageInfo, prevPageInfo: PageInfo) {
  const textBlocks = curPageInfo.textBlocks;
  const prevTextBlocks = prevPageInfo.textBlocks;
  const nextIds = new Set(textBlocks.map(b => b.id));

  for (const [id, el] of elements) {
    const anims = (el as any).getAnimations ? (el as any).getAnimations() : [];
    if (!nextIds.has(id)) {
      transitionOutText(prevTextBlocks.find(b => b.id === id) as TextInfo, el);
      anims.forEach((a: Animation) => {
        try { a.cancel(); } catch { /* ignore */ }
      });
      if (el.dataset) el.dataset.highlightKey = "";
      elements.delete(id);
    } else {
      //remove the spans and only leave the text
      const text = el.textContent || "";
      el.innerHTML = "";
      const span = document.createElement("span");
      span.textContent = text;
      el.appendChild(span);
    }
  }
}

function transitionOutText(info: TextInfo, el: HTMLElement) {
  if (!info) return;
  if (!info.transitionOut || info.transitionOut === "scramble") { //default to scramble
    scrambleOut(el);
  } else if (info.transitionOut === "none") {
    el.remove();
  } else if (info.transitionOut === "fade") {
    fadeOut(el);
  }
  elements.delete(info.id);
}

function createTextElement(info: TextInfo) {
  if (elements.has(info.id)) { //only one of each id allowed
    return elements.get(info.id) as HTMLDivElement;
  }
  const el = document.createElement("div");
  el.className = "textBlock";
  app.appendChild(el);
  elements.set(info.id, el);
  return el;
}

function renderText(info: TextInfo) {
  const display = elements.get(info.id) || createTextElement(info);
  display.classList.add("easing");
  
  if (info.boldRanges) boldText(info, display);
  if (info.highlightRanges) {
    highlightText(info, display);
    if (info.transitionIn == "fade") {
        fadeIn(display);
    } else {
      if (info.transitionIn != "none") difficultScrambleText(display, info.text, info.width ? 300 : 0);
    }
    changeTextProperties(info, info.transitionIn != "scroll");
  } else {
    changeTextProperties(info, info.transitionIn != "scroll");
    display.dataset.highlightKey = "";
    if (info.transitionIn) {
      if (info.transitionIn === "scramble") {
        if (info.boldRanges) {
          difficultScrambleText(display, info.text, info.width || 100, info.width ? 300 : 0);
        } else {
          scrambleText(display, info.text, info.width || 100, info.width ? 300 : 0);
        }
        
      } else if (info.transitionIn === "none") {
        display.textContent = info.text;
        if (info.boldRanges) boldText(info, display);
      } else if (info.transitionIn == "fade") {
        fadeIn(display);
        display.textContent = info.text;
      } else if (info.transitionIn == "scroll") {
        // put the text into the element before measuring/scrolling
        changeTextProperties(info, false);
        display.classList.remove("easing");
        linearScroll(display);
        display.textContent = info.text;
      }
    } else {
      if (info.boldRanges) {
          difficultScrambleText(display, info.text, info.width || 100, info.width ? 300 : 0);
        } else {
          scrambleText(display, info.text, info.width || 100, info.width ? 300 : 0);
        }
    }
  }
  
  
  
  
}

function bootRenderText(info: TextInfo) { 
  const originalTransition = info.transitionIn;
  info.transitionIn = "none";
  renderText(info);
  info.transitionIn = originalTransition;
}

function changeTextProperties(info: TextInfo, allowTransition = true) {
  console.log(window.innerWidth);
  const display = elements.get(info.id) || createTextElement(info);
  display.style.color = info.color;
  if (window.innerWidth / 1536 < window.innerHeight / 864) {
   display.style.fontSize =(parseInt(info.size) / 1536 * 100 + "vw"); 
  } else {
    display.style.fontSize =(parseInt(info.size) / 864 * 100 + "vh");
  }
  
  const safe = populateOptionalArguments(info) ;
  
  //first move it to position, then center text about itself
  if (allowTransition) {
    display.style.transform = `translate(${safe.x}dvw, ${safe.y}dvh) translate(-50%, -50%)`;
    display.style.position = "absolute";
  } else {
    display.style.width = `${safe.width}vw`;
  }
  display.style.opacity = safe.opacity ? safe.opacity.toString() : "1";
  display.style.maxWidth = `${safe.width}vw`;
  display.style.fontFamily = safe.font;
  display.style.fontWeight = safe.fontWeight;
}


function populateOptionalArguments(info: TextInfo) {
  return {
    ...info,
    x: info.x ?? 50,
    y: info.y ?? 50,
    width: info.width ?? 60,
    fontWeight: info.fontWeight ?? "normal",   
    font: info.font ?? "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  };
}

function collectTextNodes(root: ParentNode): Text[] {
  const out: Text[] = [];
  const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT, {
    acceptNode() { return NodeFilter.FILTER_ACCEPT; }
  });
  let n = walker.nextNode();
  while (n) {
    out.push(n as Text);
    n = walker.nextNode();
  }
  return out;
}

function difficultScrambleText(element: HTMLElement, newText: string, width: number, duration = 300) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+[]{}|;:,.<>?";
  const intervalTime = 30;
  element.style.maxWidth = width + "vw";

  // collect text nodes inside element (preserves spans/markup)
  const textNodes = collectTextNodes(element);
  if (!textNodes.length) {
    // no internal text nodes — fall back to simple behaviour
    const oldText = element.textContent || "";
    let frame = 0;
    const totalFrames = Math.max(1, Math.floor(duration / intervalTime));
    const interval = setInterval(() => {
      let output = "";
      const curLen = Math.floor(oldText.length + (newText.length - oldText.length) * (frame / totalFrames));
      for (let i = 0; i < curLen; i++) {
        const progress = Math.pow(frame / totalFrames, 0.5);
        if (oldText[i] === " " && Math.random() < 0.5) {
          output += " ";
          continue;
        }
        if (i < curLen && progress > Math.random() && newText[i]) {
          output += newText[i];
        } else {
          output += (newText[i] === " ") ? " " : chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = output;
      frame++;
      if (frame >= totalFrames) {
        clearInterval(interval);
        element.textContent = newText;
      }
    }, intervalTime);
    return;
  }

  

  // prepare combined strings and lengths
  const oldCombined = textNodes.map(n => n.data).join("");
  const newCombined = newText;
  const nodeLengths = textNodes.map(n => n.data.length);

  // build slices bounds for nodes (use existing node lengths; last node absorbs remainder)
  const slices: { start: number; length: number }[] = [];
  let pos = 0;
  for (let i = 0; i < nodeLengths.length; i++) {
    let len = nodeLengths[i];
    // for last node, allow remainder so we don't drop chars
    if (i === nodeLengths.length - 1) {
      len = Math.max(0, newCombined.length - pos);
    } else {
      // clamp len to avoid overflow if newCombined shorter
      len = Math.max(0, Math.min(len, Math.max(0, newCombined.length - pos)));
    }
    slices.push({ start: pos, length: len });
    pos += len;
    if (pos >= newCombined.length) {
      // remaining nodes get zero length
      for (let j = i + 1; j < nodeLengths.length; j++) slices.push({ start: pos, length: 0 });
      break;
    }
  }

  // prepare oldAdjusted (pad/trim to match newCombined length)
  let oldAdjusted = oldCombined;
  if (oldAdjusted.length < newCombined.length) oldAdjusted = oldAdjusted.padEnd(newCombined.length, " ");
  else if (oldAdjusted.length > newCombined.length) oldAdjusted = oldAdjusted.slice(0, newCombined.length);

  const totalFrames = Math.max(1, Math.floor(duration / intervalTime));
  let frame = 0;
  const interval = setInterval(() => {
    let output = "";
    const curLen = Math.floor(oldAdjusted.length + (newCombined.length - oldAdjusted.length) * (frame / totalFrames));
    for (let i = 0; i < newCombined.length; i++) {
      const progress = Math.pow(frame / totalFrames, 0.5);
      if (i < curLen && progress > Math.random()) {
        output += newCombined[i];
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }

    // distribute output into text nodes according to slices
    for (let i = 0; i < textNodes.length; i++) {
      const s = slices[i] || { start: 0, length: 0 };
      const slice = output.slice(s.start, s.start + s.length);
      textNodes[i].data = slice;
    }

    frame++;
    if (frame >= totalFrames) {
      clearInterval(interval);
      // finalize exact final text into nodes
      for (let i = 0; i < textNodes.length; i++) {
        const s = slices[i] || { start: 0, length: 0 };
        textNodes[i].data = newCombined.slice(s.start, s.start + s.length);
      }
    }
  }, intervalTime);
}
function scrambleText(element: HTMLElement, newText: string, newWidth = 100, duration = 300) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+[]{}|;:,.<>?";
  const intervalTime = 30;
  const oldText = element.textContent || "";
  const totalFrames = Math.floor(duration / intervalTime);
  let frame = 0;

  const computedMax = getComputedStyle(element).maxWidth;
  let oldMaxVW: number;
  if (!computedMax || computedMax === "none") {
    const rectW = element.getBoundingClientRect().width || 0;
    oldMaxVW = (rectW / window.innerWidth) * 100;
  } else {
    const px = parseFloat(computedMax.replace("px", "")) || 0;
    oldMaxVW = (px / window.innerWidth) * 100;
  }
  
  const widthDelta = newWidth - oldMaxVW;
  const interval = setInterval(() => {
    const t = Math.min(1, frame / totalFrames);
    const easedT = 1 - Math.pow(1 - t, 3); // ease-out (cubic)
    const curWidthVW = oldMaxVW + widthDelta * easedT;
    if (oldText != "") element.style.maxWidth = curWidthVW + "vw";

    let output = "";
    let curLen = oldText.length + (newText.length - oldText.length) * (frame / totalFrames);
    for (let i = 0; i < curLen; i++) {
      const progress = Math.pow(frame / totalFrames, 0.5);

      if (i < curLen && progress > Math.random() && newText[i]) {
        output += newText[i];
      } else {
        if (newText[i] != " ") {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += " ";
        }
;
      }
    }

    element.textContent = output;

    frame++;

    if (frame >= totalFrames) {
      clearInterval(interval);
      element.textContent = newText;
    }
  }, intervalTime);
}

function linearScroll(element: HTMLElement, speedPxPerSec = 600) {
  // ensure element is absolutely positioned and centered horizontally
  element.style.position = "absolute";
  element.style.left = "50%";
  element.style.top = "0";
  element.style.willChange = "transform";

  // measure after paint so text is present and sizes are correct
  requestAnimationFrame(() => {
    const viewportH = window.innerHeight;
    const elRect = element.getBoundingClientRect();
    const elH = elRect.height || element.offsetHeight || 0;

    const margin = 20; // px padding before/after
    const startY = Math.round(viewportH + margin);   // just below viewport
    const endY = Math.round(-elH - margin);          // just above top

    const distancePx = Math.abs(startY - endY);
    const durationMs = Math.max(300, Math.round((distancePx / speedPxPerSec) * 1000));

    // initial transform: center X and position vertically at startY
    const from = `translateX(-50%) translateY(${startY}px)`;
    const to   = `translateX(-50%) translateY(${endY}px)`;
    element.style.transform = from;

    // flush layout then animate linearly
    element.getBoundingClientRect();
    const anim = element.animate(
      [{ transform: from }, { transform: to }],
      { duration: durationMs, easing: "linear", fill: "forwards" }
    );
    anim.play();
    anim.onfinish = () => {goToNext();};
  });
}
  function fadeOut(element: HTMLElement, duration = 700) {
  element.style.transition = `opacity ${duration}ms ease`;
  element.style.opacity = "0";
  setTimeout(() => {
    element.remove();
  }, duration);
}

function fadeIn(element: HTMLElement, duration = 700) {

  element.style.opacity = "0";
  element.setAttribute("timing", duration.toString());
  setTimeout(() => {
    element.style.opacity = "1";
  }, 50);
}
function scrambleOut(element: HTMLElement, duration = 300) {
  scrambleText(element, "", duration);
  setTimeout(() => {
    element.remove();
  }, duration);
}
document.body.addEventListener("click", () => {
  goToNext(); 
});
document.body.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "ArrowRight") {
    e.preventDefault();
    goToNext();
  }
});
function goToNext() {
  showCurrentText();

  // loop back to start
  if (progress >= pageInfos.length) {
    progress = 0;
  }
}