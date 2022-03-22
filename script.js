let audioElement = new Audio('1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = document.querySelectorAll('.songItem');
let songItemPlay = document.querySelectorAll('.songItemPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
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

// iterating elements
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

// Update progress bar
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});  

// handle previous and next button
next.addEventListener('click', ()=>{
    songIndex++;
    updateSong();
});

previous.addEventListener('click', ()=>{
    songIndex--;
    updateSong();
})

function updateSong(){
    songs.forEach((song, i)=>{
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
    })
}

// update song for indiviual click
songItemPlay.forEach((songElement)=>{
    songElement.addEventListener('click', function(e){
        audioElement.src = songs[e.currentTarget.id].filePath;
        if(audioElement.paused || audioElement.currentTime<0) {
            audioElement.play();
            // masterPlay.classList.remove('fa-play-circle');
            // masterPlay.classList.add('fa-pause-circle');
            e.currentTarget.classList.remove('fa-play-circle');
            e.currentTarget.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        if(e.currentTarget.classList.contains('fa-pause-circle')){
            // audioElement.pause();
            e.currentTarget.classList.remove('fa-pause-circle');
            e.currentTarget.classList.add('fa-play-circle');
            // gif.style.opacity = 0;
            console.log('worked');
        }
        // else if (audioElement.played ) {
            // audioElement.pause();
            // songElement.classList.remove('fa-play-circle');
            // songElement.classList.add('fa-pause-circle');
            // gif.style.opacity = 0;
        // }
    })
})

console.log(audioElement);

