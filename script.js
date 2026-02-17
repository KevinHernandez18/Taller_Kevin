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

        // quitar activa de todas
        columnas.forEach(col => col.classList.remove("activa"));

        // activar solo la clickeada
        columna.classList.add("activa");

    });

});

