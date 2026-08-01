// ==============================
// PROJECT HANAMI
// Dynamic Stars
// ==============================

const starsContainer = document.getElementById("stars");

const totalStars = 80;

for (let i = 0; i < totalStars; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 5 + "s";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

}
const intro = document.getElementById("intro");

window.addEventListener("load", () => {

    setTimeout(() => {

        intro.classList.add("hide");

    }, 3000);

});
