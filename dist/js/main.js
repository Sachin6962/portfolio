var menuKnop = document.querySelector('.menu-knop');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-navigatie');
var menuPers = document.querySelector('.menu-persoonlijk');
var navItem = document.querySelectorAll('.nav-item');

// standaard staat van menu
let showMenu = false;

menuKnop.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (showMenu ==  false) {
        menuKnop.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPers.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        // reset menu staat
        showMenu = true;
    }
    else {
        menuKnop.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPers.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        // reset menu staat
        showMenu = false;
    }
}