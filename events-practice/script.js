// Change header
const button = document.getElementById("button");
const header = document.getElementById("header");

function changeHeader() {
    header.innerText = "Ado is an Utaite.";
}

button.addEventListener("click", changeHeader);

// Hide Text

const button2 = document.getElementById("button2");
const paragraph = document.getElementById("paragraph");

function hideText() {
    paragraph.classList.toggle("hidden");
}

button2.addEventListener("click", hideText);

// dark mode

const darkModeButton = document.getElementById("darkMode");
const body = document.querySelector("body");

function darkMode() {
    body.classList.toggle("dark");
}

darkModeButton.addEventListener("click", darkMode);

// Clicks count

const clickCount = document.getElementById("clickCount");
const clickButton = document.getElementById("clickButton");

let count = 0;
function countClicks() {
    count++;
    clickCount.innerText = `Button clicked: ${count} times`;
}
clickButton.addEventListener("click", countClicks);

// Button that changes itself

const changingButton = document.getElementById("changingButton");

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

const form = document.getElementById("form");
const result = document.getElementById("result");

function stopEvent(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    if (nameInput.value === "") {
        const noResult = document.createElement("p");
        noResult.innerText = "No text in input.";
        result.append(noResult);
    } else {
        const resultP = document.createElement("p");
        resultP.innerText = nameInput.value;
        result.append(resultP);
    }
}

form.addEventListener("submit", stopEvent);

// Stop Links

const link = document.getElementById("link");
const checkbox = document.getElementById("allowNav");

function stopLink(event) {
    if (!checkbox.checked) {
        event.preventDefault();
    }
}

link.addEventListener("click", stopLink);

// Context menu

const basicText = document.getElementById("basicText");

function stopMenu(event) {
    event.preventDefault();
    basicText.innerText = "Gyaru";
}

basicText.addEventListener("contextmenu", stopMenu);

// Bubbling

const outerDiv = document.getElementById("outerDiv");

function bubblingAlert(event) {
    console.log(event.target);
    console.log(event.currentTarget);
}

outerDiv.addEventListener("click", bubblingAlert);

// Delegation

const mainList = document.getElementById("mainList");
const newLiButton = document.getElementById("newLi");
const liInput = document.getElementById("liInput");

function deleteLi(event) {
    if (event.target.classList.contains("delete")) {
        const foundLi = event.target.closest("li");
        foundLi.remove();
    }
}
function newLi() {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    const deleteButton = document.createElement("button");
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

const keyInput = document.getElementById("keydown");

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

const mouseMoveDiv = document.getElementById("mouseMove");
const currentCordsP = document.getElementById("currentCords");

function showCords(event) {
    const xCord = event.clientX;
    const yCord = event.clientY;
    currentCordsP.innerText = `X: ${xCord}, Y: ${yCord}`;
}

mouseMoveDiv.addEventListener("mousemove", showCords);

// Class inline

const cardButton = document.getElementById("cardButton");
const cardDiv = document.getElementById("card");

function changeClass() {
    if (cardDiv.classList.contains("active")) {
        cardDiv.classList.remove("active");
        cardDiv.style.backgroundColor = "";
    } else {
        cardDiv.classList.add("active");
        cardDiv.style.backgroundColor = "blue";
    }
}

cardButton.addEventListener("click", changeClass);

// Transistionend

const listMain = document.getElementById("listMain");

function deleteTLi(event) {
    if (event.target.classList.contains("remove")) {
        const liFound = event.target.closest("li");
        liFound.classList.add("fade-out");
        liFound.addEventListener("transitionend", () => liFound.remove());
    }
}

listMain.addEventListener("click", deleteTLi);

// FIlter

const filterButtons = document.getElementById("filterButtons");
const filterList = document.getElementById("filterList");

function showAll() {
    for (const item of filterList.children) {
        item.classList.remove("hidden");
    }
}

function showDone() {
    for (const item of filterList.children) {
        if (item.dataset.status === "done") {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    }
}
function showActive() {
    for (const item of filterList.children) {
        if (item.dataset.status === "active") {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    }
}

function filterClicks(event) {
    if (event.target.tagName !== "BUTTON") return;
    if (event.target.innerText === "All") {
        showAll();
    } else if (event.target.innerText === "Active") {
        showActive();
    } else if (event.target.innerText === "Done") {
        showDone();
    }
}
filterButtons.addEventListener("click", filterClicks);
