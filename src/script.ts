import { textInfos } from "./data/data.js";
let progress = 0;

const display = document.getElementById("mainDisplay") as HTMLDivElement;

function showCurrentText() {
  const info = textInfos[progress] || {
    text: "No more text info available.",
    color: "black",
    size: "16px",
  };

  display.textContent = info.text;
  display.style.color = info.color;
  display.style.fontSize = info.size;
  display.style.left = info.x ? info.x : "50%";
  display.style.top = info.y ? info.y : "50%";

  display.style.display = "absolute";
}

document.body.addEventListener("click", () => {
  showCurrentText();

  progress++;

  // loop back to start
  if (progress >= textInfos.length) {
    progress = 0;
  }
});
