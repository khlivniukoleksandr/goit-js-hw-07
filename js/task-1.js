const listElement = document.querySelectorAll(".item");

console.log(`Number of categories: ${listElement.length}`);

listElement.forEach((item) => {
  const title = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
