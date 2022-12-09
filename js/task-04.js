const counter = document.querySelectorAll("#counter button");

const decrementBtn = counter[0];
const incrementBtn = counter[1];
let counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onIncrement() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
