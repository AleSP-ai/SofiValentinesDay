const noBtn = document.getElementById("noBtn");
const siBtn = document.getElementById("siBtn");
const resultDiv = document.getElementById("result");

noBtn.addEventListener("mouseover", function () {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

siBtn.addEventListener("click", function () {
  resultDiv.innerHTML = `
    <img src="https://media.giphy.com/media/yBwgX64KAPrHW2ltZ2/giphy.gif">
    <p>¡Sabía que ibas a decir que sí! 💘</p>
  `;
});
