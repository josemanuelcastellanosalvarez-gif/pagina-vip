// The exact moment this relationship began (Colombia time).
const relationshipStart = new Date("2026-07-14T16:08:00-05:00");
const ACCESS_PASSWORD = "Enojitos20";

const accessGate = document.querySelector("#accessGate");
const accessForm = document.querySelector("#accessForm");
const accessPassword = document.querySelector("#accessPassword");
const accessError = document.querySelector("#accessError");
const pageContent = document.querySelector("#pageContent");
function enterPage() {
  accessGate.hidden = true;
  pageContent.hidden = false;
}

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (accessPassword.value !== ACCESS_PASSWORD) {
    accessError.textContent = "Esa contraseña no es correcta. Inténtalo de nuevo.";
    accessPassword.select();
    return;
  }
  enterPage();
});

const secretO = document.querySelector("#secretO");
secretO.addEventListener("click", () => {
  secretO.classList.add("awake");
  toast.textContent = "Shh... hay 10 capítulos esperándote. Desliza cuando aparezcan.";
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    secretO.classList.remove("awake");
  }, 4400);
});


const units = {
  years: document.querySelector("#years"),
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function updateCounter() {
  const now = new Date();
  let years = now.getFullYear() - relationshipStart.getFullYear();
  const anniversary = new Date(relationshipStart);
  anniversary.setFullYear(relationshipStart.getFullYear() + years);
  if (anniversary > now) {
    years -= 1;
    anniversary.setFullYear(anniversary.getFullYear() - 1);
  }

  const remaining = Math.max(0, now - anniversary);
  units.years.textContent = years;
  units.days.textContent = Math.floor(remaining / 86400000);
  units.hours.textContent = Math.floor(remaining / 3600000) % 24;
  units.minutes.textContent = Math.floor(remaining / 60000) % 60;
  units.seconds.textContent = Math.floor(remaining / 1000) % 60;
}

updateCounter();
setInterval(updateCounter, 1000);

const toast = document.querySelector("#toast");
let toastTimer;
document.querySelector("#surpriseButton").addEventListener("click", () => {
  const notes = [
    "Pequeño recordatorio: alguien tiene mucha suerte de tenerte.",
    "Las mejores historias se escriben despacio, juntos.",
    "Hoy tambien es un buen dia para querernos bonito.",
    "Nuestro lugar favorito siempre puede ser donde estemos los dos.",
  ];
  toast.textContent = notes[Math.floor(Math.random() * notes.length)];
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4200);
});

const LOVE_LIMIT = 5000000;
const loveCount = document.querySelector("#loveCount");
const loveTap = document.querySelector("#loveTap");

function todayKey() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Bogota" }).format(new Date());
}

function formatLove(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value % 1000000 ? 1 : 0)}m`;
  if (value >= 1000) return `${(value / 1000).toFixed(value % 1000 ? 1 : 0)}k`;
  return String(value);
}

function getDailyLove() {
  const saved = JSON.parse(localStorage.getItem("nuestra-historia-love") || "{}");
  return saved.date === todayKey() ? Math.min(saved.value || 0, LOVE_LIMIT) : 0;
}

let dailyLove = getDailyLove();
function renderLove() {
  loveCount.textContent = formatLove(dailyLove);
  loveTap.disabled = dailyLove >= LOVE_LIMIT;
  loveTap.setAttribute("aria-label", dailyLove >= LOVE_LIMIT ? "Meta diaria alcanzada" : "Sumar amor");
}

loveTap.addEventListener("click", () => {
  dailyLove = Math.min(LOVE_LIMIT, dailyLove + 1);
  localStorage.setItem("nuestra-historia-love", JSON.stringify({ date: todayKey(), value: dailyLove }));
  renderLove();
  if (dailyLove === LOVE_LIMIT) {
    toast.textContent = "Llegaron al maximo de amor de hoy. Mañana empieza una nueva ronda.";
    toast.classList.add("show");
  }
});
renderLove();
