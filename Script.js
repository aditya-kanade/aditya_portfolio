// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: ['#ff007a', '#00ffcc', '#00b7eb'] },
        shape: { type: 'polygon', polygon: { nb_sides: 5 } },
        opacity: { value: 0.6, random: true },
        size: { value: 6, random: true },
        line_linked: {
            enable: true,
            distance: 120,
            color: '#ff007a',
            opacity: 0.5,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 8,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: true
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 150, line_linked: { opacity: 0.7 } },
            push: { particles_nb: 5 }
        }
    },
    retina_detect: true
});

// Smooth Scroll
document.querySelectorAll('.navbar-item').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Scroll Effects
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1.03)';
            entry.target.style.opacity = '1';
            entry.target.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.5)';
        } else {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '0.9';
            entry.target.style.boxShadow = 'none';
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => {
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Mouse Trail Effect
const trail = document.createElement('div');
trail.className = 'trail';
document.body.appendChild(trail);

document.addEventListener('mousemove', (e) => {
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    trail.style.opacity = '1';
    setTimeout(() => {
        trail.style.opacity = '0';
    }, 200);
});

const style = document.createElement('style');
style.textContent = `
    .trail {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #ff007a;
        border-radius: 50%;
        pointer-events: none;
        transition: opacity 0.3s ease;
        box-shadow: 0 0 15px #ff007a;
        z-index: 1000;
    }
`;
document.head.appendChild(style);
