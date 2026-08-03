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
