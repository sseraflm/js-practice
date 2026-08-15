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

async function displayMessenges() {
    let delayPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("First one");
        }, 1000);
    });

    let firstOne = await delayPromise;

    alert(firstOne);
    let secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second one");
        }, 1200);
    });

    let secondOne = await secondPromise;

    alert(secondOne);

    let thirdPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Third one");
        }, 1200);
    });

    let thirdOne = await thirdPromise;
    alert(thirdOne);
}

// Async caluclator

async function calculate() {
    let additionPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(10 + 5);
        }, 500);
    });
    let additionResult = await additionPromise;

    let multiplyPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(additionResult * 2);
        }, 500);
    });
    let multiplyResult = await multiplyPromise;

    let subtractionPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(multiplyResult - 10);
        }, 500);
    });
    let subtractionResult = await subtractionPromise;

    let divisionPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(subtractionResult / 10);
        }, 500);
    });
    let divisionResult = await divisionPromise;

    alert(divisionResult);
}

// Async error handling

async function errorHandle() {
    try {
        let rejectPromise = new Promise(function (reject) {
            setTimeout(() => {
                reject("This is an error.");
            }, 1000);
        });

        await rejectPromise;
    } catch (error) {
        alert(error);
    }
}

// JSON

let userObject = [
    {
        name: "sserafim",
        age: 444,
    },
    {
        name: "Tokyo",
        age: 222,
    },
];

let json = JSON.stringify(userObject);

alert(json);

let objectAgain = JSON.parse(json);

// Fetch

let objectList = document.getElementById("objectList");
function createLi(object) {
    let userLi = document.createElement("li");

    let idP = document.createElement("p");
    idP.innerText = object.id;

    let nameP = document.createElement("p");
    nameP.innerText = object.name;

    let usernameP = document.createElement("p");
    usernameP.innerText = object.username;

    userLi.append(idP, nameP, usernameP);

    objectList.append(userLi);
}
async function fetchUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";

    let response = await fetch(url);
    if (response.ok) {
        let users = await response.json();

        console.log(users[4].name);

        let foundUser = users.find(user => user.id === 3);
        console.log(foundUser.name);

        for (let user of users) {
            createLi(user);
        }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

fetchUsers();
