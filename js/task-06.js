const inputEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", onSymbolBlur);

function onSymbolBlur() {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.replace("invalid", "valid");
  }
}
