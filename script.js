let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let randomColor = getRandomColor();
  h1.style.color = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
