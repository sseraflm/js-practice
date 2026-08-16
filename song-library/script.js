const songCards = document.getElementById("songCards");
const favoriteSongCards = document.getElementById("favoriteSongCards");

const songsCount = document.getElementById("songsCount");
const songs = [
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
    const songCard = document.createElement("div");
    songCard.className = "song-card";

    const songTitle = document.createElement("h2");
    songTitle.innerText = `Title: ${song.title}`;

    const songArtist = document.createElement("p");
    songArtist.innerText = `Artist: ${song.artist}`;

    const songRelease = document.createElement("p");
    songRelease.innerText = `Release year: ${song.releaseYear}`;

    const isFavorite = document.createElement("p");
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
    for (const song of songsArray) {
        const card = createSongCard(song);
        container.append(card);
    }
}
function updateSongsCount(songsArray) {
    songsCount.innerText = `There are currently ${songsArray.length} songs in the list!`;
}

function getFavoriteSongs(songsArray) {
    const favoriteSongs = songsArray.filter(song => song.isFavorite);
    return favoriteSongs;
}

renderSongs(songs, songCards);
updateSongsCount(songs);

const favoriteSongs = getFavoriteSongs(songs);

renderSongs(favoriteSongs, favoriteSongCards);
