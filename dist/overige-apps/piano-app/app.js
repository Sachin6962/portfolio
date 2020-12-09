//  alle toetsen in piano
var toetsen = document.querySelectorAll(".toets");

//  checkt welke toets wordt gedrukt en speelt bijbehorend geluid af
function speelGeluid() {
    var geluid = new Audio("geluiden/" + this.id + ".mp3");
    geluid.play();
    animatie(this.id);
}

//  voegt event toe aan elke toets
for (var i = 0; i < toetsen.length; i++) {
    toetsen[i].addEventListener("click", speelGeluid);
}

//  geeft toets andere kleur wanneer je erop klikt
function animatie(toets) {
    document.querySelector("#" + toets).classList.add("rood");
    setTimeout(function() {
        document.querySelector("#" + toets).classList.remove("rood");
    }, 100);
}