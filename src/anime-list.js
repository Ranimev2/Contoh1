// anime-list.js
const animeList = [
    {
        title: "home",
        videoUrl: "https://host.takamiyanime.shop/"
    },
    {
        title: "ongoing",
        videoUrl: "https://host.takamiyanime.shop/ongoing/page/1"
    },
    // Tambahkan anime lainnya sesuai kebutuhan
];

// anime-viewer.js
const animePlayer = document.getElementById('anime-player');

function playAnime(anime) {
    animePlayer.innerHTML = `<video controls autoplay><source src="${anime.videoUrl}" type="video/mp4"></video>`;
}

// anime-selector.js
document.addEventListener('DOMContentLoaded', () => {
    const animeSelector = document.createElement('select');
    animeList.forEach(anime => {
        const option = document.createElement('option');
        option.text = anime.title;
        option.value = anime.videoUrl;
        animeSelector.appendChild(option);
    });
    animeSelector.addEventListener('change', () => {
        const selectedAnimeUrl = animeSelector.value;
        const selectedAnime = animeList.find(anime => anime.videoUrl === selectedAnimeUrl);
        playAnime(selectedAnime);
    });
    document.body.insertBefore(animeSelector, animePlayer);
});
