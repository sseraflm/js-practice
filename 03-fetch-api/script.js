// Safe division

const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const divResult = document.getElementById("result");
const calculateButton = document.getElementById("calculate");
function divide(numberOne, numberTwo) {
    if (numberTwo === 0) {
        throw new Error("You cant divide by zero.");
    }
    return numberOne / numberTwo;
}
function calculate() {
    try {
        const result = divide(Number(numberOne.value), Number(numberTwo.value));
        const newResultElement = document.createElement("p");
        newResultElement.innerText = result;
        divResult.append(newResultElement);
    } catch (error) {
        const newErrorResult = document.createElement("p");
        newErrorResult.innerText = error.message;
        divResult.append(newErrorResult);
    }
}
calculateButton.addEventListener("click", calculate);

// User input validation

const usernameInput = document.getElementById("username");
const favoriteSingerInput = document.getElementById("favoriteSinger");
const userSubmit = document.getElementById("userSubmit");
function userValidation() {
    try {
        if (usernameInput.value === "sserafim" && favoriteSingerInput.value === "Ado") {
            const newElement = document.createElement("p");
            newElement.innerText = "Login successful";
            document.body.append(newElement);
        } else {
            throw new Error("Wrong data.");
        }
    } catch (error) {
        const errorElement = document.createElement("p");
        errorElement.innerText = error.message;
        document.body.append(errorElement);
    }
}

userSubmit.addEventListener("click", userValidation);

// Promises

const promise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("Succed!");
    }, 1000);
});

promise.then(result => alert(result));

const promiseFail = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Fail.");
    }, 1000);
});

promiseFail.catch(result => alert(result));

// Three-step Promise

const threeStepPromise = new Promise(function (resolve) {
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

const user = {
    id: 1,
    username: "sserafim",
};
function getUser() {}
const userTaskPromise = new Promise(function (resolve) {
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

    getUser()
// Chain with error

const errorPromise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("Truth");
    }, 1000);
})
    .then(function (result) {
        throw new Error("Lie");
    })
    .catch(alert);

// Delayed messages

const delayPromise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("First one");
    }, 1000);
})
    .then(function (result) {
        alert(result);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Second one");
            }, 1200);
        });
    })
    .then(function (result) {
        alert(result);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Third one");
            }, 500);
        });
    })
    .then(function (result) {
        alert(result);
    });

async function displayMessenges() {
    const delayPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("First one");
        }, 1000);
    });

    const firstOne = await delayPromise;

    alert(firstOne);
    const secondPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second one");
        }, 1200);
    });

    const secondOne = await secondPromise;

    alert(secondOne);

    const thirdPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third one");
        }, 1200);
    });

    const thirdOne = await thirdPromise;
    alert(thirdOne);
}

// Async caluclator

async function asyncCalculate() {
    const additionPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(10 + 5);
        }, 500);
    });
    const additionResult = await additionPromise;

    const multiplyPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(additionResult * 2);
        }, 500);
    });
    const multiplyResult = await multiplyPromise;

    const subtractionPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(multiplyResult - 10);
        }, 500);
    });
    const subtractionResult = await subtractionPromise;

    const divisionPromise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(subtractionResult / 10);
        }, 500);
    });
    const divisionResult = await divisionPromise;

    alert(divisionResult);
}

// Async error handling

async function errorHandle() {
    try {
        const rejectPromise = new Promise(function (reject) {
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

const userObject = [
    {
        name: "sserafim",
        age: 444,
    },
    {
        name: "Tokyo",
        age: 222,
    },
];

const json = JSON.stringify(userObject);

alert(json);

const objectAgain = JSON.parse(json);

// Fetch

const objectList = document.getElementById("objectList");
function createLi(object) {
    const userLi = document.createElement("li");

    const idP = document.createElement("p");
    idP.innerText = object.id;

    const nameP = document.createElement("p");
    nameP.innerText = object.name;

    const usernameP = document.createElement("p");
    usernameP.innerText = object.username;

    userLi.append(idP, nameP, usernameP);

    objectList.append(userLi);
}
async function fetchUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    if (response.ok) {
        const users = await response.json();

        console.log(users[4].name);

        const foundUser = users.find(user => user.id === 3);
        console.log(foundUser.name);

        for (const user of users) {
            createLi(user);
        }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

fetchUsers();
