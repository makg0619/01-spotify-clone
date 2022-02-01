let audioElement = new Audio('1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = document.querySelectorAll('.songItem');
let gif = document.getElementById('gif');
let songs = [
    {
        songsName: "song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songsName: "song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"
    },
    {
        songsName: "song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"
    },
    {
        songsName: "song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"
    },
    {
        songsName: "song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"
    },
    {
        songsName: "song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"
    },
    {
        songsName: "song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"
    },
    {
        songsName: "song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"
    },
    {
        songsName: "song9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"
    },
    {
        songsName: "song10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"
    }
];


songItems.forEach((songitem, i)=>{
  songitem.querySelector('img').src = songs[i].coverPath;
  songitem.querySelector('.songName').innerText = songs[i].songsName;
});

// Listen to Events
masterPlay.addEventListener('click', function(){
    if(audioElement.paused || audioElement.currentTime<0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});  
