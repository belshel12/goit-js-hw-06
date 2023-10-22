const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const amountValue = document.querySelector("#value");

let counterValue = 0;

increment.addEventListener("click", onIncrement);
decrement.addEventListener("click", onDecrement);

function onIncrement() {
  counterValue += 1;
  amountValue.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  amountValue.textContent = counterValue;
}
