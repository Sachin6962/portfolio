var infoKnop = document.querySelector(".info-knop");
var infoScherm = document.querySelector(".info-scherm");

var menuKnop = document.querySelector('.menu-knop');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-navigatie');
var menuPers = document.querySelector('.menu-persoonlijk');
var navItem = document.querySelectorAll('.nav-item');

var flex1 = document.querySelector('.flex-item1');
var flex2 = document.querySelector('.flex-item2');
let showCollaps = false;
let showCollaps2 = false;

// standaard staat van menu
let showMenu = false;
let showMenu2 = false;

menuKnop.addEventListener('click', toggleMenu);
infoKnop.addEventListener('click', toggleInfo);

function toggleMenu() {
    if (showMenu ==  false) {
        menuKnop.classList.add('close');
        menuKnop.classList.add('verhoog2');
        menu.classList.add('show');
        menuScherm.classList.add('verhoog1');
        menuNav.classList.add('show');
        menuPers.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        // reset menu staat
        showMenu = true;
    }
    else {
        menuKnop.classList.remove('close');
        menuKnop.classList.remove('verhoog2');
        menu.classList.remove('show');
        menuScherm.classList.remove('verhoog1');
        menuNav.classList.remove('show');
        menuPers.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        // reset menu staat
        showMenu = false;
    }
}

//  info menu op pagina's van javascript projecten
function toggleInfo() {
    if (showMenu2 ==  false) {
        infoScherm.classList.add('open');
        infoScherm.classList.add('verhoog1');
        infoKnop.classList.add('sluit');
        infoKnop.classList.add('verhoog2');

        // reset menu staat
        showMenu2 = true;
    }
    else {
        infoScherm.classList.remove('open');
        infoScherm.classList.remove('verhoog1');
        infoKnop.classList.remove('sluit');
        infoKnop.classList.remove('verhoog2');

        // reset menu staat
        showMenu2 = false;
    }
}
