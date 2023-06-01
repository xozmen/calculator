function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function del(a, b) {
  return a / b;
}

function calculator() {
  let int1 = parseFloat(prompt('Введите первое число:'));
  let operator = prompt('Введите оператор (+, -, *, /):');
  let int2  = parseFloat(prompt('Введите второе число:'));

  let result;

  if (operator === '+') {
    result = sum(int1, int2);
  } else if (operator === '-') {
    result = minus(int1, int2);
  } else if (operator === '*') {
    result = mult(int1, int2);
  } else if (operator === '/') {
    result = del(int1, int2);
  } else {
    result = 'ты ебло ? плюс минус делить умножать.';
  }

  console.log('Результат: ' + result);
}

calculator();