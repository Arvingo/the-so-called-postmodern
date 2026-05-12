import { textInfos } from "./data/data.js";
let progress = 0;
const display = document.getElementById("mainDisplay");
function showCurrentText() {
    const info = textInfos[progress] || {
        text: "No more text info available.",
        color: "black",
        size: "16px",
    };
    display.textContent = info.text;
    display.style.color = info.color;
    display.style.fontSize = info.size;
    display.style.display = "block";
}
document.body.addEventListener("click", () => {
    showCurrentText();
    progress++;
    // loop back to start
    if (progress >= textInfos.length) {
        progress = 0;
    }
});
//# sourceMappingURL=script.js.map