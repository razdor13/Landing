$(document).ready(function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".menu__close");
    const overlay = document.querySelector(".menu__overlay");

    // Функція для відкриття меню
    function openMenu() {
        menu.classList.add("active");
    }

    // Функція для закриття меню
    function closeMenu() {
        menu.classList.remove("active");
    }

    // Додати клік-подію для відкриття меню
    hamburger.addEventListener("click", openMenu);

    // Додати клік-подію для закриття меню
    close.addEventListener("click", closeMenu);

    // Додати обробник кліка на документі для закриття меню при кліку поза меню

    // Додати клік-подію для закриття меню при кліку на overlay
    overlay.addEventListener("click", closeMenu);

    const counters = document.querySelectorAll(".skills__rating-counter"),
        lines = document.querySelectorAll(".skills__rating-line span");

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    new WOW().init();
});
