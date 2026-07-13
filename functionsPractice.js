// Function Welcome.

function welcomeUser(adoName) {
  let message = "Hello, " + adoName;
  alert(message);
}

welcomeUser("Akhuri-Chan");

// Function sum of numbers.

function sumOfNumbers(numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  alert(sum);
}

sumOfNumbers(2, 2);

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
