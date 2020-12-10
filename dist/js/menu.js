var menuKnop = document.querySelector('.menu-knop');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-navigatie');
var menuPers = document.querySelector('.menu-persoonlijk');
var navItem = document.querySelectorAll('.nav-item');
var checkInfoMenu = false;

var flex1 = document.querySelector('.flex-item1');
var flex2 = document.querySelector('.flex-item2');
let showCollaps = false;
let showCollaps2 = false;

// standaard staat van menu
let showMenu = false;
let showMenu2 = false;

//  checkt of er een info-knop is links boven de pagina
if (document.querySelector(".info-knop") || document.querySelector(".info-scherm")
    != null) {
    var infoKnop = document.querySelector(".info-knop");
    var infoScherm = document.querySelector(".info-scherm");
    infoKnop.addEventListener('click', toggleInfo);
    checkInfoMenu = true;
}

menuKnop.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (showMenu ==  false) {
        menuKnop.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPers.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        if (checkInfoMenu === true) {
            infoKnop.classList.add('verlaagd');
        }

        // reset menu staat
        showMenu = true;
    }
    else {
        menuKnop.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPers.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        if (checkInfoMenu === true) {
            infoKnop.classList.remove('verlaagd');
        }

        // reset menu staat
        showMenu = false;
    }
}

//  info menu op pagina's van javascript projecten
function toggleInfo() {
    if (showMenu2 ==  false) {
        infoScherm.classList.add('open');
        infoKnop.classList.add('sluit');
        menuKnop.classList.add('verlaagd');

        // reset menu staat
        showMenu2 = true;
    }
    else {
        infoScherm.classList.remove('open');
        infoKnop.classList.remove('sluit');
        menuKnop.classList.remove('verlaagd');

        // reset menu staat
        showMenu2 = false;
    }
}
