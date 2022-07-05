const removeFromArray = function (array, ...argument) {
  // output = [...array];

  // for (let index = 0; index < argument.length; index++) {
  //   output = Array.from(output, (x) =>
  //     x === argument[index] ? null : x
  //   ).filter((n) => n);
  // }

  // return output;

  return array.filter((x) => !argument.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
