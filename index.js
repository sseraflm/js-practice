"use strict";
// Server Specification.
const serverOS = "Ubuntu 24.04 LTS";
const serverProcessor = "Ampere Altra";
const serverRamAmout = "24GB LPDDR4";
let diskusage = 40;

diskusage = 55;

console.log(
  `Your server is running on ${serverOS} using ${serverProcessor} processor and ${serverRamAmout} RAM Memory it currently is using ${diskusage}% of the drive.`,
);

// Currrently Playing.

let currentArtist = "Ado";
let currentSong = "Shoka";

console.log(
  `The current song you are listening to is ${currentSong} made by the artist ${currentArtist}!`,
);

// What type is this.

let thisIsAnString = "Hello";
let thisIsAnNumber = 2;
let thisIsAnBoolean = true;

console.log("The type of this variable is an:", typeof thisIsAnString);
console.log("The type of this variable is an:", typeof thisIsAnNumber);
console.log("The type of this variable is an:", typeof thisIsAnBoolean);

// Interaction.

let nameResult = prompt("What is your name?", "");
let yearResult = prompt("What year were you born in?", "");

alert(`Hello ${nameResult} you were born in the year ${yearResult}`);

// Type Conversion Trap

let numberOne = prompt("Input the first number.", "");
let numberTwo = prompt("Input the second number.", "");

alert(`Adding your number without conversion gives: ${numberOne + numberTwo}`);

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

alert(`Adding your number with conversion gives: ${numberOne + numberTwo}`);

// Modulo Tester

const firstNumber = 2;
const secondNumber = 2;

let correctRemainder = firstNumber % secondNumber;

let userAnswer = prompt("What will 2 % 2 give you?", "");

userAnswer = Number(userAnswer);

alert(correctRemainder === userAnswer);

// Incrementation.

let adoCount = 2;

adoCount++;

adoCount += 2;

console.log(adoCount);

// Concert entrance.

let adoTicket = confirm("Do you have a ticket?");
let vipAdoTicket = confirm("Do you have a vip ticket?");
let hasId = confirm("Do you have an ID with you?");

if ((adoTicket || vipAdoTicket) && hasId) {
  alert("You can enter Ado's concert!");
} else {
  alert("You can't enter Ado's concert :(");
}

// Current theme.

let userTheme = null;

const defaultTheme = "darkBlue";

let currentTheme = userTheme ?? defaultTheme;
console.log(`You are currently using ${currentTheme} motive!`);

// count loop.

for (let countAdo = 0; countAdo < 11; countAdo++) {
  console.log(countAdo);
}

for (let evenAdo = 0; evenAdo < 20; evenAdo++) {
  if (evenAdo % 2 === 0) {
    console.log(evenAdo);
  }
}

// Ado concert ticket checker.
let adoTicket = prompt("What ticket do you have? (normal, vip, backstage)", "");

switch (adoTicket) {
  case "normal":
    alert("Head to the normal section of the stadium.");
    break;
  case "vip":
    alert("Head to the vip section of the stadium.");
    break;
  case "backstage":
    alert("Head to the backstage section of the stadium.");
    break;
  default:
    alert("Unknown ticket type.");
}

// Prompt calculator.

let value1 = prompt("Choose the first number.", "");
let value2 = prompt("Choose the second number.", "");
let operation = prompt("Choose the operation you wish to do.", "");

value1 = Number(value1);
value2 = Number(value2);

switch (operation) {
  case "+":
    alert(value1 + value2);
    break;

  case "-":
    alert(value1 - value2);
    break;

  case "*":
    alert(value1 * value2);
    break;

  case "/":
    alert(value1 / value2);
    break;
  default:
    alert("Unkown Operation");
}

// FizzBuzz

for (let i = 1; i <= 100; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
