const ACCESS_KEY = "TACHETONCITA";

const CHAT_STORAGE_KEY = "vip-chat-messages";
const LOVE_METER_KEY = "vip-love-meter";
const TIMELINE_STORAGE_KEY = "vip-custom-timeline";
const SECRET_CODE = "amor";

const LOVE_NOTES = [
  "Cada detalle de esta pagina fue pensado con mucho carino para Pequena Jess.",
  "Gracias, Pequena Jess, por hacer que los dias se sientan mas bonitos.",
  "Siempre hay una buena razon para sonreir cuando pienso en Pequena Jess.",
  "Este rincon guarda musica, recuerdos y mucho amor para ti.",
  "A veces una pagina tambien puede abrazar un poquito a Pequena Jess."
];

const REASONS = [
  "Porque tienes una energia que alegra el ambiente.",
  "Porque vuelves especiales hasta los ratos simples.",
  "Porque hay personas que dejan huella sin intentarlo.",
  "Porque una sonrisa tuya cambia el tono del dia.",
  "Porque mereces detalles hechos con intencion.",
  "Porque hay recuerdos que saben quedarse bonito.",
  "Porque tu presencia inspira ternura y calidez."
];

const SURPRISE_MESSAGES = [
  "Hay dias lindos, y luego estan los dias en los que apareces tu.",
  "Sorpresa del momento: tu sonrisa sigue siendo una muy buena idea.",
  "Si esta pagina pudiera hablar, diria gracias por existir con tanta luz.",
  "Pequeno recordatorio: mereces cosas bonitas, suaves y sinceras.",
  "Hoy el universo recomienda una cancion, un abrazo y un detalle inesperado.",
  "Detalle secreto: escribe AMOR en tu teclado cuando la pagina este abierta."
];

const DAILY_MESSAGES = [
  "Hoy esta pagina quiere recordarle a Pequena Jess que merece cosas bonitas.",
  "Si Pequena Jess esta leyendo esto, ya mejoro el ambiente de inmediato.",
  "Una cancion, un atardecer y un detalle lindo pueden arreglar bastante.",
  "Este rincon existe para sacar una sonrisa aunque sea pequena.",
  "No todo lo especial tiene que ser enorme; a veces basta con estar."
];

const SPECIAL_DETAILS = [
  "Detalle especial del dia: esta pagina cambio un poquito solo para hoy.",
  "Detalle especial del dia: una frase suave tambien puede ser un regalo.",
  "Detalle especial del dia: hoy el mejor plan puede ser musica y calma.",
  "Detalle especial del dia: incluso un atardecer repetido puede sentirse distinto.",
  "Detalle especial del dia: las cosas bonitas tambien se entrenan."
];

const LOGIN_DAILY_MESSAGES = [
  "Hoy puede ser un buen dia para una cancion suave y una sonrisa tranquila, Pequena Jess.",
  "Pequena Jess merece detalles bonitos incluso antes de decir una palabra.",
  "Que este rincon te reciba bonito tambien cuenta como carino.",
  "A veces un mensaje suave al inicio cambia por completo el ambiente.",
  "Si llegaste hasta aqui, Pequena Jess, ya hay una buena razon para sonreir un poco."
];

const FEATURED_QUOTES = [
  '"A veces la ternura tambien se puede programar."',
  '"Los detalles pequenos suelen quedarse mas tiempo en el corazon."',
  '"Una pagina bonita tambien puede ser una carta disfrazada."',
  '"Si algo se hizo con carino, eso se nota incluso en silencio."'
];

const CAPSULES = [
  { title: "Mensaje suave", text: "A veces un detalle pequeno es suficiente para cambiar el tono del dia." },
  { title: "Momento bonito", text: "Una cancion tranquila y un atardecer siempre hacen buena pareja." },
  { title: "Recuerdo", text: "Este rincon puede guardar mas fotos, mas frases y mas historia cuando quieras." },
  { title: "Sonrisa", text: "Si esto logro sacarte una sonrisa aunque sea pequena, ya valio la pena." },
  { title: "Sorpresa", text: "Todavia quedan partes de esta pagina listas para personalizarse mas contigo." },
  { title: "Deseo", text: "Que nunca te falten cosas lindas, suaves y hechas con intencion." }
];

const LETTERS = [
  {
    title: "Carta romantica",
    body: "Pequena Jess, este rincon existe para recordarte que hay detalles que se hacen con tiempo, con paciencia y con mucho carino."
  },
  {
    title: "Cuando estes triste",
    body: "Si un dia el ambiente pesa, Pequena Jess, vuelve aqui. Respira, cambia una cancion y deja que algo bonito te haga compania."
  },
  {
    title: "Cuando me extranes",
    body: "Las canciones, los atardeceres y las frases bonitas tambien saben quedarse guardadas para despues, Pequena Jess."
  },
  {
    title: "Para una fecha especial",
    body: "Esta carta puede seguir creciendo con nombres reales, una fecha y recuerdos solo tuyos, Pequena Jess."
  }
];

const OPEN_IF = [
  { title: "Abre esto si tuviste un mal dia", body: "No todos los dias tienen que salir perfectos. A veces basta con llegar al final y dejar que algo bonito te encuentre." },
  { title: "Abre esto si quieres sonreir", body: "Una buena cancion, una frase suave y un recuerdo calido son mejor plan de lo que parece." },
  { title: "Abre esto si me extranas", body: "Los detalles que se guardan con intencion siempre saben volver en el momento justo." },
  { title: "Abre esto si necesitas calma", body: "Respira lento. Cambia el tema de la pagina, mira los atardeceres y deja que la musica haga su trabajo." }
];

