const petalsContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * window.innerWidth + "px";

    const size = 12 + Math.random() * 12;
    petal.style.width = size + "px";
    petal.style.height = size + "px";

    petal.style.animationDuration = (8 + Math.random() * 6) + "s";
    petal.style.animationDelay = Math.random() * 2 + "s";

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend", () => {
        petal.remove();
    });

}

setInterval(createPetal, 900);