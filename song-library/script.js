let songCards = document.getElementById("songCards");
let favoriteSongCards = document.getElementById("favoriteSongCards");

let songsCount = document.getElementById("songsCount");
let songs = [
    {
        title: "Shoka",
        artist: "Ado",
        releaseYear: 2024,
        isFavorite: true,
    },
    {
        title: "MIRROR",
        artist: "Ado",
        releaseYear: 2024,
        isFavorite: true,
    },
    {
        title: "Vivarium",
        artist: "Ado",
        releaseYear: 2024,
        isFavorite: true,
    },
    {
        title: "Love me forever!",
        artist: "Ado",
        releaseYear: 2026,
        isFavorite: false,
    },
    {
        title: "Stay with me (Live Cover)",
        artist: "Ado",
        releaseYear: 2024,
        isFavorite: true,
    },
];

function createSongCard(song) {
    let songCard = document.createElement("div");
    songCard.className = "song-card";

    let songTitle = document.createElement("h2");
    songTitle.innerText = `Title: ${song.title}`;

    let songArtist = document.createElement("p");
    songArtist.innerText = `Artist: ${song.artist}`;

    let songRelease = document.createElement("p");
    songRelease.innerText = `Release year: ${song.releaseYear}`;

    let isFavorite = document.createElement("p");
    if (song.isFavorite) {
        isFavorite.innerText = "Favorite: Yes";
    } else {
        isFavorite.innerText = "Favorite: No";
    }

    songCard.append(songTitle, songArtist, songRelease, isFavorite);

    return songCard;
}

function renderSongs(songsArray, container) {
    container.innerHTML = "";
    if (songsArray.length === 0) {
        console.log("Empty.");
        return;
    }
    for (let song of songsArray) {
        let card = createSongCard(song);
        container.append(card);
    }
}
function updateSongsCount(songsArray) {
    songsCount.innerText = `There are currently ${songsArray.length} songs in the list!`;
}

function getFavoriteSongs(songsArray) {
    let favoriteSongs = songsArray.filter(song => song.isFavorite);
    return favoriteSongs;
}

renderSongs(songs, songCards);
updateSongsCount(songs);

let favoriteSongs = getFavoriteSongs(songs);

renderSongs(favoriteSongs, favoriteSongCards);
