const inputControl = document.querySelector("#font-size-control");
const textControl = document.querySelector("#text");

inputControl.addEventListener("input", onControl);

function onControl() {
  const valueSize = inputControl.value;
  textControl.style.fontSize = `${valueSize}px`;
}
