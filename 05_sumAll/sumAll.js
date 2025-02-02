const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    [min, max] = [max, min];
  }

  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
