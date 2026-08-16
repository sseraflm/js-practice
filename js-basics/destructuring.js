// Array destructuring.
const favoriteSongs = ["Shoka", "Show", "MIRROR"];

let [song1, song2, song3, song4 = "Unknown"] = favoriteSongs;

console.log(song1, song2, song3, song4);

let [song5, , song7] = favoriteSongs;

console.log(song5, song7);

// Object destructuring.

const user = {
    username: "sserafim",
    age: 16,
    country: "Poland",
};

let { username, age } = user;

console.log(username, age);

let { username: ssera, isStudent = true } = user;

console.log(ssera, isStudent);

// Spread syntax.

const songsCopy = [...favoriteSongs];
console.log(songsCopy);

const moreSongs = [...favoriteSongs, "Dried Flowers"];
console.log(moreSongs);

const japaneseSongs = ["Shoka", "Show"];
const otherSongs = ["MIRROR", "Vivarium"];

const mergedSongs = [...japaneseSongs, ...otherSongs];
console.log(mergedSongs);

const userCopy = { ...user };
console.log(userCopy);

const changedUser = {
    ...user,
    username: "ssera",
};

console.log(changedUser);
