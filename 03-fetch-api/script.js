// Safe division

let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let divResult = document.getElementById("result");
let calculateButton = document.getElementById("calculate");
function divide(numberOne, numberTwo) {
    if (numberTwo === 0) {
        throw new Error("You cant divide by zero.");
    }
    return numberOne / numberTwo;
}
function calculate() {
    try {
        let result = divide(Number(numberOne.value), Number(numberTwo.value));
        let newResultElement = document.createElement("p");
        newResultElement.innerText = result;
        divResult.append(newResultElement);
    } catch (error) {
        let newErrorResult = document.createElement("p");
        newErrorResult.innerText = error.message;
        divResult.append(newErrorResult);
    }
}
calculateButton.addEventListener("click", calculate);

// User input validation

let usernameInput = document.getElementById("username");
let favoriteSingerInput = document.getElementById("favoriteSinger");
let userSubmit = document.getElementById("userSubmit");
function userValidation() {
    try {
        if (usernameInput.value === "sserafim" && favoriteSingerInput.value === "Ado") {
            let newElement = document.createElement("p");
            newElement.innerText = "Login successful";
            document.body.append(newElement);
        } else {
            throw new Error("Wrong data.");
        }
    } catch (error) {
        let errorElement = document.createElement("p");
        errorElement.innerText = error.message;
        document.body.append(errorElement);
    }
}

userSubmit.addEventListener("click", userValidation);

// Promises

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Succed!");
    }, 1000);
});

promise.then(result => alert(result));

let promiseFail = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Fail.");
    }, 1000);
});

promiseFail.catch(result => alert(result));
