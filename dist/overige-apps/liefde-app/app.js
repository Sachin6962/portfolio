var willekeurigNummer;
var naam1;
var naam2;

function bereken() {
    naam1 = document.querySelector(".invoer1").value;
    naam2 = document.querySelector(".invoer2").value;

    if (naam1 == "" || naam2 == "") {
        document.querySelector("h2").innerHTML = "Voer a.u.b. eerst 2 namen in.";
    }
    else {
        willekeurigNummer = Math.floor(Math.random() * 100 + 1);

        document.querySelector("h2").innerHTML = "Aan het berekenen.. Een klein momentje..";
    
        setTimeout(function() {
            document.querySelector("h2").innerHTML = conclusie();
            document.querySelector("h1").innerHTML = willekeurigNummer + "%";
            document.querySelector("h1").innerHTML = willekeurigNummer + "%";
            resetWaarden();
        }, 3000);
    }
}

function conclusie() {    
    if (willekeurigNummer < 20) {
        return naam1 + " en " + naam2 + " haten elkaar..";
    }
    else if (willekeurigNummer >= 20 && willekeurigNummer < 50) {
        return naam1 + " en " + naam2 + " hebben een slechte relatie.";
    }
    else if (willekeurigNummer >= 50 && willekeurigNummer < 80) {
        return naam1 + " en " + naam2 + " kunnen goed met elkaar opschieten";
    }
    else {
        return naam1 + " en " + naam2 + " houden enorm veel van elkaar.";
    }
}

function resetWaarden() {
    document.querySelector(".invoer1").value = "";
    document.querySelector(".invoer2").value = "";
}

document.querySelector("i").addEventListener("click", bereken);