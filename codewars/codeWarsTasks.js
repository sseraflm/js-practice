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

    case "-":
      return value1 - value2;

    case "*":
      return value1 * value2;

    case "/":
      return value1 / value2;
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
function simplerOpposite(number) {
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
function greet1() {
  return "hello world!";
}

// Returning Strings
function greet2(name) {
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

// Grasshopper – Check for factor

function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

// Opposites Attract

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// Beginner Series #2 Clock

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Will there be enough space?

function enough(cap, on, wait) {
  const freeSeats = cap - on;
  if (wait > freeSeats) {
    return wait - freeSeats;
  } else {
    return 0;
  }
}

// Understanding closures - the basics

function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

// Closure Counter

function counter() {
  let count = 0;

  return function newCounter() {
    return ++count;
  };
}

// You Can't Code Under Pressure #2

function Counter() {
  let count = 0;
  //quickly, now!
  this.check = function () {
    return count;
  };
  this.increment = function () {
    return ++count;
  };
}
