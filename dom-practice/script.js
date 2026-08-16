const header = document.querySelector("h1");
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");

const song = document.querySelector(".song");
const songsList = document.getElementsByClassName("song");
const button = document.getElementById("button1");

console.log(header);
console.log(name1);
console.log(name2);
console.log(song);
console.log(songsList);

header.innerText = "Chando";

name2.innerText = "Miko";

for (const song of songsList) {
    console.log(song.textContent);
}

songsList[2].innerText = "soldier game";
button.innerText = "Japan's national football team.";

const input = document.getElementById("adoInput");
input.value = "Soldier";
console.log(input.value);

const link = document.querySelector("a");

console.log(link.href);

link.href = "ado.ado";
link.textContent = "yes";

const img = document.querySelector("img");

img.alt = "egg2";

img.src = "egg1";

console.log(link.getAttribute("id"));
link.setAttribute("id", "link2");
link.setAttribute("link", "adoLink");

console.log(link.attributes);
console.log(link.getAttribute("Chando")); // null
console.log(link.className);
link.className = "ye";

const header2 = document.getElementById("title");

console.log(header2.dataset.userId);

header2.dataset.userId = "yes";
console.log(header2.dataset.userId);

// Modify practice.

const list = document.getElementById("list");

const listElement = document.createElement("li");

listElement.innerHTML = "Vivarium";

listElement.className = "Adocado";

list.append(listElement);

const songs = ["Shoka", "Vivarium", "MIRROR", "Do the dance!"];

for (const song of songs) {
    const listItem = document.createElement("li");
    listItem.innerText = song;
    list.append(listItem);
}

list.children[2].remove();
