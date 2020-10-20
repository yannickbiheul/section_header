const accueil = document.querySelector('#accueil');
let hauteurAccueil = Number.parseInt(getComputedStyle(accueil).height);
const header = document.querySelector('header');
const boutonBurger = document.querySelector(".boutonBurger");

console.log(hauteurAccueil);

window.onscroll = function() {
    if (document.documentElement.scrollTop >= hauteurAccueil) {
        header.style.background = "#000";
        header.style.height = "80px";
        boutonBurger.style.top = "20px";
    } else {
        header.style.background = "transparent";
        header.style.height = "100px";
        boutonBurger.style.top = "30px";
    }
}