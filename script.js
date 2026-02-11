const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gifContainer = document.getElementById("gifContainer");
const heartsContainer = document.getElementById("hearts-container");

// Función segura para mover el botón dentro de la pantalla visible
function moveNoButton() {

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const padding = 20; // margen de seguridad

  const maxX = window.innerWidth - buttonWidth - padding;
  const maxY = window.innerHeight - buttonHeight - padding;

  const minY = 150; 
  // evita que se vaya demasiado arriba (zona del navegador)

  const x = Math.random() * maxX;
  const y = Math.random() * (maxY - minY) + minY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveNoButton();
});

// Al tocar SI
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
