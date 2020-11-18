const play=document.getElementById("play");
const music=document.querySelector('audio');
const img=document.querySelector('#album');
const next=document.getElementById('next');
const prev=document.querySelector('#prev');
const title=document.querySelector('#title');
const artist=document.querySelector('#artist');
const progress=document.querySelector(".progress");
const songtime=document.querySelector("#current_time");
const totaltime=document.querySelector("#duration");

let [songtimemin,songtimesec,totaltimemin,totaltimesec]=[0,0,0,0];
const songs=[
    {
        name:"Sawali",
        title:"Sawali Si Baat",
        artist:"Barfi",
        image:"Barfi"
    },
{
    name:"Anatu_bleach",
    title:"Bleach",
    artist:"Anatu",
    image:"bleach"
},
{
    name:"if_i_killed",
    title:"If I Killed Someone",
    artist:"Alec Benjemin",
    image:"Alec"
},
{
    name:"sickick_infected",
    title:"Infected",
    artist:"Sickick",
    image:"sickick"
},
{
    name:"zara_zara",
    title:"Zara Zara",
    artist:"RHDTM",
    image:"zara"
},
{
    name:"bury_me_low",
    title:"BURY ME Low",
    artist:"8 Graves",
    image:"8graves"
},
{
    name:"grandson",
    title:"Despicable",
    artist:"Grandson",
    image:"grandson"
},
{
    name:"sadness",
    title:"Sadness & Sorrow",
    artist:"Naruto",
    image:"naruto"
},
{
    name:"light_theme",
    title:"Lights theme",
    artist:"Deathnote",
    image:"deathnote"
},
{
    name:"game_of_thrones",
    title:"G.o.t Theme",
    artist:"Ramin Djwadi",
    image:"jaime"
},
{
    name:"Avoiding",
    title:"Avoiding Reflection",
    artist:"Vorsa",
    image:"vorsa"
},
{
    name:"Das_De",
    title:"Das de",
    artist:"heartless",
    image:"dasde"
}
];
let isplaying=false;
const playMusic=()=>{
   music.play();
   isplaying=true;
play.classList.replace('fa-play','fa-pause')
// img.classList.add("anime");
};
// for pause function
const pauseMusic=()=>{
    isplaying=false;
    music.pause();
    
 play.classList.replace('fa-pause','fa-play')
//  img.classList.remove("anime");
 };
 play.addEventListener('click',()=>{
     isplaying? pauseMusic():playMusic();
 });
//  changing music
const loadSong=(song)=>
{
title.textContent=song.title;
artist.textContent=song.artist;
music.src=`music/${song.name}.mp3`;
img.src=`img/${song.image}.jpg`;
// console.log("chalra h")
};
let songIndex=0;
const nextSong=()=>{
     songIndex++;
    // let index=songIndex%songs
loadSong(songs[(songIndex%songs.length)]);
playMusic();
}
const prevSong=()=>{
    songIndex--;
    if(songIndex==-1)
    {
        songIndex=songs.length-1;
    }
    loadSong(songs[(songIndex%songs.length)]);
    playMusic();
}
// loadSong(songs[1]);
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

// progress bar
music.addEventListener('timeupdate',(event)=>
    {
        //  console.log(event);
        const{currentTime,duration}=event.srcElement;
        // console.log(currentTime);
        // console.log(duration);
        let prog=(currentTime/duration)*100;
        progress.style.width=prog+"%";
         
        
            songtimemin=Math.floor(currentTime/60);
            songtimesec=Math.floor(currentTime-songtimemin*60);
            totaltimemin = Math.floor(duration / 60);
            totaltimesec = Math.floor(duration - totaltimemin * 60);
             if(songtimesec<10)
             {
                 songtimesec='0'+songtimesec;
             }
             if(totaltimesec<10)
             {
                 totaltimesec='0'+totaltimesec;
             }
    //  console.log(songtimemin);
     songtime.innerHTML=`0${songtimemin}:${songtimesec}`;
     totaltime.innerHTML=`0${totaltimemin}:${totaltimesec}`;
     })