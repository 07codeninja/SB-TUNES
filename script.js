console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "FEIN", filePath: "1SONG.mp3", coverPath: "P1.JPG"},
    {songName: "GOAT", filePath: "2SONG.mp3", coverPath: "P2.JPG"},
    {songName: "SHAPE OF YOU", filePath: "3SONG.mp3", coverPath: "P3.JPG"},
    {songName: "LET ME LOVE YOU", filePath: "4SONG.mp3", coverPath: "P4.JPG"},
    {songName: "BABY", filePath: "5SONG.mp3", coverPath: "P5.JPG"},
    {songName: "ATTENTION ", filePath: "6SONG.mp3", coverPath: "P6.JPG"},
    {songName: "PERFECT", filePath: "7SONG.mp3", coverPath: "P7.JPG"},
    {songName: "SENORITA", filePath: "8SONG.mp3", coverPath: "P8.JPG"},
    {songName: "FAKIRA", filePath: "9SONG.mp3", coverPath: "P9.jpg"},
    {songName: "TU HAI KI NAHI", filePath: "10SONG.mp3", coverPath: "P10.jpg"}
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})