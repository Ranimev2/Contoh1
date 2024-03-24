// anime-selector.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/src/anime-list.json')
        .then(response => response.json())
        .then(animeList => {
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
        })
        .catch(error => console.error('Error fetching anime list:', error));
});
