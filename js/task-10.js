function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("#controls input"),
  createBtn: document.querySelector("#controls button[data-create]"),
  destroyBtn: document.querySelector("#controls button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let widthStep = 30;
let heightStep = 30;

refs.createBtn.addEventListener("click", onCreateBtn);
refs.destroyBtn.addEventListener("click", reset);

function onCreateBtn() {
  const inputValue = Number(refs.inputEl.value);
  let amountEl = [];

  for (let i = 1; i <= inputValue; i += 1) {
    amountEl.push(i);
  }

  function createBoxes(amount) {
    const boxEl = amount.map((element) => {
      const box = document.createElement("div");
      box.style.width = `${widthStep}px`;
      box.style.height = `${heightStep}px`;
      box.style.backgroundColor = getRandomHexColor();
      widthStep += 10;
      heightStep += 10;
      console.log(box);
      return box;
    });

    refs.boxes.append(...boxEl);
  }

  createBoxes(amountEl);
}

function reset() {
  refs.boxes.innerHTML = "";
}
