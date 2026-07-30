let songCards = document.getElementById("songCards");

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
];

function createCards(songsArray) {
    for (let song of songsArray) {
        let songCard = document.createElement("div");
        songCard.className = "song-card";

        let songTitle = document.createElement("h2");
        songTitle.innerText = `Title: ${song.title}`;

        let songArtist = document.createElement("p");
        songArtist.innerText = `Artist: ${song.artist}`;

        let songRelease = document.createElement("p");
        songRelease.innerText = `Release year: ${song.releaseYear}`;

        songCard.append(songTitle, songArtist, songRelease);
        songCards.append(songCard);
    }
    let songsCount = document.createElement("p");
    songsCount.innerText = `There are currently ${songsArray.length} songs in the list!`;
    songCards.append(songsCount);
}

createCards(songs);
