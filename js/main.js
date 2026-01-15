// main.js - Update untuk menu baru

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

// Highlight active link - Perbarui untuk menu baru
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