const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function handleClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

console.log(body);