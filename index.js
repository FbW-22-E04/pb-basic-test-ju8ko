//Add answers here

// Los or New?

function nameOfCity(string) {
  const strBegin = string.toLowerCase().slice(0, 3);
  if (strBegin.includes("new") || strBegin.includes("los")) {
    console.log(string);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}
nameOfCity("New York");
nameOfCity("newark");
nameOfCity("London");

// isDivisible?

function isDivisible(integer) {
  console.log(integer % 100 === 0 ? "true" : "false");
}
isDivisible(1);
isDivisible(100);
isDivisible(1000);

// What's the weather?

function isRaining(rainingDay) {
  console.log(
    rainingDay === true
      ? "wet day - you need an umbrella"
      : "dry day - leave your umbrella at home"
  );
}
isRaining(true);

//Loops
//Sequence

//function geometricalSequence(){}

// Multiples

//function multiplesOfThree(){}

//Math
//You've got the power

function powerOf(int) {
  const powerOfInt = Math.pow(int, int);
  console.log(powerOfInt);
}
powerOf(3);
powerOf(4);

//Problem Solving
//How many?

function vowelCount(str) {
  const vowels = "AaEeIiOoUu";
  let counter = 0;
  for (i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
}
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
