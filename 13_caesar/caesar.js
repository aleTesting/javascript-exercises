const caesar = function (text, shift) {
  let answer = "";

  for (let c of text) {
    let decimalCode;
    if (shift < 0) {
      shift = 26 + shift;
    }

    decimalCode = c.charCodeAt(0);
    let unicode;
    if (decimalCode >= 65 && decimalCode <= 90) {
      let filtered = decimalCode - 65;
      let almostAnswer = (filtered + shift) % 26;

      answer += String.fromCharCode(almostAnswer + 65);
      // console.log(String.fromCharCode(decimalCode));
    } else if (decimalCode >= 97 && decimalCode <= 122) {
      let filtered = decimalCode - 97;
      let almostAnswer = (filtered + shift) % 26;

      answer += String.fromCharCode(almostAnswer + 97);
    } else {
      answer += c;
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = caesar;
