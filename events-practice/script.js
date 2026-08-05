// Change header
let button = document.getElementById("button");
let header = document.getElementById("header");

function changeHeader() {
    header.innerText = "Ado is an Utaite.";
}

button.addEventListener("click", changeHeader);

// Hide Text

let button2 = document.getElementById("button2");
let paragraph = document.getElementById("paragraph");

function hideText() {
    paragraph.classList.toggle("hidden");
}

button2.addEventListener("click", hideText);

// dark mode

let darkModeButton = document.getElementById("darkMode");
let body = document.querySelector("body");

function darkMode() {
    body.classList.toggle("dark");
}

darkModeButton.addEventListener("click", darkMode);

// Clicks count

let clickCount = document.getElementById("clickCount");
let clickButton = document.getElementById("clickButton");

let count = 0;
function countClicks() {
    count++;
    clickCount.innerText = `Button clicked: ${count} times`;
}
clickButton.addEventListener("click", countClicks);

// Button that changes itself

let changingButton = document.getElementById("changingButton");

function changeButton() {
    if (changingButton.classList.contains("inactive")) {
        changingButton.innerText = "Active";
        changingButton.classList.remove("inactive");
        changingButton.classList.add("active");
    } else if (changingButton.classList.contains("active")) {
        changingButton.classList.remove("active");
        changingButton.classList.add("inactive");
        changingButton.innerText = "Inactive";
    }
}

changingButton.addEventListener("click", changeButton);

// Form

let form = document.getElementById("form");
let result = document.getElementById("result");

function stopEvent(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name");
    if (nameInput.value === "") {
        let noResult = document.createElement("p");
        noResult.innerText = "No text in input.";
        result.append(noResult);
    } else {
        let resultP = document.createElement("p");
        resultP.innerText = nameInput.value;
        result.append(resultP);
    }
}

form.addEventListener("submit", stopEvent);

// Stop Links

let link = document.getElementById("link");
let checkbox = document.getElementById("allowNav");

function stopLink(event) {
    if (!checkbox.checked) {
        event.preventDefault();
    }
}

link.addEventListener("click", stopLink);

// Context menu

let basicText = document.getElementById("basicText");

function stopMenu(event) {
    event.preventDefault();
    basicText.innerText = "Gyaru";
}

basicText.addEventListener("contextmenu", stopMenu);

// Bubbling

let outerDiv = document.getElementById("outerDiv");

function bubblingAlert(event) {
    console.log(event.target);
    console.log(event.currentTarget);
}

outerDiv.addEventListener("click", bubblingAlert);

// Delegation

let mainList = document.getElementById("mainList");
let newLiButton = document.getElementById("newLi");
let liInput = document.getElementById("liInput");

function deleteLi(event) {
    if (event.target.classList.contains("delete")) {
        let foundLi = event.target.closest("li");
        foundLi.remove();
    }
}
function newLi() {
    let newLi = document.createElement("li");
    let newP = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    newP.innerText = liInput.value;

    newLi.append(newP, deleteButton);
    mainList.append(newLi);
    liInput.value = "";
}

mainList.addEventListener("click", deleteLi);
newLiButton.addEventListener("click", newLi);

// Keydown

let keyInput = document.getElementById("keydown");

function clearInput(event) {
    if (event.key === "Escape") {
        keyInput.value = "";
    } else if (event.key === "Enter") {
        console.log(keyInput.value);
        keyInput.value = "";
    }
}

keyInput.addEventListener("keydown", clearInput);

// Mouse move

let mouseMoveDiv = document.getElementById("mouseMove");
let currentCordsP = document.getElementById("currentCords");

function showCords(event) {
    let xCord = event.clientX;
    let yCord = event.clientY;
    currentCordsP.innerText = `X: ${xCord}, Y: ${yCord}`;
}

mouseMoveDiv.addEventListener("mousemove", showCords);
