//  mijn leeftijd berekenen
function berekenLeeftijd() {
  var jaar = huidigJaar - 1998;
  var huidigeMaand = new Date().getMonth();
  var huidigeDag = new Date().getDate();
  // checkt of de datum na mijn verjaardag is (16-09) en voegt dan 1 toe
  if (huidigeMaand >= 8) {
    if (huidigeDag >= 16) {
      return jaar + 1;
    }
  }
  else {
    return jaar;
  }
}
document.querySelector('#leeftijd').innerHTML = berekenLeeftijd();