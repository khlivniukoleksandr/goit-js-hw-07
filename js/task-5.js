// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і задає це значення кольору
// текстовим вмістом для span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector("button.change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector("span.color");
changeColorButton.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  const bodyColor = body.style.backgroundColor;
  spanColor.textContent = bodyColor;
});
