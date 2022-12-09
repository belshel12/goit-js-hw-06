const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onClick);

function onClick(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.value;

  spanEl.style.fontSize = `${inputValue}px`;
}
