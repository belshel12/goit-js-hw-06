const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onClick);

function onClick(event) {
  const inputValue = event.currentTarget.value;

  spanEl.style.fontSize = `${inputValue}px`;
}
