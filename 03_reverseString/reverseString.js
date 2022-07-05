const reverseString = function (text) {
  // let textIndexReverse = text.length;
  // let output = "";
  // for (let i = 0; i < text.length; i++) {
  //   textIndexReverse -= 1;
  //   output += text.charAt(textIndexReverse);
  // }

  // return output;

  return text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
