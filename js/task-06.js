const input = document.querySelector("#validation-input");

input.addEventListener("blur", onOutput);

function onOutput(evt) {
  const valueLength = evt.target.value.length;
  const dataValidate = Number(input.dataset.length);

  if (valueLength !== dataValidate) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
}
