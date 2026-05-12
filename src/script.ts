import { defaultTextInfo, textInfos } from "./data/data.js";
import type { TextInfo } from "./TextInfo.js";
let progress = 0;

const display = document.getElementById("mainDisplay") as HTMLDivElement;

function showCurrentText() {
  const info = textInfos[progress] || defaultTextInfo;

  scrambleText(display, info.text);
  display.style.color = info.color;
  display.style.fontSize = info.size;
  const safe = populateOptionalArguments(info) ;
  
  //first move it to position, then center text about itself
  display.style.transform = `translate(${safe.x}vw, ${safe.y}vh) translate(-50%, -50%)`;


  display.style.position = "absolute";
}

document.body.addEventListener("click", () => {
  showCurrentText();

  progress++;

  // loop back to start
  if (progress >= textInfos.length) {
    progress = 0;
  }
});


function populateOptionalArguments(info: TextInfo) {
  return {
    ...info,
    x: info.x ?? 50,
    y: info.y ?? 50,
  };
}

function scrambleText(element: HTMLElement, newText: string, duration = 300) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+[]{}|;:,.<>?";
  const intervalTime = 30;
  const oldText = element.textContent || "";
  const maxLen = Math.max(oldText.length, newText.length);
  const totalFrames = Math.floor(duration / intervalTime);
  let frame = 0;
  

  const interval = setInterval(() => {
    let output = "";
    let curLen = oldText.length + (newText.length - oldText.length) * (frame / totalFrames);
    console.log(curLen);
    for (let i = 0; i < curLen; i++) {
      const progress = Math.pow(frame / totalFrames, 0.5);

      if (i < curLen && progress > Math.random() && newText[i]) {
        output += newText[i];
      } else {
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