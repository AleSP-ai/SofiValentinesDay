const noBtn = document.getElementById("noBtn");
const siBtn = document.getElementById("siBtn");
const resultDiv = document.getElementById("result");
const heartsContainer = document.getElementById("hearts-container");

let noVisible = true;

// Botón NO escurridizo pero visible
noBtn.addEventListener("mouseenter", function () {
  if (!noVisible) return;

  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Cuando toca SI
siBtn.addEventListener("click", function () {

  noVisible = false;
  noBtn.style.display = "none";

  resultDiv.innerHTML = `
    <img src="https://media.giphy.com/media/yBwgX64KAPrHW2ltZ2/giphy.gif">
    <p>¡Sabía que ibas a decir que sí! 💘</p>
  `;

  startHearts();

  // Abrir canción después de 1 segundo
  setTimeout(() => {
    window.open("https://open.spotify.com/track/0uWm6d4k3xP8xGZ6u4EJ3C", "_blank");
  }, 1000);
});

// Lluvia de corazones
function startHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 200);

  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
