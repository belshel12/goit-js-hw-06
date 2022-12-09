function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  color: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
};

refs.buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const widgetColor = (refs.bodyEl.style.backgroundColor = getRandomHexColor());
  refs.color.textContent = widgetColor;
}
