// Function Welcome.

function welcomeUser(adoName) {
    const message = "Hello, " + adoName;
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

const sumResult = sumOfNumbers(2, 2);

// Subtraction.

function subtractNumbers(a, b) {
    return a - b;
}

const subResult = subtractNumbers(2, 2);

// Multiply.

function multiplyNumbers(a, b) {
    return a * b;
}

const multResult = multiplyNumbers(2, 2);

// Divide.

function divideNumbers(a, b) {
    return a / b;
}

const diviResult = divideNumbers(2, 2);

// Result

function showResult(result) {
    console.log(`The result is ${result}`);
}

showResult(sumResult);
showResult(subResult);
showResult(multResult);
showResult(diviResult);

// Function Expressions

const temp = Number(prompt("What temperature is it?", ""));

const checkTemp = function (temperature) {
    if (temperature <= 0) {
        return "freezing";
    } else {
        return "above freezing";
    }
};

const freezeResult = checkTemp(temp);

alert(freezeResult);

// Ticket price

const age = Number(prompt("What is your age?"));

const ticketPrice = function (a) {
    if (a < 18) {
        return "Child ticket";
    } else if (a >= 18 && a < 65) {
        return "Adult ticket";
    } else if (a >= 65) {
        return "Senior ticket";
    }
};
const ticketResult = ticketPrice(age);

alert(ticketResult);

// Arrow functions sum.

const add = (a, b) => a + b;

alert(add(1, 2));

// Arrow functions isEven.

const isEven = a => {
    const result = a % 2;
    if (result === 0) {
        return true;
    } else {
        return false;
    }
};

alert(isEven(2));

// isBetween

const isBetween = (number, min, max) => {
    if (number >= min && number <= max) {
        return true;
    } else {
        return false;
    }
};
isBetween;
// isAdult

const isAdult = age => {
    return age >= 18;
};

isAdult;
