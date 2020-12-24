//  huidig jaar berekenen
var datum = new Date();
var huidigJaar = datum.getFullYear();

//  zet huidig jaar in copyright in de footer
document.querySelector("#jaar").innerHTML = huidigJaar;