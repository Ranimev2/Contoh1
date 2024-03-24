// anime-viewer.js
const animePlayer = document.getElementById('anime-player');

function playAnime(anime) {
    animePlayer.innerHTML = `<video controls autoplay><source src="${anime.videoUrl}" type="video/mp4"></video>`;
}
