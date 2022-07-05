const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num) {
  return num.reduce((a, b) => a + b, 0);
};

const multiply = function (num) {
  return num.reduce((a, b) => a * b);
};

const power = function (number, power) {
  return Math.pow(number, power);
};

const factorial = function (num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
