const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});


list.append(...items);

/*const list = document.querySelector("#ingredients");

const items = ingredients
  .map((ingredient) => `<li class = "item">${ingredient}</li> `)
  .join("");

list.insertAdjacentHTML ("beforeend", items);
console.log(items);*/