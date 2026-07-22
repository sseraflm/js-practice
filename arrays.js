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
