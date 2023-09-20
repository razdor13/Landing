// const hamburger = document.querySelector(".hamburger"),
//     menu = document.querySelector(".menu"),
//     close = document.querySelector(".menu__close"),
//     overlay = document.querySelector(".menu__overlay");
// hamburger.addEventListener("click", () => {
//     menu.classList.add("active");
// });

// close.addEventListener("click", () => {
//     menu.classList.remove("active");
// });

// overlay.addEventListener("click", () => {
//     menu.classList.remove("active");
// });

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
