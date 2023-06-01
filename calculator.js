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

function exponentiation(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function roundFraction(a) {
  return Math.round(a * 100) / 100;
}

function calculator() {
  let int1 = parseFloat(prompt('Введите первое число:'));
  let operator = prompt('Введите оператор (+, -, *, /, ^, √, round):');
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
  } else if (operator === '^') {
    result = exponentiation(int1, int2);
  } else if (operator === '√') {
    result = squareRoot(int1);
  } else if (operator === 'round') {
    result = roundFraction(int1);
  } else {
    result = 'Операция не поддерживается. Выберите из (+, -, *, /, ^, √, round).';
  }

  console.log('Результат: ' + result);
}

calculator();
