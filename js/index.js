const prev = document.getElementById("prev");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const next = document.getElementById("next");

prev.addEventListener("click",(e)=>{
    changeIcon(play, pause);
    prevMusic();
});
play.addEventListener("click",(e)=>{
    changeIcon(play, pause);
    playMusic();
});
pause.addEventListener("click",(e)=>{
    changeIcon(pause,play);
    stopMusic();
});
next.addEventListener("click",(e)=>{
    changeIcon(play, pause);
    nextMusic();
});

function prevMusic(){}
function playMusic(){}
function stopMusic(){}
function nextMusic(){}

function changeIcon(icon1, icon2){
    icon1.style.display = "none";
    icon2.style.display = "flex";
}
