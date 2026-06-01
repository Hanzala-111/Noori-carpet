// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });



//     document.addEventListener("DOMContentLoaded", () => {
//     AOS.init({
//         duration: 1000,
//         once: true
//     });
// });

}

// AOS ANIMATION

AOS.init({
    duration: 1000,
    once: true
});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// STICKY NAVBAR

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {

        navbar.style.background = "rgba(0,0,0,.95)";

    } else {

        navbar.style.background = "rgba(0,0,0,.85)";

    }

});