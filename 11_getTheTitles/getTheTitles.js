const getTheTitles = function (books) {
  let list = [];
  books.forEach((book) => list.push(book.title));

  return list;
};

// Do not edit below this line
module.exports = getTheTitles;
