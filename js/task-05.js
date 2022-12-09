const refs = {
  name: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

console.log(refs.name.textContent);
console.log(refs.spanEl.textContent);

refs.name.addEventListener("input", onInputName);

function onInputName(event) {
  event.preventDefault();

  const nameInput = event.target.value;

  if (nameInput) {
    refs.spanEl.textContent = nameInput;
  } else {
    refs.spanEl.textContent = "Anonimus";
  }
}