const TIMELINE = [];

const QUIZ_QUESTIONS = [
  { q: "Que combina mejor con esta pagina?", a: ["Un atardecer y una cancion", "Nada", "Apagarla"], correct: 0 },
  { q: "Que deberia guardar este rincon?", a: ["Recuerdos bonitos", "Solo codigo", "Silencio total"], correct: 0 },
  { q: "Que pasa si escribes AMOR?", a: ["Activas el modo secreto", "Nada", "Se cierra todo"], correct: 0 }
];

const GALLERY_SEED = [
  { src: "images/sunset1.jpg", caption: "Atardecer 1" },
  { src: "images/sunset2.jpg", caption: "Atardecer 2" },
  { src: "images/sunset3.jpg", caption: "Atardecer 3" }
];

const SUNSET_CARDS = [
  { src: "images/sunset1.jpg", caption: "Brillo suave" },
  { src: "images/sunset2.jpg", caption: "Cielo dorado" },
  { src: "images/sunset3.jpg", caption: "Momento calido" },
  { src: "images/sunset1.jpg", caption: "Luz tranquila" },
  { src: "images/sunset2.jpg", caption: "Hora bonita" },
  { src: "images/sunset3.jpg", caption: "Final perfecto" }
];

const HERO_SLIDES = GALLERY_SEED.map((item) => item.src);
const targetDate = new Date("2026-11-12T00:00:00-05:00");

const playlist = [
  { file: "musica/romance1.mp3", name: "Romance 1" },
  { file: "musica/romance2.mp3", name: "Romance 2" },
  { file: "musica/romance3.mp3", name: "Romance 3" },
  { file: "musica/romance4.mp3", name: "Romance 4" },
  { file: "musica/romance5.mp3", name: "Romance 5" }
];

const startDate = new Date("2025-11-12T16:39:00-06:00");

const login = document.getElementById("login");
const vipContent = document.getElementById("vipContent");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");
const contador = document.getElementById("contador");
const countdownBox = document.getElementById("countdownBox");
const noteBox = document.getElementById("noteBox");
const heroPhoto = document.getElementById("heroPhoto");
const bgMusic = document.getElementById("bgMusic");
const songName = document.getElementById("songName");
const disc = document.getElementById("disc");
const musicToggle = document.getElementById("musicToggle");
const nextSongButton = document.getElementById("nextSong");
const prevSongButton = document.getElementById("prevSong");
const shuffleSongsButton = document.getElementById("shuffleSongs");
const songProgress = document.getElementById("songProgress");
const currentTimeLabel = document.getElementById("currentTime");
const durationTimeLabel = document.getElementById("durationTime");
const volumeControl = document.getElementById("volumeControl");
const musicUpload = document.getElementById("musicUpload");
const imageUpload = document.getElementById("imageUpload");
const displayImages = document.getElementById("displayImages");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetterButton = document.getElementById("closeLetter");
const surpriseOverlay = document.getElementById("surpriseOverlay");
const surpriseOverlayText = document.getElementById("surpriseOverlayText");
const closeSurpriseOverlay = document.getElementById("closeSurpriseOverlay");
const gameStatus = document.getElementById("gameStatus");
const flappyCanvas = document.getElementById("flappyCanvas");
const fireworksCanvas = document.getElementById("fireworks");
const reasonsList = document.getElementById("reasonsList");
const refreshReasonsButton = document.getElementById("refreshReasonsButton");
const surpriseButton = document.getElementById("surpriseButton");
const newSurpriseButton = document.getElementById("newSurpriseButton");
const heroLetterButton = document.getElementById("heroLetterButton");
const loveMeterFill = document.getElementById("loveMeterFill");
const loveMeterText = document.getElementById("loveMeterText");
const boostLoveButton = document.getElementById("boostLoveButton");
const surpriseMessage = document.getElementById("surpriseMessage");
const dailyMessage = document.getElementById("dailyMessage");
const changeDailyMessage = document.getElementById("changeDailyMessage");
const featuredQuote = document.getElementById("featuredQuote");
const loginDailyMessage = document.getElementById("loginDailyMessage");
const sunsetCards = document.getElementById("sunsetCards");
const songStatus = document.getElementById("songStatus");
const playlistCountBadge = document.getElementById("playlistCountBadge");
const playlistList = document.getElementById("playlistList");
const capsuleGrid = document.getElementById("capsuleGrid");
const specialDetail = document.getElementById("specialDetail");
const jarButton = document.getElementById("jarButton");
const jarMessage = document.getElementById("jarMessage");
const letterTabs = document.getElementById("letterTabs");
const letterPreview = document.getElementById("letterPreview");
const openIfGrid = document.getElementById("openIfGrid");
const timelineList = document.getElementById("timelineList");
const timelineDateInput = document.getElementById("timelineDateInput");
const timelineTextInput = document.getElementById("timelineTextInput");
const addTimelineButton = document.getElementById("addTimelineButton");
const saveTimelineButton = document.getElementById("saveTimelineButton");
const exportTimelineButton = document.getElementById("exportTimelineButton");
const importTimelineInput = document.getElementById("importTimelineInput");
const themeButtons = Array.from(document.querySelectorAll(".theme-button"));
const unlockButton = document.getElementById("unlockButton");
const unlockOverlay = document.getElementById("unlockOverlay");
const unlockList = document.getElementById("unlockList");
const closeUnlockOverlay = document.getElementById("closeUnlockOverlay");
const voiceUpload = document.getElementById("voiceUpload");
const voiceList = document.getElementById("voiceList");
const memoryButton = document.getElementById("memoryButton");
const quizButton = document.getElementById("quizButton");
const memoryGrid = document.getElementById("memoryGrid");
const quizCard = document.getElementById("quizCard");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImageModal = document.getElementById("closeImageModal");
const prevImageButton = document.getElementById("prevImage");
const nextImageButton = document.getElementById("nextImage");
const letterOverlayText = document.getElementById("letterOverlayText");

