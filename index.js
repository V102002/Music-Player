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
        cover:'assets/MusicCover3.png',
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
}

function pauseMusic(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause','fa-play');
}