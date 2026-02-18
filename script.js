document.addEventListener("DOMContentLoaded", function() {

    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {

        const percent = skill.getAttribute("data-percent");
        const progressBar = skill.querySelector(".progreso");
        const percentText = skill.querySelector(".percent-text");

        if (!progressBar || !percentText) return;

        percentText.textContent = percent + "%";
        progressBar.style.width = percent + "%";

    });

});

const columnas = document.querySelectorAll(".columna-estudio");

columnas.forEach(columna => {

    columna.addEventListener("click", () => {

        columnas.forEach(col => col.classList.remove("activa"));

        columna.classList.add("activa");

    });

});

const imagenes = [
    "asset/images/mundo.png",
    "asset/images/LATAM.jpg",
    "asset/images/tecnologia.jpg",
    "asset/images/starship.jpeg"
];

let indice = 0;
const img = document.getElementById("galeria-img");

setInterval(() => {
    indice = (indice + 1) % imagenes.length;
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = imagenes[indice];
        img.style.opacity = 1;
    }, 400);

}, 8000);
