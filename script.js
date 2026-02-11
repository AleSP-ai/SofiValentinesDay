const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gifContainer = document.getElementById("gifContainer");
const heartsContainer = document.getElementById("hearts-container");

let angle = 0; // ángulo de rotación
let radius = 120; // distancia alrededor del botón SI

function moveAroundYes() {

  const yesRect = yesBtn.getBoundingClientRect();

  const centerX = yesRect.left + yesRect.width / 2;
  const centerY = yesRect.top + yesRect.height / 2;

  angle += Math.PI / 4; // gira 45° cada vez

  const x = centerX + radius * Math.cos(angle) - noBtn.offsetWidth / 2;
  const y = centerY + radius * Math.sin(angle) - noBtn.offsetHeight / 2;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseover", moveAroundYes);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveAroundYes();
});

// Cuando toca SI
yesBtn.addEventListener("click", () => {

  noBtn.style.display = "none";
  gifContainer.classList.remove("hidden");

  startHearts();

  setTimeout(() => {
    window.location.href = "https://open.spotify.com/intl-es/track/55lijDD6OAjLFFUHU9tcDm?si=371a6824fd0a4cb7";
  }, 5000);
});

// Lluvia de corazones
function startHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["❤️", "💖", "💗", "💘", "💕"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    const size = Math.random() * 30 + 20;
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 150);

  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
