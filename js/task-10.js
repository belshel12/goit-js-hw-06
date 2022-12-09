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

refs.inputEl.addEventListener("input", onInputValue);

function onInputValue(event) {
  function createBoxes(amount) {
    const box = document.createElement("div");

    box.style.width = `${widthStep}px`;
    box.style.height = `${heightStep}px`;
    box.style.backgroundColor = getRandomHexColor();
    widthStep += 10;
    heightStep += 10;

    refs.boxes.append(box);
  }

  refs.createBtn.addEventListener("click", onCreateBtn);
  refs.destroyBtn.removeEventListener("click", onCreateBtn);

  function onCreateBtn(event) {
    createBoxes();
  }
}

// Чомусь кількість <div> = кількості кліків в інпуті
