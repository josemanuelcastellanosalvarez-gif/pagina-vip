// LOGIN

function checkPassword(){
const pwd=document.getElementById('password').value;

if(pwd==='TACHETONCITA❤️‍🔥'){
document.getElementById('login').style.display='none';
document.getElementById('vipContent').style.display='block';
}
else{
alert('Contraseña incorrecta 😢');
}
}


// CONTADOR

const startDate=new Date('2025-11-12T16:39:00-06:00');

function updateCounter(){

const now=new Date();

let diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

diff-=days*(1000*60*60*24);

const hours=Math.floor(diff/(1000*60*60));

diff-=hours*(1000*60*60);

const minutes=Math.floor(diff/(1000*60));

diff-=minutes*(1000*60);

const seconds=Math.floor(diff/1000);

document.getElementById('contador').textContent=
`Tiempo juntos: ${days} días ${hours}h ${minutes}m ${seconds}s`;

}

setInterval(updateCounter,1000);
updateCounter();


// CORAZONES

function createHeart(){

const heart=document.createElement('div');

heart.textContent='💖';

heart.className='emoji';

heart.style.left=Math.random()*window.innerWidth+'px';

heart.style.top='-30px';

heart.style.fontSize='24px';

document.body.appendChild(heart);

let fall=setInterval(()=>{

heart.style.top=parseInt(heart.style.top)+3+'px';

if(parseInt(heart.style.top)>window.innerHeight){

heart.remove();

clearInterval(fall);

}

},30);

}

setInterval(createHeart,500);


// PLAYER

const playlist=[
{file:'music/romance1.mp3',name:'Romance 1 💖'},
{file:'music/romance2.mp3',name:'Romance 2 🌹'},
{file:'music/romance3.mp3',name:'Romance 3 ✨'},
{file:'music/romance4.mp3',name:'Romance 4 💫'},
{file:'music/romance5.mp3',name:'Romance 5 ❤️'}
];

let currentSong=0;

const bgMusic=document.getElementById('bgMusic');

const songName=document.getElementById('songName');

function playNextSong(){

bgMusic.src=playlist[currentSong].file;

songName.textContent=playlist[currentSong].name;

bgMusic.play();

currentSong=(currentSong+1)%playlist.length;

}

bgMusic.addEventListener('ended',playNextSong);

function toggleMusic(){

bgMusic.paused?bgMusic.play():bgMusic.pause();

}

window.addEventListener('load',playNextSong);


// GALERIA

const imageUpload=document.getElementById('imageUpload');

const displayImages=document.getElementById('displayImages');

imageUpload.addEventListener('change',e=>{

const file=e.target.files[0];

const reader=new FileReader();

reader.onload=()=>{

const img=document.createElement('img');

img.src=reader.result;

displayImages.appendChild(img);

};

reader.readAsDataURL(file);

});


// CHAT

function sendMessage(){

const input=document.getElementById('chatInput');

if(input.value==='')return;

const p=document.createElement('p');

p.textContent=input.value;

document.getElementById('chatBox').appendChild(p);

input.value='';

}


// CARTA

function showLoveLetter(){

document.getElementById('letter').style.display='block';

}

function closeLetter(){

document.getElementById('letter').style.display='none';

}


// MINI JUEGO

function startMiniGame(){

alert('Atrapa el corazón ❤️');

}


// FLAPPY

function startFlappy(){

const canvas=document.getElementById('flappyCanvas');

const ctx=canvas.getContext('2d');

let y=150;

let velocity=0;

document.onclick=()=>velocity=-5;

function loop(){

velocity+=0.3;

y+=velocity;

ctx.clearRect(0,0,400,300);

ctx.font='30px Arial';

ctx.fillText('❤️',50,y);

requestAnimationFrame(loop);

}

loop();

}


// FUEGOS

function startFireworks(){

const canvas=document.getElementById('fireworks');

const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<100;i++){

particles.push({

x:canvas.width/2,

y:canvas.height/2,

vx:(Math.random()-0.5)*8,

vy:(Math.random()-0.5)*8,

life:100

});

}

function animar(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;

p.y+=p.vy;

p.life--;

ctx.fillStyle='pink';

ctx.fillRect(p.x,p.y,3,3);

});

particles=particles.filter(p=>p.life>0);

if(particles.length>0)requestAnimationFrame(animar);

}

animar();

}
