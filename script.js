const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gifContainer = document.getElementById("gifContainer");
const heartsContainer = document.getElementById("hearts-container");

// Botón NO se mueve al pasar el mouse
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Al tocar SI
yesBtn.addEventListener("click", () => {

  // Ocultar botón NO
  noBtn.style.display = "none";

  // Mostrar GIF
  gifContainer.classList.remove("hidden");

  // Iniciar lluvia de corazones
  startHearts();

  // Redireccionar a Spotify después de 5 segundos
  setTimeout(() => {
    window.location.href = "https://open.spotify.com/intl-es/track/55lijDD6OAjLFFUHU9tcDm?si=371a6824fd0a4cb7";
  }, 5000);
});

// Función lluvia de corazones
function startHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Diferentes emojis
    const hearts = ["❤️", "💖", "💗", "💘", "💕"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    // Tamaño aleatorio
    const size = Math.random() * 30 + 15; // 15px a 45px
    heart.style.fontSize = size + "px";

    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + "vw";

    // Velocidad aleatoria
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    // Opacidad levemente variable
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
