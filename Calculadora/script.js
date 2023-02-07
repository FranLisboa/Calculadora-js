'use strict';

let stringNumber1 = '';
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

const deciamlBtn = document.querySelector('.decimal');

let content;

let lastAction = true;

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener('click', function () {
    if (stringNumber1.length < 12) {
      content = document.querySelector('.display').textContent;
      stringNumber1 = content + numberBtns[i].textContent;
      number1 = Number(stringNumber1);

      document.querySelector('.display').textContent = number1;
    }
  });
}

for (let i = 0; i < operationsBtns.length; i++) {
  operationsBtns[i].addEventListener('click', function () {
    operation = operationsBtns[i].textContent;

    number2 = number1;
    stringNumber1 = '';
    number1 = 0;
    document.querySelector('.display').textContent = '';
    lastAction = true;
  });
}

equalBtn.addEventListener('click', function () {
  if (lastAction) {
    if (operation === '+') {
      number1 = number2 + number1;
    } else if (operation === '-') {
      number1 = number2 - number1;
    } else if (operation === 'x') {
      number1 = number2 * number1;
    } else if (operation === '/') {
      number1 = number2 / number1;
    }

    stringNumber1 = String(number1);
    if (stringNumber1.length >= 12) {
      if (Number(stringNumber1[12]) > 5) {
        let newNum = Number(stringNumber1[11]) + 1;
        stringNumber1 = stringNumber1.substring(0, 11) + newNum;
      }
      stringNumber1 = stringNumber1.substring(0, 13);
      number1 = Number(stringNumber1);
    }

    document.querySelector('.display').textContent = number1;
    lastAction = false;
  }
});

resetBtn.addEventListener('click', function () {
  stringNumber1 = '';
  number1 = 0;
  operation = '';
  number2 = 0;
  document.querySelector('.display').textContent = '';
  lastAction = true;
});

deciamlBtn.addEventListener('click', function () {
  let confirm = true;
  for (let i = 0; i < stringNumber1.length; i++) {
    if (stringNumber1[i] === '.') {
      confirm = false;
    }
  }
  if (confirm == true) {
    stringNumber1 += '.';

    document.querySelector('.display').textContent = stringNumber1;
  }
});
