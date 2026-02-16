// Langsamer, sichtbarer Slide-In beim Scrollen UND beim Start
const elements = document.querySelectorAll('.fade-in');

function checkFade() {
    const trigger = window.innerHeight * 0.80; 
    // 80% Sichtbarkeit → perfekt für Mobile & PC

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('visible');
        }
    });
}

// Beim Scrollen prüfen
window.addEventListener('scroll', checkFade);

// Beim Laden prüfen (damit der Start-Slide funktioniert)
window.addEventListener('load', checkFade);
