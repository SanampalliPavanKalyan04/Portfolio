// ================= MOBILE MENU TOGGLE =================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after a link is tapped
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});


// ================= HEADER SHADOW ON SCROLL =================

const siteHeader = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 10);
});


// ================= ACTIVE NAV LINK (SCROLL SPY) =================

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const setActiveLink = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120; // offset for sticky header

    sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
            currentId = section.id;
        }
    });

    navAnchors.forEach((anchor) => {
        anchor.classList.toggle(
            'active',
            anchor.getAttribute('href') === `#${currentId}`
        );
    });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// ================= SECTION REVEAL ON SCROLL =================
// One deliberate, subtle reveal as sections enter view — not per-card.

const revealTargets = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealTargets.forEach((section) => revealObserver.observe(section));


// ================= FOOTER YEAR =================

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
