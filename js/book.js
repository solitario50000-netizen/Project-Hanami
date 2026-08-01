/* ==========================
        BOOK V3
========================== */

const pages = [

{

    leftTitle:"Capítulo I",

    leftText:"Toda historia tiene un comienzo.",

    rightImage:"assets/img/01.jpg",

    rightText:"Espero que esta sea la nuestra."

},

{

    leftTitle:"Capítulo II",

    leftText:"Hay encuentros que parecen casualidad, pero terminan cambiando nuestros días.",

    rightImage:"assets/img/02.jpg",

    rightText:"Y desde que llegaste, cada conversación se volvió un recuerdo que quiero guardar."

},

{

    leftTitle:"Capítulo III",

    leftText:"Aún estamos escribiendo esta historia...",

    rightImage:"assets/img/03.jpg",

    rightText:"Y, sinceramente, espero que este sea solo el comienzo."

},

{

    leftTitle:"Capítulo IV",

    leftText:"Hay personas que llegan sin hacer ruido, pero terminan convirtiéndose en una parte muy bonita de nuestros días.",

    rightImage:"assets/img/04.jpg",

    rightText:"Gracias por cada conversación, por cada risa y por permitirme conocerte un poco más. ❤️"

}

];

let currentPage = 0;

const leftTitle = document.getElementById("leftTitle");
const leftText = document.getElementById("leftText");
const rightText = document.getElementById("rightText");
const rightImage = document.getElementById("rightImage");
const nextPage = document.getElementById("nextPage");

function renderBook(){

    leftTitle.textContent = pages[currentPage].leftTitle;

    typeWriter(leftText, pages[currentPage].leftText);

    rightImage.classList.remove("show");

    rightImage.src = pages[currentPage].rightImage;

    rightImage.classList.add("show");

    typeWriter(rightText, pages[currentPage].rightText);

}

function typeWriter(element, text) {
    element.textContent = text;

}

renderBook();

nextPage.addEventListener("click", () => {

    const bookSection = document.getElementById("book");
    const book = document.querySelector(".book");

    book.classList.add("turn");
    rightImage.classList.add("hide");

    setTimeout(() => {

        currentPage++;

        if (currentPage < pages.length) {

            renderBook();

            rightImage.classList.remove("hide");

        } else {

            book.style.opacity = "0";

             setTimeout(() => {

        bookSection.style.display = "none";

        document.getElementById("finalMessage").classList.add("show");

    }, 300);

}

book.classList.remove("turn");

}, 250);

});