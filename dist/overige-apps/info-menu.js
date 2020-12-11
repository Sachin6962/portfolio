var checkInfoMenu = false;
let showMenu2 = false;
var infoKnop = document.querySelector(".info-knop");
var infoScherm = document.querySelector(".info-scherm");

infoKnop.addEventListener('click', toggleInfo);



function toggleInfo() {
    if (showMenu2 ==  false) {
        infoKnop.classList.add('verhoogd1');
        infoScherm.classList.add('open');
        infoScherm.classList.add('verhoogd2');
        document.querySelector(".menu-knop").classList.add("verlaagd");

        // reset menu staat
        showMenu2 = true;
    }
    else {
        infoKnop.classList.remove('verhoogd1');
        infoScherm.classList.remove('open');
        infoScherm.classList.remove('verhoogd2');        
        document.querySelector(".menu-knop").classList.remove("verlaagd");

        // reset menu staat
        showMenu2 = false;
    }
}
