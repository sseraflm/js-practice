"use strict";
const key = document.getElementById("key");
const value = document.getElementById("value");
const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");
function save() {
    localStorage.setItem(key.value, value.value);
}

function load() {
    const savedValue = localStorage.getItem(key.value);
    const savedText = document.createElement("p");
    if (savedValue === null) {
        savedText.innerText = "Could not find the key.";
        document.body.append(savedText);
        return;
    }
    savedText.innerText = `Key: ${key.value} Value: ${savedValue}`;
    document.body.append(savedText);
}

function deleteKey() {
    localStorage.removeItem(key.value);
}

function clearKey() {
    localStorage.clear();
}

saveButton.addEventListener("click", save);

loadButton.addEventListener("click", load);

deleteButton.addEventListener("click", deleteKey);

clearButton.addEventListener("click", clearKey);

// Save Array

const user = document.getElementById("user");
const age = document.getElementById("age");
const country = document.getElementById("country");
const favoriteSong = document.getElementById("favoriteSong");
const saveUserButton = document.getElementById("saveUser");
const loadUserButton = document.getElementById("loadUser");
const userDiv = document.getElementById("userData");

function saveUser() {
    const userObject = {
        user: user.value,
        age: age.value,
        country: country.value,
        favoriteSong: favoriteSong.value,
    };
    const storageData = localStorage.getItem("user");
    let userArray;
    if (storageData === null) {
        userArray = [];
    } else {
        userArray = JSON.parse(storageData);
    }
    userArray.push(userObject);
    const userData = JSON.stringify(userArray);

    localStorage.setItem("user", userData);
}

function loadUser() {
    const userData = localStorage.getItem("user");
    if (userData === null) {
        alert("No data found.");
        return;
    }
    const userArray = JSON.parse(userData);
    userArray.forEach(userObject => {
        createUserElements(userObject);
    });
}

function createUserElements(userObject) {
    const userContainer = document.createElement("div");

    const userUsername = document.createElement("p");
    userUsername.innerText = userObject.user;

    const userAge = document.createElement("p");
    userAge.innerText = userObject.age;

    const userCountry = document.createElement("p");
    userCountry.innerText = userObject.country;

    const userFavoriteSong = document.createElement("p");
    userFavoriteSong.innerText = userObject.favoriteSong;

    userContainer.append(userUsername, userAge, userCountry, userFavoriteSong);
    userDiv.append(userContainer);
}

saveUserButton.addEventListener("click", saveUser);

loadUserButton.addEventListener("click", loadUser);
