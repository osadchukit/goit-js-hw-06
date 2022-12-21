// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector(
  "#ingredients"
);

// for (let i = 0; i < ingredients.length; i++) {
//   const liEl = document.createElement("li");
//   liEl.classList.add('item')
//   liEl.textContent = ingredients[i]
//   console.log(liEl);
//   // ingredientsRef.append(liEl);
// }

const arrLi = ingredients.map((elem) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = elem;
  return liEl;
});

ingredientsRef.append(...arrLi);
