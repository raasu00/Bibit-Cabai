// Fungsi untuk toggle menu mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
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
        
        // Tutup menu saat klik di luar menu
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            }
        });
        
        // Cegah event bubbling
        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Fungsi untuk menambahkan tombol Pesan Sekarang di menu mobile
function addMobileOrderButton() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;
    
    // Cek apakah tombol sudah ada
    const existingBtn = navMenu.querySelector('.mobile-order-btn');
    if (existingBtn) return;
    
    // Buat tombol Pesan Sekarang
    const orderBtn = document.createElement('a');
    orderBtn.href = 'https://wa.me/628984338479?text=Halo%20BibitCabai,%20saya%20ingin%20pesan%20bibit%20cabai';
    orderBtn.target = '_blank';
    orderBtn.className = 'mobile-order-btn';
    orderBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Pesan Sekarang';
    
    // Tambahkan tombol ke menu
    navMenu.appendChild(orderBtn);
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
    addMobileOrderButton();
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