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

let input = document.getElementById("adoInput");
input.value = "Soldier";
console.log(input.value);

let link = document.querySelector("a");

console.log(link.href);

link.href = "ado.ado";
link.textContent = "yes";

let img = document.querySelector("img");

img.alt = "egg2";

img.src = "egg1";

console.log(link.getAttribute("id"));
link.setAttribute("id", "link2");
link.setAttribute("link", "adoLink");

console.log(link.attributes);
console.log(link.getAttribute("Chando")); // null
console.log(link.className);
link.className = "ye";

let header2 = document.getElementById("title");

console.log(header2.dataset.userId);

header2.dataset.userId = "yes";
console.log(header2.dataset.userId);
