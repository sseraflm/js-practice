let songs = ["Shoka", "Vivarium", "MIRROR", "Dried Flowers"];

console.log(songs[0]);
console.log(songs[2]);
console.log(songs.length);

songs[2] = "Show";
console.log(songs[2]);

songs.push("Eien No Akuruhi");

console.log(songs.pop());

console.log(songs);

function displaySongs(songs) {
    for (let song of songs) {
        console.log(song);
    }
}

displaySongs(songs);

function addSong(songs, newSong) {
    songs.push(newSong);
}
addSong(songs, "God-ish");
console.log(songs);

function removeLastSong(songs) {
    return songs.pop();
}

const removedSong = removeLastSong(songs);

console.log(removedSong);

// Array methods

let numbers = [4, 7, 10, 13, 18, 21];

let doubled = numbers.map(number => number * 2);
console.log(doubled);

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const firstNumberOver15 = numbers.find(number => number > 15);
console.log(firstNumberOver15);

const hasNumberOver20 = numbers.some(number => number > 20);
console.log(hasNumberOver20);

const areAllNumbersPositive = numbers.every(number => number > 0);
console.log(areAllNumbersPositive);

const upperCaseSongs = songs.map(song => song.toUpperCase());
console.log(upperCaseSongs);

const longSongs = songs.filter(song => song.length > 5);
console.log(longSongs);

const showSong = songs.find(song => song === "Show");
console.log(showSong);

const atleastTen = songs.some(song => song.length > 10);
console.log(atleastTen);
