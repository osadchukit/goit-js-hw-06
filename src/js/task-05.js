// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const placeholderRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

placeholderRef.addEventListener('input', onInput);

function onInput(event) {
  const { value } = event.currentTarget;

    value === ''
      ? (outputRef.textContent = 'Anonymous')
      : (outputRef.textContent = value.trim());

//   if (value !== '') {
//     return (outputRef.textContent = value.trim());
//   }
//   return outputRef.textContent = 'Anonymous';
}

// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {elements: { username, password }} = event.currentTarget;
//   console.log(username.value, password.value);
// });

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// const form = document.querySelector('.form');
// // console.log(form);

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event.currentTarget);
//   const {elements: { login, password }, } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// setOutput();

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   console.log(selectedOptionIndex);
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
