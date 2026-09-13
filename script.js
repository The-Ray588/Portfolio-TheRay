// --- 1. ПРЕЛОАДЕР ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
    initParticles();
    AOS.init({ duration: 800, once: true });
});

// --- 2. ЧАСТИЦЫ ---
function initParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#d8b4fe" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#a855f7", "opacity": 0.3, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } } }
        },
        "retina_detect": true
    });
}

// --- 3. СВЕЧЕНИЕ ЗА КУРСОРОМ ---
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// --- 4. ЭФФЕКТ ШАПКИ ПРИ СКРОЛЛЕ ---
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// --- 5. ПЛАВНЫЙ СКРОЛЛ ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('nav-links').classList.remove('active');
    });
});

// --- 6. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeIcon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// --- 7. БУРГЕР-МЕНЮ ---
const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = burger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
