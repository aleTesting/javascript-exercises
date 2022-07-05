const fibonacci = function (int) {
  if (typeof int === "string") {
    int = parseInt(int);
  }
  if (int < 0) return "OOPS";

  let sum = 1;
  let a = 1;
  let b = 1;

  for (let index = 0; index < int - 2; index++) {
    sum = a + b;
    a = b;
    b = sum;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
