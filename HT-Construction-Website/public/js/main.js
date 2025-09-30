// public/js/main.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation bar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(30, 58, 138, 0.15)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(30, 58, 138, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    // Add initial opacity to animated elements
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Mobile menu toggle (if needed in future)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        });
    }

    // Add current year to footer
    const yearElement = document.querySelector('#current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Contact buttons functionality
function makeCall() {
    window.location.href = 'tel:02108255118';
}

function sendEmail() {
    window.location.href = 'mailto:pu@htltd.co.nz';
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});