export function createAnimatedPunctuation() {
  const PUNCTS = ["?", "!", ".", ";", ":"];
  const SPEED_VH_PER_SEC = 10;
  const STARTING_VERITCAL_OFFSET_VH = -100; // start above viewport
  const container = document.getElementById("punctBg");
  if (!container) return;

  const rand = (min: number, max: number) => Math.random() * (max - min) + min;
  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
  const vw = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  const createPunct = () => {
    const el = document.createElement("div");
    el.className = "punct";
    el.textContent = PUNCTS[Math.floor(Math.random() * PUNCTS.length)];

    const size = rand(40, 50); // vw
    el.style.fontSize = size + "vw";

    const left = pickLeft();
    el.style.left = left + "%";
    el.style.top = STARTING_VERITCAL_OFFSET_VH + "vh"; // start above viewport

    // blur
    const blur = rand(2, 10) + "px";
    el.style.setProperty("--blur", blur);

    // opacity tweaks
    const startOpacity = clamp(rand(0.15, 0.25), 0.1, 0.3);
    el.style.setProperty("--start-opacity", String(startOpacity));
    el.style.setProperty("color", `rgba(0,0,0,${startOpacity})`);


    setUpAnimation(el);

    const drift = rand(-8, 8);
    if (Math.abs(drift) > 0.5) {
      el.style.transformOrigin = "center";
    }

    el.addEventListener("animationend", () => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    return el;
  };
function setUpAnimation(el: HTMLElement) {
    if (!container) return;
    const h = container.getBoundingClientRect().height;
    const distanceVh = Math.max(0, (h - STARTING_VERITCAL_OFFSET_VH));
    el.style.setProperty("--distance", distanceVh + "vh");
    const duration = distanceVh / SPEED_VH_PER_SEC;
    el.style.setProperty("--start-offset", el.style.top);
    el.style.animationDuration = duration + "s";
}

const usedPositions: number[] = [];
const MIN_GAP_PCT = 10; 

function pickLeft() {
  for (let i = 0; i < 20; i++) {
    const left = rand(-10, 110); 
    if (usedPositions.every(p => Math.abs(p - left) >= MIN_GAP_PCT)) {
      usedPositions.push(left);
      if (usedPositions.length > 2) usedPositions.shift();
      return left;
    }
  }
  return rand(-10, 110);
}

  function populate(count = 24) {
    if (!container) return;
    container.innerHTML = "";
    const total = count;
    for (let i = 0; i < total; i++) {
      let el = createPunct();
      el.style.top
      container.appendChild(el);
    }
  }
  function populateBoot() {
     if (!container) return;
    container.innerHTML = "";
    const total = 20;
    for (let i = 0; i < total; i++) {
      let el = createPunct();
      el.style.top = (-i + 5) * 10 + "vh"; // staggered vertical positions for boot
      setUpAnimation(el); // recalculate animation duration based on new position
      container.appendChild(el);
    }
  }

  populateBoot();


  let t: number | undefined;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => populate(Math.max(8, Math.round((vw() * 0.02)))), 200);
  });

  setInterval(() => {
    const n = createPunct();
    container.appendChild(n);
    // remove oldest if too many
    if (container.children.length > 20) {
      const first = container.firstChild;
      if (first) container.removeChild(first);
    }
  }, 1500);
}