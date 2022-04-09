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
function playSong(){
  player.classList.add('play')
  audio.play()
}

//stop
function pauseSong(){
  player.classList.remove('play')
  audio.play()
}
playBtn.addEventListener('click',()=>{
  const isPlaying = player.classList.contains('play')
  if(isPlaying){
    pauseSong()
  }else{
    playSong()
  }
})