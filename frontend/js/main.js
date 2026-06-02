console.log("MAIN JS IS RUNNING");

// =======================
// MOBILE MENU
// =======================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// =======================
// AOS (SAFE)
// =======================
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

// =======================
// SMOOTH SCROLL
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =======================
// STICKY NAVBAR
// =======================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = "rgba(0,0,0,.95)";
        } else {
            navbar.style.background = "rgba(0,0,0,.85)";
        }
    }
});

// =======================
// CUSTOM CARPET FORM (IMPORTANT)
// =======================
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("customForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        console.log("FORM SUBMITTED");

        const data = {
            name: form.name.value,
            email: form.email.value,
            size: form.size.value,
            message: form.message.value,
        };

        try {
            const res = await fetch("/api/custom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            console.log("SERVER RESPONSE:", result);
            alert(result.message);

        } catch (error) {
            console.log("FETCH ERROR:", error);
            alert("Server error");
        }
    });

});