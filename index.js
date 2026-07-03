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
