const head = document.querySelector("head");
const toggle = document.querySelector("input");
const switchBtn = document.querySelector(".toggle-switch");

toggle.addEventListener("click", () => {
  if (toggle.checked === true) {
    switchBtn.style.background = "linear-gradient(to right, var(--toggle001), var(--toggle001))";
    loadCSSFile("/style/light.css");
  } else {
    switchBtn.style.background = "linear-gradient(to right, var(--toggle001), var(--toggle002))";
    loadCSSFile("/style/dark.css");
  }
});

function loadCSSFile(filename) {
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = filename;
  head.appendChild(link);
}