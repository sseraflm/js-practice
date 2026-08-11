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

// Three-step Promise

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
    .then(function (result) {
        return result * 2;
    })
    .then(function (result) {
        return result * 2;
    })
    .then(function (result) {
        return result * 2;
    });

// User -> Profile -> Data

let user = {
    id: 1,
    username: "sserafim",
};
function getUser() {}
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(user);
    }, 1000);
})
    .then(function (result) {
        return result.id;
    })
    .then(function (result) {
        alert(`User id is: ${result}`);
    });

// Chain with error

let errorPromise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("Truth");
    }, 1000);
})
    .then(function (result) {
        throw new Error("Lie");
    })
    .catch(alert);

// Delayed messages

let delayPromise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("First one");
    }, 1000);
})
    .then(function (result) {
        alert(result);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Second one");
            }, 1200);
        });
    })
    .then(function (result) {
        alert(result);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Third one");
            }, 500);
        });
    })
    .then(function (result) {
        alert(result);
    });
