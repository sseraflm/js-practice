// Function Welcome.

function welcomeUser(adoName) {
  let message = "Hello, " + adoName;
  alert(message);
}

welcomeUser("Akhuri-Chan");

// Is the number even?

function evenNumber(number) {
  if (number % 2 === 0) {
    alert(number + " is even");
  }
}

evenNumber(2);

// default number.

function favorite(numberAdo, favoriteNumber = 2) {
  alert(numberAdo + "=" + favoriteNumber);
}

favorite("2");

// sum of numbers.

function sumOfNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let sumResult = sumOfNumbers(2, 2);

// Subtraction.

function subtractNumbers(a, b) {
  return a - b;
}

let subResult = subtractNumbers(2, 2);

// Multiply.

function multiplyNumbers(a, b) {
  return a * b;
}

let multResult = multiplyNumbers(2, 2);

// Divide.

function divideNumbers(a, b) {
  return a / b;
}

let diviResult = divideNumbers(2, 2);

// Result

function showResult(result) {
  console.log(`The result is ${result}`);
}

showResult(sumResult);
showResult(subResult);
showResult(multResult);
showResult(diviResult);

// Function Expressions

let temp = Number(prompt("What temperature is it?", ""));

const checkTemp = function (temperature) {
  if (temperature <= 0) {
    return "freezing";
  } else {
    return "above freezing";
  }
};

let freezeResult = checkTemp(temp);

alert(freezeResult);
