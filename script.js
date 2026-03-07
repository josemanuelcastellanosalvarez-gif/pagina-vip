// ------------------
// Contraseña VIP
// ------------------
function checkPassword() {
  const pwd = document.getElementById('password').value;
  if(pwd === 'TACHETONCITA❤️‍🔥') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('vipContent').style.display = 'block';
  } else {
    alert('Contraseña incorrecta 😢');
  }
}

// ------------------
// Contador dinámico
// ------------------
const startDate = new Date('2025-11-12T16:39:00-06:00');
function updateCounter() {
  const now = new Date();
  let diff = now - startDate;
  const days = Math.floor(diff/(1000*60*60*24));
  diff -= days*(1000*60*60*24);
  const hours = Math.floor(diff/(1000*60*60));
  diff -= hours*(1000*60*60);
  const minutes = Math.floor(diff/(1000*60));
  diff -= minutes*(1000*60);
  const seconds = Math.floor(diff/1000);
  document.getElementById('contador').textContent = `Tiempo juntos: ${days} días, ${hours}h ${minutes}m ${seconds}s`;
  createHeart();
}
setInterval(updateCounter,1000);
updateCounter();

// ------------------
// Corazones animados
// ------------------
let heartLimit=30;
function createHeart(){
  if(document.getElementsByClassName('emoji').length>=heartLimit)return;
  const heart=document.createElement('div');
  heart.textContent=Math.random()>0.5?'💖':'🌸';
  heart.className='emoji';
  heart.style.left=Math.random()*(window.innerWidth-30)+'px';
  heart.style.top='-30px';
  heart.style.fontSize=(Math.random()*20+20)+'px';
  document.body.appendChild(heart);
  let fall=setInterval(()=>{
    heart.style.top=parseInt(heart.style.top)+2+'px';
    heart.style.left=parseInt(heart.style.left)+(Math.random()*2-1)+'px';
    if(parseInt(heart.style.top)>window.innerHeight){heart.remove();clearInterval(fall);}
  },30);
}

// Lluvia de corazones al ritmo de la música
const heartTypes = ['💖','🌸','💞','🌹','✨'];
function createMusicHeart(){
  const heart = document.createElement('div');
  heart.textContent = heartTypes[Math.floor(Math.random()*heartTypes.length)];
  heart.className = 'emoji';
  heart.style.left = Math.random()*(window.innerWidth-30) + 'px';
  heart.style.top = '-30px';
  heart.style.fontSize = (Math.random()*20+20)+'px';
  document.body.appendChild(heart);
  
  let fall = setInterval(()=>{
    heart.style.top = parseInt(heart.style.top)+2+'px';
    heart.style.left = parseInt(heart.style.left)+(Math.random()*2-1)+'px';
    if(parseInt(heart.style.top) > window.innerHeight){heart.remove(); clearInterval(fall);}
  }, 30);
}

function startHeartRain(){
  setInterval(()=>{
    const heartsPerBeat = Math.floor(Math.random()*3)+1;
    for(let i=0;i<heartsPerBeat;i++) createMusicHeart();
  }, 500);
}
window.addEventListener('load', startHeartRain);

