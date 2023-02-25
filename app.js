const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 15000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnim();
function breathAnim() {
  text.innerHTML = "Breathe In";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "Breathe Out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnim, totalTime);
