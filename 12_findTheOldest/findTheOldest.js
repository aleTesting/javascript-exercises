const findTheOldest = function (people) {
  let oldestAge = 0;
  let oldestPerson;
  people.forEach((element) => {
    let dob = element.yearOfBirth;
    let dod = element.yearOfDeath;
    let currentYear = 2022;
    let age;
    if (dod) {
      age = dod - dob;
    } else {
      age = currentYear - dob;
    }
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = element;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
