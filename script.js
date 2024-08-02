const audio = new Audio("song.mp3");
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn').addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 102) + 1;
        audio.play();
        document.getElementById('h2').innerText = randomNumber;
    });
});
