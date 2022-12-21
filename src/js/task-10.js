// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createButRef = document.querySelector('[data-create');
const destroyButRef = document.querySelector('[data-destroy');
const boxesRef = document.querySelector('#boxes');

createButRef.addEventListener('click', createBoxes);
destroyButRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  // const amount = inputRef.value;

  let arr = [];

  for (let i = 1; i <= inputRef.value; i++) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width += i * 10 + 30 + 'px';
    divEl.style.height += i * 10 + 30 + 'px';
    console.log(divEl);
    arr.push(divEl);
  }
  boxesRef.append(...arr);
}

function destroyBoxes() {
  inputRef.value = '';
  boxesRef.innerHTML = '';
}
