// Завдання 1
const listRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${listRef.length}`);

//Завдання 2

for (let item of listRef) {
  const items = item.children;

  const categories = items[0];
  const elements = items[1];

  console.log(`Category: ${categories.textContent}`);
  console.log(`Elements: ${elements.children.length}`);
}
