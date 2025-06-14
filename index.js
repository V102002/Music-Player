    const image=document.getElementById('cover'),
    title=document.getElementById('music-title'),
    artist=document.getElementById('music-artist'),
    currentTimeEl=document.getElementById('current-time'),
    durationEl=document.getElementById('duration'),
    progress=document.getElementById('progress'),
    playerProgress=document.getElementById('player-progress'),
    prevBtn=document.getElementById('prev'),
    nextBtn=document.getElementById('next'),
    playBtn=document.getElementById('play'),
    background=document.getElementById('bg-img');

const music=new Audio();
const songs=[
    {
        path:'assets/Opening1.mp3',
        displayName: 'Haruka Mirai',
        cover:'assets/MusicCover.png',
        artist:'Fonzi M',
    },
    {
        path:'assets/Opening2.mp3',
        displayName: 'Guess Who Is Back',
        cover:'assets/MusicCover2.png',
        artist:'Koda Kumi',
    },
    {
        path:'assets/Opening3.mp3',
        displayName: 'Black Catcher',
        cover:'assets/MusicCover3.jpg',
        artist:'Vicke Blanka',
    },
];

let musicIndex=0;
let isPlaying=false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying=true;
    //Change the flag variable to true and change the playbutton to pause
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
    music.play();
}

function pauseMusic(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play');
    music.pause();
}

function loadMusic(song){
    music.src=song.path;
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    image.src=song.cover;
    background.src=song.cover
}

function changeMusic(direction){
    musicIndex=(musicIndex+direction+songs.length)%songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const {duration,currentTime}=music;
    const progressPercent=(currentTime/duration)*100;
    progress.style.width=`${progressPercent}%`;


    const formatTime=(time)=>String(Math.floor(time)).padStart(2,'0');
    durationEl.textContent=`${formatTime(duration/60)}:${formatTime(duration%60)}`; 
    currentTimeEl.textContent=`${formatTime(currentTime/60)}:${formatTime(currentTime%60)}`;

}

function setProgressBar(e){
    const width=playerProgress.clientWidth;
    const clickX=e.offsetX;
    music.currentTime=(clickX/width)*music.duration;
}

playBtn.addEventListener('click',togglePlay);
nextBtn.addEventListener('click',()=>changeMusic(-1));
prevBtn.addEventListener('click',()=>changeMusic(1));
music.addEventListener('ended',()=>changeMusic(1));
music.addEventListener('timeupdate',updateProgressBar);
playerProgress.addEventListener('click',setProgressBar);

loadMusic(songs[musicIndex]);
