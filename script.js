// ============================================
// 1. ПРЕЛОАДЕР
// ============================================
let progress = 0;
const percentEl = document.getElementById('loader-percent');
const preloader = document.getElementById('preloader');

const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
            preloader.classList.add('hidden');
            initParticles();
            initStars();
            AOS.init({ duration: 800, once: true });
            initTyped();
            initTilt();
        }, 300);
    }
    percentEl.textContent = Math.floor(progress) + '%';
}, 100);

// ============================================
// 2. ЧАСТИЦЫ
// ============================================
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

// ============================================
// 3. ЗВЁЗДЫ (МЕРЦАЮЩИЕ ТОЧКИ)
// ============================================
function initStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    const starCount = 120; // Количество звёзд
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Случайная позиция
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Случайный размер (1-3px)
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Случайная задержка мерцания (0-3s)
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Случайная длительность мерцания (2-5s)
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // 15% звёзд — яркие
        if (Math.random() < 0.15) {
            star.classList.add('bright');
        }
        
        starsContainer.appendChild(star);
    }
}

// ============================================
// 4. ПЕЧАТНАЯ МАШИНКА
// ============================================
function initTyped() {
    new Typed('#typed-text', {
        strings: ['The-Ray588', 'Web Developer', 'Artist', 'Student'],
        typeSpeed: 80, backSpeed: 50, loop: true, backDelay: 2000
    });
}

// ============================================
// 5. 3D-КАРТОЧКА (Vanilla Tilt)
// ============================================
function initTilt() {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
        max: 15, speed: 400, glare: true, "max-glare": 0.3,
    });
}

// ============================================
// 6. КАСТОМНЫЙ КУРСОР
// ============================================
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.custom-cursor-follower');
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
    });
});

// ============================================
// 7. ПРОГРЕСС СКРОЛЛА
// ============================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});

// ============================================
// 8. КНОПКА НАВЕРХ
// ============================================
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// 9. ШАПКА ПРИ СКРОЛЛЕ
// ============================================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// ============================================
// 10. ПЛАВНЫЙ СКРОЛЛ
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================
// 11. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
// ============================================
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

// ============================================
// 12. БУРГЕР-МЕНЮ
// ============================================
const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = burger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// ============================================
// 13. ФИЛЬТР ПРОЕКТОВ
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// ============================================
// 14. ГЕНЕРАТОР МУЗЫКИ + ГРОМКОСТЬ
// ============================================
const musicBtn = document.getElementById('music-toggle');
const musicIcon = musicBtn.querySelector('i');
const volumeSlider = document.getElementById('volume-slider');

let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let schedulerTimer = null;
let nextNoteTime = 0;
let currentStep = 0;
let currentVolume = 0.3;

const PENTATONIC = [
    130.81, 146.83, 164.81, 196.00, 220.00,
    261.63, 293.66, 329.63, 392.00, 440.00,
    523.25, 587.33, 659.25, 783.99, 880.00
];

const NOTE_LENGTH = 0.5;
const SCHEDULE_AHEAD = 0.1;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = currentVolume;
        masterGain.connect(audioCtx.destination);
    }
}

function playNote(freq, time, duration) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(time);
    osc.stop(time + duration);
}

function playChord(time) {
    const rootIndex = Math.floor(Math.random() * PENTATONIC.length);
    const root = PENTATONIC[rootIndex];
    const intervals = [0, 4, 7, 12];
    intervals.forEach((semitone, i) => {
        if (rootIndex + semitone < PENTATONIC.length) {
            const freq = root * Math.pow(2, i * 0.1);
            playNote(freq, time + i * 0.02, 2.5 + Math.random() * 1.5);
        }
    });
}

function scheduler() {
    while (nextNoteTime < audioCtx.currentTime + SCHEDULE_AHEAD) {
        if (currentStep % 4 === 0) {
            playChord(nextNoteTime);
        } else {
            const freq = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)];
            playNote(freq, nextNoteTime, 0.8 + Math.random() * 0.5);
        }
        nextNoteTime += NOTE_LENGTH;
        currentStep++;
    }
    schedulerTimer = setTimeout(scheduler, 25);
}

