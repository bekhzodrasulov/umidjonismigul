const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playIcon.src = "images/pouse.png";
    playIcon.alt = "Pause";
  } else {
    bgMusic.pause();
    playIcon.src = "images/play.png";
    playIcon.alt = "Play";
  }
});

function updateCountdown() {
  const weddingDate = new Date("2025-08-28T19:00:00");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
