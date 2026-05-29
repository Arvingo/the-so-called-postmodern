import { createAnimatedPunctuation } from "./animatedPunctuation.js";
import { pageInfos } from "./data/PageInfoBank.js";
import { highlightText } from "./HighlightHelper.js";
import type { PageInfo } from "./templateTypes/PageInfo.js";
import type { TextInfo } from "./templateTypes/TextInfo.js";

let progress = 32;

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
    if (!nextIds.has(id)) {
      transitionOutText(prevTextBlocks.find(b => b.id === id) as TextInfo, el);
      console.log("removing", id);
      if (el.dataset) el.dataset.highlightKey = "";
      elements.delete(id);
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
  if (info.highlightRanges) {
    highlightText(info, display);
  } else {
    display.dataset.highlightKey = "";
    if (info.transitionIn) {
      if (info.transitionIn === "scramble") {
        scrambleText(display, info.text);
      } else if (info.transitionIn === "none") {
        display.textContent = info.text;
      } else if (info.transitionIn == "fade") {
        fadeIn(display);
        display.textContent = info.text;
      }
    } else {
      scrambleText(display, info.text);
    }
  }
  
  
  changeTextProperties(info);
}

function bootRenderText(info: TextInfo) { 
  const originalTransition = info.transitionIn;
  info.transitionIn = "none";
  renderText(info);
  info.transitionIn = originalTransition;
}

function changeTextProperties(info: TextInfo) {
  const display = elements.get(info.id) || createTextElement(info);
  display.style.color = info.color;
  display.style.fontSize = info.size;
  
  const safe = populateOptionalArguments(info) ;
  
  //first move it to position, then center text about itself
  display.style.transform = `translate(${safe.x}vw, ${safe.y}vh) translate(-50%, -50%)`;
  display.style.position = "absolute";
  display.style.maxWidth = `${safe.width}vw`;
  display.style.fontFamily = safe.font;
  display.style.fontWeight = safe.fontWeight;
}

document.body.addEventListener("click", () => {
  showCurrentText();

  // loop back to start
  if (progress >= pageInfos.length) {
    progress = 0;
  }
});


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

function scrambleText(element: HTMLElement, newText: string, duration = 300) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+[]{}|;:,.<>?";
  const intervalTime = 30;
  const oldText = element.textContent || "";
  const totalFrames = Math.floor(duration / intervalTime);
  let frame = 0;
  

  const interval = setInterval(() => {
    let output = "";
    let curLen = oldText.length + (newText.length - oldText.length) * (frame / totalFrames);
    for (let i = 0; i < curLen; i++) {
      const progress = Math.pow(frame / totalFrames, 0.5);

      if (i < curLen && progress > Math.random() && newText[i]) {
        output += newText[i];
      } else {
        if (newText[i] != " ")
        output += chars[Math.floor(Math.random() * chars.length)];
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

function scrambleOut(element: HTMLElement, duration = 300) {
  scrambleText(element, "", duration);
  setTimeout(() => {
    element.remove();
  }, duration);
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
  setTimeout(() => {
    element.style.opacity = "1";
  }, 50);
}