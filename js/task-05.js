const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(evt) {
  input.value !== ""
    ? (output.textContent = evt.target.value)
    : (output.textContent = "Anonymous");
}
