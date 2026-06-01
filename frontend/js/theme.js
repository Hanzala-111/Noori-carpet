const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        const currentTheme =
            body.classList.contains("dark")
                ? "dark"
                : "light";

        localStorage.setItem("theme", currentTheme);
    });
}