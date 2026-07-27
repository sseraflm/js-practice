let header = document.querySelector("h1");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");

let song = document.querySelector(".song");
let songsList = document.getElementsByClassName("song");
let button = document.getElementById("button1");

console.log(header);
console.log(name1);
console.log(name2);
console.log(song);
console.log(songsList);

header.innerText = "Chando";

name2.innerText = "Miko";

for (let song of songsList) {
    console.log(song.textContent);
}

songsList[2].innerText = "soldier game";
button.innerText = "Japan's national football team.";