// ------------------
// Más de 50 frases automáticas
// ------------------
const notes=[
"💌 Eres increíble 💖","🌹 Pienso en ti siempre 🌸","✨ Cada día contigo es mágico ✨",
"💫 Tu sonrisa ilumina mi mundo 🌟","❤️ Contigo todo es mejor 💕","🌷 Gracias por existir en mi vida 🌹",
"💞 Eres mi inspiración diaria 💖","💋 Siempre pienso en tu sonrisa 😘","💌 Cada mensaje tuyo me alegra 💖",
"🌸 Eres mi lugar seguro 🌷","💫 Mi corazón late por ti ❤️‍🔥","🌹 Cada momento contigo es especial 💖",
"✨ Nunca dejes de brillar mi amor 💕","💞 Contigo todo es posible 🌟","🌸 Tu risa es mi melodía favorita 💖",
"💌 Amo cuando me miras así 💖","🌹 Mi lugar favorito es a tu lado 🌸","✨ Eres mi sueño hecho realidad 💫",
"💞 Gracias por cada detalle 💕","💋 Tus abrazos son mi paz ❤️‍🔥","🌸 Cada día contigo es un regalo 💖",
"💌 Me haces sonreír sin razón 💖","🌹 Eres mi pensamiento constante 🌸","✨ Contigo todo tiene sentido 💫",
"💞 Mi corazón siempre te busca 💕","💋 No hay nadie como tú ❤️‍🔥","🌸 Eres mi alegría diaria 💖",
"💌 Cada momento contigo es único 💖","🌹 Me haces sentir especial 🌸","✨ Eres la chispa de mi vida 💫",
"💞 Mi felicidad eres tú 💕","💋 Cada segundo sin ti es eterno ❤️‍🔥","🌸 Tu risa ilumina mi mundo 💖",
"💌 No puedo dejar de pensar en ti 💖","🌹 Tu amor me inspira 🌸","✨ Cada día contigo es magia 💫",
"💞 Me haces sentir completo 💕","💋 Gracias por tu amor ❤️‍🔥","🌸 Eres mi sol en días nublados 💖",
"💌 Siempre en mi corazón 💖","🌹 Eres mi persona favorita 🌸","✨ Contigo todo es más bonito 💫",
"💞 Amo cada detalle de ti 💕","💋 Tus palabras me enamoran ❤️‍🔥","🌸 Mi vida es mejor contigo 💖",
"💌 Gracias por cada sonrisa 💖","🌹 Cada momento juntos es eterno 🌸","✨ Eres mi razón de sonreír 💫",
"💞 Mi amor por ti crece cada día 💕","💋 Siempre quiero estar a tu lado ❤️‍🔥","🌸 Tú haces mi mundo mágico 💖",
"💌 Mi corazón es tuyo 💖","🌹 Contigo aprendí lo que es el amor 🌸","✨ Gracias por existir en mi vida 💫",
"💞 Cada día contigo es especial 💕","💋 No hay nadie que me haga sentir así ❤️‍🔥"
];

let currentNote=0;
function showAutoNote(){
  const box=document.getElementById('noteBox');
  let message=''; let j=0; const currentText=notes[currentNote];
  const interval=setInterval(()=>{
    message+=currentText[j];
    box.textContent=message;
    j++;
    if(j>=currentText.length){clearInterval(interval); currentNote=(currentNote+1)%notes.length;}
  },100);
}
setInterval(showAutoNote,30000);
window.addEventListener('load',showAutoNote);

// ------------------
// Subida de imágenes
// ------------------
const imageUpload=document.getElementById('imageUpload');
const displayImages=document.getElementById('displayImages');
window.addEventListener('load',()=>{
  const savedImages=JSON.parse(localStorage.getItem('vipImages'))||[];
  savedImages.forEach(src=>addImageToPage(src));
});
imageUpload.addEventListener('change',(e)=>{
  const file=e.target.files[0];
  if(file){
    const reader=new FileReader();
    reader.onload=()=>{
      const src=reader.result;
      addImageToPage(src);
      const savedImages=JSON.parse(localStorage.getItem('vipImages'))||[];
      savedImages.push(src);
      localStorage.setItem('vipImages',JSON.stringify(savedImages));
    };
    reader.readAsDataURL(file);
  }
});
function addImageToPage(src){
  const img=document.createElement('img');
  img.src=src;
  displayImages.appendChild(img);
}

// ------------------
// Mini chat
// ------------------
const chatBox=document.getElementById('chatBox');
const chatInput=document.getElementById('chatInput');
window.addEventListener('load',()=>{
  const savedChat=JSON.parse(localStorage.getItem('vipChat'))||[];
  savedChat.forEach(msg=>addMessageToChat(msg));
});
function sendMessage(){
  const msg=chatInput.value.trim();
  if(msg==='')return;
  addMessageToChat(msg);
  chatInput.value='';
  const savedChat=JSON.parse(localStorage.getItem('vipChat'))||[];
  savedChat.push(msg);
  localStorage.setItem('vipChat',JSON.stringify(savedChat));
}
function addMessageToChat(msg){
  const p=document.createElement('p');
  p.textContent=msg;
  chatBox.appendChild(p);
  chatBox.scrollTop=chatBox.scrollHeight;
}

// ------------------
// Playlist VIP + nombre canción
// ------------------
const playlist=[
  {file:'music/romance1.mp3', name:'Romance 1 💖'},
  {file:'music/romance2.mp3', name:'Romance 2 🌹'},
  {file:'music/romance3.mp3', name:'Romance 3 ✨'},
  {file:'music/romance4.mp3', name:'Romance 4 💫'},
  {file:'music/romance5.mp3', name:'Romance 5 ❤️'}
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
function toggleMusic(){bgMusic.paused?bgMusic.play():bgMusic.pause();}
window.addEventListener('load',playNextSong);