let currentSong = 0;
let heartsStarted = false;
let noteIndex = 0;
let heroIndex = 0;
let flappyRunning = false;
let secretBuffer = "";
let loveMeter = Number(localStorage.getItem(LOVE_METER_KEY) || 18);
let dailyMessageIndex = 0;
let quoteIndex = 0;
let currentLetter = 0;
let currentImageIndex = 0;
let memoryCards = [];
let memorySelection = [];
let matchedPairs = 0;
let quizIndex = 0;
let customVoices = [];
let unlocks = JSON.parse(localStorage.getItem("vip-unlocks") || "[]");
let editingTimelineIndex = -1;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getDailyIndex(length, offset = 0) {
  const now = new Date();
  const seed = now.getFullYear() * 1000 + Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000) + offset;
  return seed % length;
}

function checkPassword() {
  const pwd = passwordInput.value.trim();

  if (pwd === ACCESS_KEY) {
    login.hidden = true;
    vipContent.hidden = false;
    loginMessage.textContent = "";
    passwordInput.value = "";
    startExperience();
    return;
  }

  loginMessage.textContent = "Contrasena incorrecta. Intenta de nuevo.";
}

function updateCounter() {
  const now = new Date();
  const diffMs = Math.max(now - startDate, 0);

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  contador.textContent = `Tiempo juntos: ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}

function updateCountdown() {
  if (!countdownBox) {
    return;
  }

  const now = new Date();
  const diffMs = Math.max(targetDate - now, 0);
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  countdownBox.textContent = `Cuenta regresiva a la fecha especial: ${days} dias y ${hours} horas`;
}

function rotateNotes() {
  noteBox.textContent = LOVE_NOTES[noteIndex];
  noteIndex = (noteIndex + 1) % LOVE_NOTES.length;
}

function rotateHeroImage() {
  heroIndex = (heroIndex + 1) % HERO_SLIDES.length;
  heroPhoto.src = HERO_SLIDES[heroIndex];
}

function rotateDailyMessage() {
  dailyMessage.textContent = DAILY_MESSAGES[dailyMessageIndex];
  dailyMessageIndex = (dailyMessageIndex + 1) % DAILY_MESSAGES.length;
}

function renderLoginDailyMessage() {
  const index = getDailyIndex(LOGIN_DAILY_MESSAGES.length, 7);
  loginDailyMessage.textContent = LOGIN_DAILY_MESSAGES[index];
}

function renderSpecialDetail() {
  if (!specialDetail) {
    return;
  }

  const index = getDailyIndex(SPECIAL_DETAILS.length, 19);
  specialDetail.textContent = SPECIAL_DETAILS[index];
}

function saveUnlocks() {
  localStorage.setItem("vip-unlocks", JSON.stringify(unlocks));
}

function addUnlock(text) {
  if (!unlocks.includes(text)) {
    unlocks.push(text);
    saveUnlocks();
  }
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("vip-theme", theme);
  themeButtons.forEach((button) => {
    button.classList.toggle("active-theme", button.dataset.themeOption === theme);
  });
}

function formatTime(totalSeconds) {
  if (!Number.isFinite(totalSeconds)) {
    return "0:00";
  }

  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function updateSongProgress() {
  if (!songProgress) {
    return;
  }

  currentTimeLabel.textContent = formatTime(bgMusic.currentTime);
  durationTimeLabel.textContent = formatTime(bgMusic.duration);

  if (bgMusic.duration) {
    songProgress.value = String((bgMusic.currentTime / bgMusic.duration) * 100);
  }
}

function seekSong() {
  if (!bgMusic.duration) {
    return;
  }

  bgMusic.currentTime = (Number(songProgress.value) / 100) * bgMusic.duration;
}

function setVolume() {
  if (!volumeControl) {
    return;
  }

  bgMusic.volume = Number(volumeControl.value);
}

function rotateFeaturedQuote() {
  featuredQuote.textContent = FEATURED_QUOTES[quoteIndex];
  quoteIndex = (quoteIndex + 1) % FEATURED_QUOTES.length;
}

function createHeart() {
  const heart = document.createElement("div");
  const size = 16 + Math.random() * 18;
  const duration = 5 + Math.random() * 4;
  const emojiPool = ["❤", "✨", "🌹", "💫", "🫶", "🌙", "🎵", "💌", "🌸", "🩷"];

  heart.textContent = emojiPool[Math.floor(Math.random() * emojiPool.length)];
  heart.className = "petal";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;

  const colorPalette = ["#fff6fb", "#ffe7ef", "#ffd7e5", "#fff0d8"];
  heart.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

  const container = document.getElementById("floatingPetals") || document.body;
  container.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

function loadTrack(index) {
  currentSong = (index + playlist.length) % playlist.length;
  const track = playlist[currentSong];
  bgMusic.src = track.file;
  songName.textContent = track.name;
  songStatus.textContent = `Preparada: ${track.name}`;
  renderPlaylist();
  updateSongProgress();
}

async function playCurrentTrack() {
  try {
    await bgMusic.play();
    disc.classList.add("playing");
    musicToggle.textContent = "Pausar";
    songStatus.textContent = `Sonando ahora: ${playlist[currentSong].name}`;
  } catch (error) {
    musicToggle.textContent = "Reproducir";
  }
}

function pauseCurrentTrack() {
  bgMusic.pause();
  disc.classList.remove("playing");
  musicToggle.textContent = "Reproducir";
  songStatus.textContent = `En pausa: ${playlist[currentSong].name}`;
}

function toggleMusic() {
  if (bgMusic.paused) {
    playCurrentTrack();
    return;
  }

  pauseCurrentTrack();
}

function playNextSong(autoplay = true) {
  loadTrack(currentSong + 1);
  if (autoplay) {
    playCurrentTrack();
  }
}

function playPrevSong() {
  loadTrack(currentSong - 1);
  playCurrentTrack();
}

function shufflePlaylistOrder() {
  const mixed = shuffle(playlist);
  playlist.length = 0;
  mixed.forEach((track) => playlist.push(track));
  currentSong = 0;
  renderPlaylist();
  loadTrack(0);
  addUnlock("Modo aleatorio activado");
}

function createGalleryItem(src, caption) {
  const wrapper = document.createElement("figure");
  wrapper.className = "gallery-item";

  const img = document.createElement("img");
  img.src = src;
  img.alt = caption;

  const label = document.createElement("figcaption");
  label.className = "gallery-caption";
  label.textContent = caption;

  wrapper.appendChild(img);
  wrapper.appendChild(label);
  wrapper.addEventListener("click", () => {
    currentImageIndex = Array.from(displayImages.children).indexOf(wrapper);
    modalImage.src = src;
    imageModal.hidden = false;
  });
  return wrapper;
}

function cycleImage(step) {
  const items = Array.from(displayImages.querySelectorAll("img"));
  if (items.length === 0) {
    return;
  }

  currentImageIndex = (currentImageIndex + step + items.length) % items.length;
  modalImage.src = items[currentImageIndex].src;
}

function renderSunsetCards() {
  sunsetCards.innerHTML = "";
  SUNSET_CARDS.forEach((item) => {
    const card = document.createElement("figure");
    card.className = "sunset-card";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption;

    const label = document.createElement("span");
    label.textContent = item.caption;

    card.appendChild(img);
    card.appendChild(label);
    sunsetCards.appendChild(card);
  });
}

function renderPlaylist() {
  playlistList.innerHTML = "";
  if (playlistCountBadge) {
    playlistCountBadge.textContent = `${playlist.length} pistas`;
  }

  playlist.forEach((track, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `playlist-item${index === currentSong ? " active" : ""}`;

    const left = document.createElement("div");
    left.className = "playlist-track";

    const indexBadge = document.createElement("span");
    indexBadge.className = "playlist-index";
    indexBadge.textContent = String(index + 1);

    const name = document.createElement("strong");
    name.textContent = track.name;

    const mood = document.createElement("span");
    mood.textContent = index % 2 === 0 ? "Romantica" : "Suave";

    left.appendChild(indexBadge);
    left.appendChild(name);

    const tag = document.createElement("span");
    tag.className = "playlist-tag";
    tag.textContent = mood.textContent;

    item.appendChild(left);
    item.appendChild(tag);

    item.addEventListener("click", () => {
      loadTrack(index);
      playCurrentTrack();
    });

    playlistList.appendChild(item);
  });
}

function handleMusicUpload(event) {
  const files = Array.from(event.target.files || []);

  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    playlist.push({
      file: url,
      name: file.name.replace(/\.[^.]+$/, ""),
      custom: true
    });
  });

  renderPlaylist();
  addUnlock("Canciones nuevas agregadas");
}

function renderCapsules() {
  capsuleGrid.innerHTML = "";

  CAPSULES.forEach((capsule) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "capsule-card";

    const title = document.createElement("div");
    title.className = "capsule-title";
    title.textContent = capsule.title;

    const text = document.createElement("div");
    text.className = "capsule-text";
    text.textContent = "Pulsa para abrir";

    card.appendChild(title);
    card.appendChild(text);

    card.addEventListener("click", () => {
      const opened = card.classList.toggle("open");
      text.textContent = opened ? capsule.text : "Pulsa para abrir";
    });

    capsuleGrid.appendChild(card);
  });
}

function renderTimeline() {
  if (!timelineList) {
    return;
  }

  timelineList.innerHTML = "";
  const formattedStart = startDate.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let customItems = [];
  try {
    customItems = JSON.parse(localStorage.getItem(TIMELINE_STORAGE_KEY)) || [];
  } catch (error) {
    customItems = [];
  }

  const dynamicTimeline = [
    {
      title: `Inicio registrado: ${formattedStart}`,
      text: "Esa fue la fecha en la que tuve la fortuna de comenzar a hablar contigo mi amor, Pequena Jess te amo."
    },
    ...customItems
  ];

  dynamicTimeline.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "timeline-item";

    const dot = document.createElement("span");
    dot.className = "timeline-dot";

    const box = document.createElement("div");
    box.className = "timeline-content";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;

    box.appendChild(title);
    box.appendChild(text);

    if (index > 0) {
      const actions = document.createElement("div");
      actions.className = "timeline-actions";

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "timeline-edit secondary-button";
      editButton.textContent = "Editar";
      editButton.addEventListener("click", () => editTimelineEntry(index - 1));

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "timeline-delete secondary-button";
      deleteButton.textContent = "Borrar";
      deleteButton.addEventListener("click", () => deleteTimelineEntry(index - 1));

      actions.appendChild(editButton);
      actions.appendChild(deleteButton);
      box.appendChild(actions);
    }

    row.appendChild(dot);
    row.appendChild(box);
    timelineList.appendChild(row);
  });
}

function addTimelineEntry() {
  if (!timelineDateInput || !timelineTextInput) {
    return;
  }

  const dateValue = timelineDateInput.value;
  const textValue = timelineTextInput.value.trim();

  if (!dateValue || !textValue) {
    return;
  }

  let items = [];
  try {
    items = JSON.parse(localStorage.getItem(TIMELINE_STORAGE_KEY)) || [];
  } catch (error) {
    items = [];
  }

  const formattedDate = new Date(`${dateValue}T00:00:00`).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const payload = {
    title: formattedDate,
    text: textValue
  };

  if (editingTimelineIndex >= 0) {
    items[editingTimelineIndex] = payload;
  } else {
    items.push(payload);
  }

  localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(items));
  timelineDateInput.value = "";
  timelineTextInput.value = "";
  editingTimelineIndex = -1;
  renderTimeline();
  addUnlock("Nueva fecha agregada a la linea de tiempo");
}

function editTimelineEntry(index) {
  let items = [];
  try {
    items = JSON.parse(localStorage.getItem(TIMELINE_STORAGE_KEY)) || [];
  } catch (error) {
    items = [];
  }

  const item = items[index];
  if (!item) {
    return;
  }

  editingTimelineIndex = index;
  timelineTextInput.value = item.text;
}

function deleteTimelineEntry(index) {
  let items = [];
  try {
    items = JSON.parse(localStorage.getItem(TIMELINE_STORAGE_KEY)) || [];
  } catch (error) {
    items = [];
  }

  items.splice(index, 1);
  localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(items));
  renderTimeline();
  addUnlock("Fecha eliminada de la linea de tiempo");
}

function exportTimelineEntries() {
  let items = [];
  try {
    items = JSON.parse(localStorage.getItem(TIMELINE_STORAGE_KEY)) || [];
  } catch (error) {
    items = [];
  }

  const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "fechas-pequena-jess.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importTimelineEntries(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (Array.isArray(parsed)) {
        localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(parsed));
        renderTimeline();
        addUnlock("Fechas importadas a la linea de tiempo");
      }
    } catch (error) {
      openSurpriseOverlay("No se pudo importar el archivo de fechas.");
    }
  };
  reader.readAsText(file);
  importTimelineInput.value = "";
}

function renderLetters() {
  if (!letterTabs || !letterPreview) {
    return;
  }

  letterTabs.innerHTML = "";

  LETTERS.forEach((letter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `letter-tab${index === currentLetter ? " active-letter" : ""}`;
    button.textContent = letter.title;
    button.addEventListener("click", () => {
      currentLetter = index;
      renderLetters();
    });
    letterTabs.appendChild(button);
  });

  letterPreview.textContent = LETTERS[currentLetter].body;
}

function renderOpenIf() {
  if (!openIfGrid) {
    return;
  }

  openIfGrid.innerHTML = "";

  OPEN_IF.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "open-if-card";
    card.innerHTML = `<strong>${item.title}</strong><div class="capsule-text">Pulsa para leer</div>`;
    card.addEventListener("click", () => openSurpriseOverlay(item.body));
    openIfGrid.appendChild(card);
  });
}

function renderUnlocks() {
  if (!unlockList) {
    return;
  }

  unlockList.innerHTML = "";

  if (unlocks.length === 0) {
    const item = document.createElement("div");
    item.className = "unlock-item";
    item.textContent = "Todavia no hay desbloqueos guardados.";
    unlockList.appendChild(item);
    return;
  }

  unlocks.forEach((text) => {
    const item = document.createElement("div");
    item.className = "unlock-item";
    item.textContent = text;
    unlockList.appendChild(item);
  });
}

function renderVoiceList() {
  if (!voiceList) {
    return;
  }

  voiceList.innerHTML = "";

  if (customVoices.length === 0) {
    const item = document.createElement("div");
    item.className = "voice-item";
    item.textContent = "Aqui puedes agregar notas de voz y audios personalizados.";
    voiceList.appendChild(item);
    return;
  }

  customVoices.forEach((voice) => {
    const item = document.createElement("div");
    item.className = "voice-item";
    const title = document.createElement("strong");
    title.textContent = voice.name;
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = voice.url;
    item.appendChild(title);
    item.appendChild(audio);
    voiceList.appendChild(item);
  });
}

function handleVoiceUpload(event) {
  const files = Array.from(event.target.files || []);
  files.forEach((file) => {
    customVoices.push({
      name: file.name.replace(/\.[^.]+$/, ""),
      url: URL.createObjectURL(file)
    });
  });
  renderVoiceList();
  addUnlock("Audios personalizados agregados");
}

function seedGallery() {
  if (displayImages.children.length > 0) {
    return;
  }

  GALLERY_SEED.forEach((item) => {
    displayImages.appendChild(createGalleryItem(item.src, item.caption));
  });
}

function handleImageUpload(event) {
  const files = Array.from(event.target.files || []);

  files.forEach((file) => {
    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      displayImages.prepend(createGalleryItem(reader.result, file.name));
    };
    reader.readAsDataURL(file);
  });

  imageUpload.value = "";
}

function getStoredMessages() {
  try {
    return JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function storeMessages(messages) {
  localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
}

function appendMessage(text) {
  const message = document.createElement("p");
  message.className = "chat-message";
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function renderStoredMessages() {
  const messages = getStoredMessages();
  chatBox.innerHTML = "";

  if (messages.length === 0) {
    appendMessage("Aqui pueden quedarse guardados mensajes bonitos.");
    return;
  }

  messages.forEach(appendMessage);
}

function sendMessage() {
  const text = chatInput.value.trim();

  if (!text) {
    return;
  }

  const messages = getStoredMessages();
  messages.push(text);
  storeMessages(messages);

  if (chatBox.textContent === "Aqui pueden quedarse guardados mensajes bonitos.") {
    chatBox.innerHTML = "";
  }

  appendMessage(text);
  chatInput.value = "";
}

function showLoveLetter() {
  if (letterOverlayText) {
    letterOverlayText.textContent = LETTERS[currentLetter].body;
  }
  letterOverlay.hidden = false;
}

function closeLetter() {
  letterOverlay.hidden = true;
}

function openSurpriseOverlay(message) {
  surpriseOverlayText.textContent = message;
  surpriseOverlay.hidden = false;
}

function closeOverlay() {
  surpriseOverlay.hidden = true;
}

function closeAllOverlays() {
  closeLetter();
  closeOverlay();
  if (imageModal) {
    imageModal.hidden = true;
  }
  if (unlockOverlay) {
    unlockOverlay.hidden = true;
  }
}

function renderReasons() {
  reasonsList.innerHTML = "";
  shuffle(REASONS).slice(0, 3).forEach((reason) => {
    const item = document.createElement("div");
    item.className = "reason-item";
    item.textContent = reason;
    reasonsList.appendChild(item);
  });
}

function showRandomSurprise() {
  const message = SURPRISE_MESSAGES[Math.floor(Math.random() * SURPRISE_MESSAGES.length)];
  surpriseMessage.textContent = message;
  if (jarMessage) {
    jarMessage.textContent = message;
  }
  openSurpriseOverlay(message);
}

function renderLoveMeter() {
  const clamped = Math.max(10, Math.min(loveMeter, 100));
  loveMeterFill.style.width = `${clamped}%`;

  if (clamped < 35) {
    loveMeterText.textContent = "Nivel suave y bonito. Todavia hay espacio para mas ternura.";
  } else if (clamped < 70) {
    loveMeterText.textContent = "El ambiente ya se siente dulce y especial.";
  } else if (clamped < 95) {
    loveMeterText.textContent = "Nivel alto. Esta pagina ya esta rebosando energia bonita.";
  } else {
    loveMeterText.textContent = "Nivel maximo. Activa fuegos artificiales, porque esto ya esta brillando.";
  }
}

function boostLoveMeter() {
  loveMeter = Math.min(loveMeter + 12, 100);
  localStorage.setItem(LOVE_METER_KEY, String(loveMeter));
  renderLoveMeter();
  addUnlock("Medidor de ternura subido");
  renderSpecialDetail();

  if (loveMeter >= 100) {
    startFireworks();
    openSurpriseOverlay("El medidor llego al maximo. Recompensa desbloqueada: modo noche romantico con un codigo secreto.");
  }
}

function startMiniGame() {
  const compliments = [
    "Premio: te ganaste un abrazo imaginario.",
    "Premio: una cancion bonita para dedicar.",
    "Premio: una lluvia de corazones merece aparecer.",
    "Premio: hoy la suerte esta completamente de tu lado."
  ];

  const reward = compliments[Math.floor(Math.random() * compliments.length)];
  createHeart();
  createHeart();
  gameStatus.textContent = `Mini juego: encontraste una sorpresa. ${reward}`;
  addUnlock("Mini juego completado");
}

function renderMemory() {
  if (!memoryGrid) {
    return;
  }

  memoryGrid.innerHTML = "";
  memoryCards.forEach((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `memory-card${card.revealed || card.matched ? " revealed" : ""}`;
    button.textContent = card.revealed || card.matched ? card.value : "?";
    button.addEventListener("click", () => revealMemoryCard(card.id));
    memoryGrid.appendChild(button);
  });
}

function startMemoryGame() {
  const symbols = ["♥", "✦", "☀", "♫"];
  memoryCards = shuffle([...symbols, ...symbols]).map((value, index) => ({
    id: index,
    value,
    revealed: false,
    matched: false
  }));
  memorySelection = [];
  matchedPairs = 0;
  memoryGrid.hidden = false;
  renderMemory();
  gameStatus.textContent = "Memoria iniciada. Encuentra las parejas.";
}

function revealMemoryCard(id) {
  const card = memoryCards.find((item) => item.id === id);
  if (!card || card.revealed || card.matched || memorySelection.length === 2) {
    return;
  }

  card.revealed = true;
  memorySelection.push(card);
  renderMemory();

  if (memorySelection.length === 2) {
    const [first, second] = memorySelection;
    if (first.value === second.value) {
      first.matched = true;
      second.matched = true;
      memorySelection = [];
      matchedPairs += 1;
      if (matchedPairs === 4) {
        gameStatus.textContent = "Ganaste el juego de memoria.";
        addUnlock("Memoria completada");
      }
    } else {
      setTimeout(() => {
        first.revealed = false;
        second.revealed = false;
        memorySelection = [];
        renderMemory();
      }, 700);
    }
  }
}

function renderQuizQuestion() {
  if (!quizCard) {
    return;
  }

  const current = QUIZ_QUESTIONS[quizIndex];
  quizQuestion.textContent = current.q;
  quizAnswers.innerHTML = "";

  current.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-button";
    button.textContent = answer;
    button.addEventListener("click", () => answerQuiz(index));
    quizAnswers.appendChild(button);
  });
}

function startQuiz() {
  quizIndex = 0;
  quizCard.hidden = false;
  renderQuizQuestion();
  gameStatus.textContent = "Quiz iniciado. Elige la opcion mas romantica.";
}

function answerQuiz(index) {
  const current = QUIZ_QUESTIONS[quizIndex];

  if (index === current.correct) {
    quizIndex += 1;
    if (quizIndex >= QUIZ_QUESTIONS.length) {
      quizQuestion.textContent = "Quiz completado. Muy bien.";
      quizAnswers.innerHTML = "";
      gameStatus.textContent = "Completaste el quiz.";
      addUnlock("Quiz completado");
      return;
    }
    renderQuizQuestion();
    return;
  }

  gameStatus.textContent = "Esa no era. Intenta otra opcion.";
}

function startFlappy() {
  if (flappyRunning) {
    gameStatus.textContent = "Flappy Love ya esta en curso. Toca el recuadro para ayudar al corazon a volar.";
    return;
  }

  const ctx = flappyCanvas.getContext("2d");
  const width = flappyCanvas.width;
  const height = flappyCanvas.height;
  const heartX = 90;
  let heartY = height / 2;
  let velocity = 0;
  let score = 0;
  let frame = 0;
  let pipes = [];

  flappyRunning = true;
  flappyCanvas.hidden = false;
  flappyCanvas.style.pointerEvents = "auto";
  gameStatus.textContent = "Flappy Love iniciado. Toca el recuadro para evitar los obstaculos.";

  const flap = () => {
    velocity = -5.3;
  };

  flappyCanvas.onclick = flap;

  function drawHeart(x, y) {
    ctx.fillStyle = "#e45588";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 12, y - 16, x - 36, y + 6, x, y + 32);
    ctx.bezierCurveTo(x + 36, y + 6, x + 12, y - 16, x, y);
    ctx.fill();
  }

  function endGame(message) {
    flappyRunning = false;
    flappyCanvas.onclick = null;
    ctx.fillStyle = "rgba(52, 31, 42, 0.76)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Georgia";
    ctx.fillText("Fin del juego", 135, 120);
    ctx.font = "16px Trebuchet MS";
    ctx.fillText(`Puntaje final: ${score}`, 145, 150);
    ctx.fillText("Pulsa Jugar Flappy Love para reiniciar.", 75, 180);
    gameStatus.textContent = message;
  }

  function loop() {
    frame += 1;
    velocity += 0.28;
    heartY += velocity;

    if (frame % 95 === 0) {
      const gapTop = 50 + Math.random() * 120;
      pipes.push({
        x: width,
        gapTop,
        gapHeight: 92,
        counted: false
      });
    }

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffe8f1";
    ctx.fillRect(0, 0, width, height);

    pipes.forEach((pipe) => {
      pipe.x -= 2.4;
      ctx.fillStyle = "#cb3f72";
      ctx.fillRect(pipe.x, 0, 42, pipe.gapTop);
      ctx.fillRect(pipe.x, pipe.gapTop + pipe.gapHeight, 42, height - pipe.gapTop - pipe.gapHeight);

      const hitPipe = heartX + 18 > pipe.x && heartX - 18 < pipe.x + 42;
      const hitTop = heartY - 16 < pipe.gapTop;
      const hitBottom = heartY + 16 > pipe.gapTop + pipe.gapHeight;

      if (hitPipe && (hitTop || hitBottom)) {
        endGame("El corazon choco con un obstaculo. Pero quedo muy bonito el intento.");
      }

      if (!pipe.counted && pipe.x + 42 < heartX) {
        pipe.counted = true;
        score += 1;
      }
    });

    pipes = pipes.filter((pipe) => pipe.x > -60);

    if (heartY < 25 || heartY > height - 22) {
      endGame("El corazon se salio del camino. Puedes intentarlo otra vez.");
    }

    drawHeart(heartX, heartY);

    ctx.fillStyle = "#8e2d4f";
    ctx.font = "16px Trebuchet MS";
    ctx.fillText(`Puntaje: ${score}`, 16, 24);
    ctx.fillText("Toca para subir", 16, 44);

    if (flappyRunning) {
      window.requestAnimationFrame(loop);
    }
  }

  loop();
}

function resizeFireworksCanvas() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
}

function startFireworks() {
  const ctx = fireworksCanvas.getContext("2d");
  resizeFireworksCanvas();

  let particles = Array.from({ length: 130 }, () => ({
    x: fireworksCanvas.width / 2,
    y: fireworksCanvas.height / 2,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
    life: 70 + Math.random() * 30,
    size: 2 + Math.random() * 3,
    color: ["#ff6f91", "#ff9671", "#ffc75f", "#f9f871", "#ffd6e8"][Math.floor(Math.random() * 5)]
  }));

  function animate() {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.04;
      particle.life -= 1;

      ctx.fillStyle = particle.color;
      ctx.globalAlpha = Math.max(particle.life / 100, 0);
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    particles = particles.filter((particle) => particle.life > 0);

    if (particles.length > 0) {
      window.requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
  }

  animate();
}

function handleSecretCode(event) {
  if (event.key.length !== 1) {
    if (event.key === "Escape") {
      closeAllOverlays();
    }
    return;
  }

  secretBuffer = `${secretBuffer}${event.key.toLowerCase()}`.slice(-SECRET_CODE.length);

  if (secretBuffer === SECRET_CODE) {
    setTheme("night");
    openSurpriseOverlay("Codigo secreto desbloqueado. Modo noche romantico activado.");
    addUnlock("Codigo secreto AMOR");
  }
}

function startExperience() {
  updateCounter();
  updateCountdown();
  rotateNotes();
  rotateDailyMessage();
  rotateFeaturedQuote();
  renderSpecialDetail();
  renderStoredMessages();
  renderReasons();
  seedGallery();
  renderSunsetCards();
  renderCapsules();
  renderTimeline();
  renderLetters();
  renderOpenIf();
  renderVoiceList();
  renderUnlocks();
  renderLoveMeter();
  loadTrack(0);
  setVolume();

  if (!heartsStarted) {
    heartsStarted = true;
    setInterval(createHeart, 900);
    setInterval(rotateNotes, 4000);
    setInterval(updateCounter, 1000);
    setInterval(updateCountdown, 60000);
    setInterval(rotateHeroImage, 5000);
    setInterval(rotateDailyMessage, 6500);
    setInterval(rotateFeaturedQuote, 8000);
  }
}

dailyMessageIndex = getDailyIndex(DAILY_MESSAGES.length);
quoteIndex = getDailyIndex(FEATURED_QUOTES.length, 3);
renderLoginDailyMessage();
setTheme(localStorage.getItem("vip-theme") || "sunset");

loginButton.addEventListener("click", checkPassword);
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkPassword();
  }
});

musicToggle.addEventListener("click", toggleMusic);
nextSongButton.addEventListener("click", () => playNextSong(true));
if (prevSongButton) {
  prevSongButton.addEventListener("click", playPrevSong);
}
if (shuffleSongsButton) {
  shuffleSongsButton.addEventListener("click", shufflePlaylistOrder);
}
if (songProgress) {
  songProgress.addEventListener("input", seekSong);
}
if (volumeControl) {
  volumeControl.addEventListener("input", setVolume);
}
if (musicUpload) {
  musicUpload.addEventListener("change", handleMusicUpload);
}
bgMusic.addEventListener("ended", () => playNextSong(true));
bgMusic.addEventListener("pause", () => {
  disc.classList.remove("playing");
  musicToggle.textContent = "Reproducir";
  songStatus.textContent = `En pausa: ${playlist[currentSong].name}`;
});
bgMusic.addEventListener("play", () => {
  disc.classList.add("playing");
  musicToggle.textContent = "Pausar";
  songStatus.textContent = `Sonando ahora: ${playlist[currentSong].name}`;
});
bgMusic.addEventListener("timeupdate", updateSongProgress);
bgMusic.addEventListener("loadedmetadata", updateSongProgress);

imageUpload.addEventListener("change", handleImageUpload);
sendButton.addEventListener("click", sendMessage);
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

heroLetterButton.addEventListener("click", showLoveLetter);
if (jarButton) {
  jarButton.addEventListener("click", showRandomSurprise);
}
closeLetterButton.addEventListener("click", closeLetter);
letterOverlay.addEventListener("click", (event) => {
  if (event.target === letterOverlay) {
    closeLetter();
  }
});

surpriseButton.addEventListener("click", showRandomSurprise);
newSurpriseButton.addEventListener("click", showRandomSurprise);
closeSurpriseOverlay.addEventListener("click", closeOverlay);
surpriseOverlay.addEventListener("click", (event) => {
  if (event.target === surpriseOverlay) {
    closeOverlay();
  }
});

refreshReasonsButton.addEventListener("click", renderReasons);
changeDailyMessage.addEventListener("click", rotateDailyMessage);
boostLoveButton.addEventListener("click", boostLoveMeter);
if (unlockButton) {
  unlockButton.addEventListener("click", () => {
    renderUnlocks();
    unlockOverlay.hidden = false;
  });
}
themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeOption));
});
document.getElementById("miniGameButton").addEventListener("click", startMiniGame);
document.getElementById("flappyButton").addEventListener("click", startFlappy);
if (memoryButton) {
  memoryButton.addEventListener("click", startMemoryGame);
}
if (quizButton) {
  quizButton.addEventListener("click", startQuiz);
}
document.getElementById("fireworksButton").addEventListener("click", startFireworks);
if (voiceUpload) {
  voiceUpload.addEventListener("change", handleVoiceUpload);
}
if (closeUnlockOverlay) {
  closeUnlockOverlay.addEventListener("click", () => {
    unlockOverlay.hidden = true;
  });
}
if (unlockOverlay) {
  unlockOverlay.addEventListener("click", (event) => {
    if (event.target === unlockOverlay) {
      unlockOverlay.hidden = true;
    }
  });
}
if (closeImageModal) {
  closeImageModal.addEventListener("click", () => {
    imageModal.hidden = true;
  });
}
if (prevImageButton) {
  prevImageButton.addEventListener("click", () => cycleImage(-1));
}
if (nextImageButton) {
  nextImageButton.addEventListener("click", () => cycleImage(1));
}
if (imageModal) {
  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.hidden = true;
    }
  });
}
const secretIfButton = document.getElementById("secretIfButton");
if (secretIfButton) {
  secretIfButton.addEventListener("click", () => openSurpriseOverlay("Abre esto solo si necesitabas una razon para sonreir un poco hoy."));
}
if (addTimelineButton) {
  addTimelineButton.addEventListener("click", addTimelineEntry);
}
if (saveTimelineButton) {
  saveTimelineButton.addEventListener("click", addTimelineEntry);
}
if (exportTimelineButton) {
  exportTimelineButton.addEventListener("click", exportTimelineEntries);
}
if (importTimelineInput) {
  importTimelineInput.addEventListener("change", importTimelineEntries);
}
window.addEventListener("resize", resizeFireworksCanvas);
window.addEventListener("keydown", handleSecretCode);
