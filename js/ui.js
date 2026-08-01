const cover = document.getElementById("cover");
const book = document.getElementById("book");
const openBook = document.getElementById("openBook");
const bgMusic = document.getElementById("bgMusic");

book.style.display = "none";

openBook.addEventListener("click", () => {

    cover.style.display = "none";
    book.style.display = "flex";

    // Iniciar música
    bgMusic.volume = 0;
    bgMusic.play().catch(err => console.log(err));

    // Fade In
    let volume = 0;

    const fade = setInterval(() => {

        if (volume < 0.3) {

            volume += 0.02;
            bgMusic.volume = volume;

        } else {

            clearInterval(fade);

        }

    }, 200);

});