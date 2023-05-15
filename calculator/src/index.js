/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/

'use strict'

const displayMem = document.querySelector('.display__memory')
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const mrcButton = document.querySelector('.button__mrc');
const mMinusButton = document.querySelector('.button__m-');
const mPlusButton = document.querySelector('.button__m');
const eqButton = document.getElementById('eq');

let firstNum = '';
let secondNum = '';
let operator = '';
let memory = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
    } else if (operator === '') {
      firstNum += value;
      display.value = firstNum;
    } else {
      secondNum += value;
      display.value = secondNum;
    }
  });
});

eqButton.addEventListener('click', () => {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNum) + parseFloat(secondNum);
      break;
    case '-':
      result = parseFloat(firstNum) - parseFloat(secondNum);
      break;
    case '*':
      result = parseFloat(firstNum) * parseFloat(secondNum);
      break;
    case '/':
      result = parseFloat(firstNum) / parseFloat(secondNum);
      break;
  }
  display.value = result;
  firstNum = result.toString();
  secondNum = '';
  operator = '';
});

document.querySelector('.button.white').addEventListener('click', () => {
  display.value = '';
  firstNum = '';
  secondNum = '';
  operator = '';
});

mrcButton.addEventListener('click', () => {
  if (memory !== null) {
    display.value = memory.toString();
    memory = '';
  }
});

mMinusButton.addEventListener('click', () => {
  memory = null;
  displayMem.classList.remove('memory');
});

mPlusButton.addEventListener('click', () => {
  memory = parseFloat(display.value);
  displayMem.classList.add('memory')
});