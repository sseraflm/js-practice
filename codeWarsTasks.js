// Even or Odd
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Return Negative
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}
// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;

    case "-":
      return value1 - value2;
      break;

    case "*":
      return value1 * value2;
      break;

    case "/":
      return value1 / value2;
      break;
  }

  return 0;
}

// Opposite number
function opposite(number) {
  if (number > 0) {
    return -number;
  } else {
    return number * -1;
  }
}
// Simpler solution
function opposite(number) {
  return -number;
}

// Convert a Number to a String!
function numberToString(num) {
  num = String(num);
  return num;
}

// Convert a String to a Number!
const stringToNumber = function (str) {
  str = Number(str);
  return str;
};
// Grasshopper - Summation
var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
};
// Grasshopper – Personalized Message
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};
// Function 1 – hello world
function greet() {
  return "hello world!";
}

// Returning Strings
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

// Is he gonna survive?

function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}
