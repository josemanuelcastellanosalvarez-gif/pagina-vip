const ACCESS_PASSWORD = "MIPRINCESABELLA";
const accessGate = document.querySelector("#accessGate");
const accessForm = document.querySelector("#accessForm");
const accessPassword = document.querySelector("#accessPassword");
const accessError = document.querySelector("#accessError");
const chaptersPage = document.querySelector("#chaptersPage");
const chapters = [...document.querySelectorAll(".chapter")];
const bookProgress = document.querySelector("#bookProgress");
const swipeGuide = document.querySelector("#swipeGuide");
let activeChapter = 0;
let startX = 0;

function showChapter(index) {
  if (index < 0 || index >= chapters.length) return;
  chapters[activeChapter].classList.remove("is-active");
  activeChapter = index;
  chapters[activeChapter].classList.add("is-active");
  bookProgress.textContent = `CAPITULO ${["I","II","III","IV","V","VI","VII","VIII","IX","X"][activeChapter]} DE X`;
  swipeGuide.textContent = activeChapter === 9 ? "Llegaste al final. Sigue bajando." : "Desliza hacia la izquierda para seguir";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextChapter() { showChapter(activeChapter + 1); }

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (accessPassword.value !== ACCESS_PASSWORD) {
    accessError.textContent = "Ese apodo no es correcto. Inténtalo de nuevo.";
    accessPassword.select();
    return;
  }
  accessGate.hidden = true;
  chaptersPage.hidden = false;
});

document.querySelector("#bookReader").addEventListener("touchstart", (event) => { startX = event.changedTouches[0].screenX; }, { passive:true });
document.querySelector("#bookReader").addEventListener("touchend", (event) => {
  if (startX - event.changedTouches[0].screenX > 65) nextChapter();
  if (event.changedTouches[0].screenX - startX > 65) showChapter(activeChapter - 1);
}, { passive:true });

document.addEventListener("keydown", (event) => {
  if (chaptersPage.hidden) return;
  if (event.key === "ArrowRight") nextChapter();
  if (event.key === "ArrowLeft") showChapter(activeChapter - 1);
});
document.addEventListener("click", (event) => {
  if (event.target.closest(".next-chapter")) nextChapter();
});
document.querySelector("#finalLove").addEventListener("click", () => { document.querySelector("#loveFinale").hidden = false; });
document.querySelector("#closeFinale").addEventListener("click", () => { document.querySelector("#loveFinale").hidden = true; });
