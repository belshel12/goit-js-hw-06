const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients
  .map((ingredient) => `<li class = "item">${ingredient}</li> `)
  .join("");

list.append(items);
console.log(items);
