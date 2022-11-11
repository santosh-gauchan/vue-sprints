const burgerMenu = document.querySelector('#burger-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', ()=>{
    menu.style.left = 0;
    menu.style.transition = "0.5s";
    burgerMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener('click', ()=>{
    menu.style.left = "-480px";
    menu.style.transition = "0.5s";
    burgerMenu.style.display = "block";
    closeMenu.style.display = "none";
});