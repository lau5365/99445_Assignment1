// ========== 1. MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});


// ========== 2. DARK / LIGHT MODE TOGGLE ==========

// Load saved theme
const savedTheme = localStorage.getItem("theme");
const themeToggle = document.getElementById("themeToggle");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    // Switch icon
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ========== 3. SMOOTH SCROLLING FOR NAV ==========
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ========== 4. HOME BUTTON SCROLL ==========
document.getElementById("scrollProjects").onclick = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
};


// ========== 5. FADE-IN + FADE-OUT ON SCROLL ==========

const fadeElements = document.querySelectorAll('.fade-in');

function fadeOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 80 && rect.bottom > 80;

        if (inView) {
            // Fade IN
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        } else {
            // Fade OUT
            el.style.opacity = 0;
            el.style.transform = "translateY(30px)";
        }
    });
}

window.addEventListener("scroll", fadeOnScroll);
window.addEventListener("load", fadeOnScroll); // Trigger once on page load


// ========== 6. NAVBAR SHADOW ON SCROLL ==========
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 30) {
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});


// ========== 7. CONTACT FORM VALIDATION & SUCCESS ==========
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    status.textContent = "Sending...";

    setTimeout(() => {
        status.textContent = "Message sent!";
        this.reset();
    }, 1200);
});
