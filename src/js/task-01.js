// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesRef = document.querySelector("#categories");
console.log('Number of categories:', categoriesRef.children.length);
console.log('Category:', categoriesRef.firstElementChild.firstElementChild.textContent);
console.log('Elements:', categoriesRef.firstElementChild.lastElementChild.childElementCount);
console.log('Category:', categoriesRef.firstElementChild.nextElementSibling.firstElementChild.textContent);
console.log("Category:", categoriesRef.firstElementChild.nextElementSibling.lastElementChild.childElementCount);
console.log('Category:', categoriesRef.firstElementChild.nextElementSibling.firstElementChild.textContent);
console.log("Category:", categoriesRef.firstElementChild.nextElementSibling.lastElementChild.childElementCount);
console.log("Category:", categoriesRef.lastElementChild.firstElementChild.textContent);
console.log("Category:", categoriesRef.lastElementChild.lastElementChild.childElementCount);