// const repeatString = function (string, amount) {
//   if (amount >= 0) {
//     let output = "";
//     for (let i = 0; i < amount; i++) {
//       output += string;
//     }
//     return output;
//   } else {
//     return "ERROR";
//   }
// };

const repeatString = function (string, amount) {
  if (amount < 0) return "ERROR";

  let output = "";
  for (let i = 0; i < amount; i++) {
    output += string;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
