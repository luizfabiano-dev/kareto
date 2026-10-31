
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

const navLinks = document.querySelectorAll(".nav a");

// Abrir e fechar menu mobile
menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

});


// Fechar menu ao clicar em um link
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Abrir menu");

    });

});


// Atualizar ano automaticamente
document.getElementById("year").textContent =
    new Date().getFullYear();
