document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function (ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 500) ? "cVisible" : "cInvisible";
    };
});

//ScrollReveal.js-----------------------------------------*/
const sr = ScrollReveal();

// sr.reveal('h1', {
//     origin: 'top',
//     distance: '50px',
//     duration: 2000,
//     scale: 0.5,
//     mobile: true,
//     reset: true,
// });
sr.reveal('header', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    scale: 0.5,
    mobile: true,
    reset: true,
});

sr.reveal('#photoPierre', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    scale: 0.5,
    mobile: true,
    reset: true,
    delay: 1000,
});
sr.reveal('#text', {
    origin: 'top',
    distance: '50px',
    duration: 2000,
    scale: 0.7,
    //pour faire fonctionner les animations sur mobile
    mobile: true,
    //pour avoir l'animation qui se joue également quand on refait un scroll retour vers le haut
    reset: true,
    delay: 800,
});

sr.reveal('.comp', {
    origin: screenLeft,
    delay: 500,
    duration: 500,
    reset: true,
}, 100);
sr.reveal('.timeline-content', {
    origin: screenLeft,
    delay: 500,
    duration: 1000,
    reset: true,
}, 100);
sr.reveal('.interet', {
    delay: 500,
    duration: 2000,
    reset: true,
}, 500);
sr.reveal('#CV', {
    delay: 800,
    duration: 1500,
    reset: true,
}, 100);
sr.reveal('#contact', {
    delay: 500,
    duration: 1500,
    reset: true,
}, 100);












;