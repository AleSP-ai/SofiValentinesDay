const noBtn = document.getElementById("noBtn");
const siBtn = document.getElementById("siBtn");
const resultDiv = document.getElementById("result");
const heartsContainer = document.getElementById("hearts-container");

// Botón NO escurridizo
noBtn.addEventListener("mouseover", function () {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Cuando toca SI
siBtn.addEventListener("click", function () {

  // Desaparece el botón NO
  noBtn.style.display = "none";

  // Mostrar GIF
  resultDiv.innerHTML = `
    <img src="https://media.giphy.com/media/yBwgX64KAPrHW2ltZ2/giphy.gif">
    <p>¡Sabía que ibas a decir que sí! 💘</p>
  `;

  // Iniciar lluvia de corazones
  startHearts();
});

function startHearts() {
  setInterval(() => {
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
}
