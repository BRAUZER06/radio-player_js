const player = document.querySelector(".player"),
  playBtn = document.querySelector(".play"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  audio = document.querySelector(".audio"),
  progressContainer = document.querySelector(".progress__container"),
  progress = document.querySelector(".progress"),
  title = document.querySelector(".song"),
  cover = document.querySelector(".cover"),
  imgSrc = document.querySelector(".img__src");
//название песни
const songs = [
  "aurora - runaway ",
  "glass animals",
  "Home",
  "I have a dream",
  "Modern Talking",
  "Morgan Saint",
];
//песня по умолчанию
let songIndex = 0;
//init
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
  cover.src = `img/cover${songIndex + 1}.svg`;
}
loadSong(songs(songIndex));

//play
function playSong() {
  cover.classList.add("cover__img_active");
  player.classList.add("play");
  audio.play();
}

//stop
function pauseSong() {
  cover.classList.remove("cover__img_active");
  player.classList.remove("play");
  audio.play();
}
playBtn.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
//next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", nextSong);

//Prev song

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener("click", prevSong);

//Progress bar

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.getElementsByClassName.width = `${progressPercent}%`;

}

audio.addEventListener('timeupdate', updateProgress)

//set progress

function setProgress(e){
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) *duration
}
progressContainer.addEventListener('click', setProgress)

// AutoPlay
audio.addEventListener("ended", nextSong)

