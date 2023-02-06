'use strict';

let number1 = 0;
let operation = '';
let number2 = 0;
// document
//   .querySelectorAll(".numbers")
//   .addEventListener("click", function (e) {});

// let aaa = document.querySelectorAll(".numbers");

document.querySelector('.display').textContent = '';

const numberBtns = document.querySelectorAll('.numbers');

const operationsBtns = document.querySelectorAll('.operations');

const equalBtn = document.querySelector('.equal');

const resetBtn = document.querySelector('.reset');

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener('click', function () {
    let content = document.querySelector('.display').textContent;
    number1 = Number(content + numberBtns[i].textContent);
    document.querySelector('.display').textContent = number1;
  });
  //12 max cap
}

for (let i = 0; i < operationsBtns.length; i++) {
  operationsBtns[i].addEventListener('click', function () {
    operation = operationsBtns[i].textContent;
    console.log(operation);
    number2 = number1;
    document.querySelector('.display').textContent = '';
  });
}

equalBtn.addEventListener('click', function () {
  if (operation === '+') {
    number1 = number2 + number1;
  } else if (operation === '-') {
    number1 = number2 - number1;
  } else if (operation === 'x') {
    number1 = number2 * number1;
  } else if (operation === '/') {
    number1 = number2 / number1;
  }
  document.querySelector('.display').textContent = number1;
});

resetBtn.addEventListener('click', function () {
  number1 = 0;
  operation = '';
  number2 = 0;
  document.querySelector('.display').textContent = '';
});
