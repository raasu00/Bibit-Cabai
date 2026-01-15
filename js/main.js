// Fungsi untuk toggle menu mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Tutup menu mobile saat klik link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// Fungsi untuk animasi scroll fade-in
function setupScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.animationDelay || '0s';
                entry.target.style.animationDelay = delay;
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        // Set animation to paused initially
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// Fungsi untuk mengaktifkan animasi pada elemen dengan delay berbeda
function animateElementsOnLoad() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.classList.add('fade-in-up');
    if (heroText) {
        heroText.classList.add('fade-in-up');
        heroText.style.animationDelay = '0.2s';
    }
    if (heroButtons) {
        heroButtons.classList.add('fade-in-up');
        heroButtons.style.animationDelay = '0.4s';
    }
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    animateElementsOnLoad();
    setupScrollAnimation();
    
    // Highlight active link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Reset animasi saat kembali ke halaman
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        setupScrollAnimation();
    }
});