function startMusic() {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    isPlaying = true;
    nextNoteTime = audioCtx.currentTime;
    scheduler();
    musicIcon.classList.replace('fa-play', 'fa-pause');
    musicBtn.classList.add('playing');
}

function stopMusic() {
    isPlaying = false;
    clearTimeout(schedulerTimer);
    musicIcon.classList.replace('fa-pause', 'fa-play');
    musicBtn.classList.remove('playing');
    if (audioCtx) audioCtx.suspend();
}

musicBtn.addEventListener('click', () => {
    if (isPlaying) stopMusic();
    else startMusic();
});

volumeSlider.addEventListener('input', (e) => {
    currentVolume = e.target.value / 100;
    if (masterGain) {
        masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
    }
});

// ============================================
// 15. БЕЙДЖИК С ВЕРЁВКОЙ (ФИЗИКА МАЯТНИКА)
// ============================================
const badgeCard = document.getElementById('badge-card');

if (badgeCard) {
    let angle = 0;
    let velocity = 0;
    let targetAngle = 0;
    const gravity = 0.4;
    const damping = 0.92;
    
    let mouseX = 0;
    let isHovering = false;
    
    badgeCard.addEventListener('mousemove', (e) => {
        const rect = badgeCard.getBoundingClientRect();
        const relativeX = (e.clientX - rect.left) / rect.width;
        mouseX = (relativeX - 0.5) * 2;
        isHovering = true;
        targetAngle = mouseX * 15;
    });
    
    badgeCard.addEventListener('mouseleave', () => {
        isHovering = false;
        targetAngle = 0;
    });
    
    function animateBadge() {
        if (!isHovering) targetAngle = 0;
        
        const acceleration = (targetAngle - angle) * gravity * 0.1;
        velocity += acceleration;
        velocity *= damping;
        angle += velocity;
        
        badgeCard.style.transform = `rotate(${angle}deg)`;
        
        const string = document.querySelector('.badge-string');
        const clip = document.querySelector('.badge-clip');
        if (string) string.style.transform = `rotate(${angle * 0.3}deg)`;
        if (clip) clip.style.transform = `rotate(${angle * 0.5}deg)`;
        
        requestAnimationFrame(animateBadge);
    }
    
    animateBadge();
    
    // Звук при клике
    function playClickSound() {
        let ctx = window._clickAudioCtx;
        if (!ctx) {
            ctx = new (window.AudioContext || window.webkitAudioContext)();
            window._clickAudioCtx = ctx;
        }
        if (ctx.state === 'suspended') ctx.resume();
        
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00];
        const freq = notes[Math.floor(Math.random() * notes.length)];
        const now = ctx.currentTime;
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
        
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 2, now);
        gain2.gain.setValueAtTime(0, now);
        gain2.gain.linearRampToValueAtTime(0.05, now + 0.01);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now);
        osc2.stop(now + 0.3);
    }
    
    badgeCard.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') return;
        playClickSound();
        velocity += (Math.random() > 0.5 ? 1 : -1) * 8;
        badgeCard.classList.remove('shake');
        void badgeCard.offsetWidth;
        badgeCard.classList.add('shake');
        setTimeout(() => {
            badgeCard.classList.remove('shake');
        }, 700);
    });
}

// ============================================
// 16. МУЛЬТИЯЗЫЧНОСТЬ
// ============================================
const langToggle = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');
let currentLang = 'ru';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    langLabel.textContent = currentLang.toUpperCase();
    
    document.querySelectorAll('[data-ru][data-en]').forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = el.getAttribute(`data-${currentLang}`);
        } else {
            el.innerHTML = el.getAttribute(`data-${currentLang}`);
        }
    });
});
