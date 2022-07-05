const palindromes = function (input) {
  let text = input.toLowerCase();

  var code, i, len;

  let filteredText = "";

  for (i = 0, len = text.length; i < len; i++) {
    code = text.charCodeAt(i);
    if (code > 96 && code < 123) {
      // lower alpha (a-z)
      filteredText += text[i];
    }
  }

  text = filteredText;

  arrayed = text.split("");

  // arrayed.filter(
  //   (char, index) =>
  //     arrayed[index].charCodeAt(0) > 96 && arrayed[index].charCodeAt(0) < 123
  // );

  arrayedReversed = [...arrayed].reverse();

  // console.log("original", arrayed)
  // console.log("reversed", arrayedReversed)

  return (
    Array.isArray(arrayed) &&
    Array.isArray(arrayedReversed) &&
    arrayed.length === arrayedReversed.length &&
    arrayed.every((element, index) => arrayedReversed[index] == element)
  );
};

// function arrayRemove(array, ...args) {
//   return array.filter((x) => !args.includes(x));
// }

// Do not edit below this line
module.exports = palindromes;
