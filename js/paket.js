// Data Paket Bibit
const paketData = [
    {
        id: 1,
        nama: "Paket Trial",
        harga: "Rp 50.000",
        deskripsi: "Untuk 100 bibit",
        kategori: "pemula",
        fitur: [
            "1 Varietas cabai pilihan",
            "Bibit usia 18 hari",
            "Panduan dasar budidaya",
            "Konsultasi via WhatsApp 2 minggu"
        ]
    },
    {
        id: 2,
        nama: "Paket Petani Pemula",
        harga: "Rp 150.000",
        deskripsi: "Untuk 500 bibit",
        kategori: "pemula",
        fitur: [
            "3 Varietas cabai pilihan",
            "Bibit usia 21 hari siap tanam",
            "Panduan budidaya lengkap",
            "Konsultasi via WhatsApp 1 bulan",
            "Bonus benih cabai rawit 1 paket"
        ]
    },
    {
        id: 3,
        nama: "Paket Petani Menengah",
        harga: "Rp 250.000",
        deskripsi: "Untuk 1000 bibit",
        kategori: "menengah",
        fitur: [
            "4 Varietas cabai unggulan",
            "Bibit usia 23 hari siap tanam",
            "Panduan budidaya lengkap + video",
            "Konsultasi via WhatsApp 2 bulan",
            "Bonus benih cabai rawit 2 paket"
        ]
    },
    {
        id: 4,
        nama: "Paket Petani Professional",
        harga: "Rp 450.000",
        deskripsi: "Untuk 2000 bibit",
        kategori: "menengah",
        fitur: [
            "5 Varietas cabai unggulan",
            "Bibit usia 25 hari siap tanam",
            "Panduan budidaya lengkap + video",
            "Konsultasi langsung dengan ahli 3 bulan",
            "Bonus pupuk organik 5 kg",
            "Garansi bibit tumbuh 95%"
        ]
    },
    {
        id: 5,
        nama: "Paket Kemitraan Kecil",
        harga: "Rp 800.000",
        deskripsi: "Untuk 5000 bibit",
        kategori: "besar",
        fitur: [
            "6 Varietas cabai lengkap",
            "Bibit usia 25 hari siap tanam",
            "Panduan budidaya lengkap + video",
            "Konsultasi langsung dengan ahli 6 bulan",
            "Bonus pupuk organik 10 kg",
            "Garansi bibit tumbuh 95%",
            "Akses ke grup petani premium"
        ]
    },
    {
        id: 6,
        nama: "Paket Kemitraan Menengah",
        harga: "Rp 1.500.000",
        deskripsi: "Untuk 10.000 bibit",
        kategori: "besar",
        fitur: [
            "Semua varietas cabai kami",
            "Bibit usia 25 hari siap tanam",
            "Panduan budidaya lengkap + video",
            "Konsultasi langsung dengan ahli 12 bulan",
            "Bonus pupuk organik 20 kg + pestisida organik",
            "Garansi bibit tumbuh 96%",
            "Akses ke grup petani premium",
            "Kunjungan lapangan oleh ahli"
        ]
    },
    {
        id: 7,
        nama: "Paket Kemitraan Besar",
        harga: "Rp 3.000.000",
        deskripsi: "Untuk 25.000 bibit",
        kategori: "besar",
        fitur: [
            "Semua varietas cabai kami + varietas baru",
            "Bibit usia 25 hari siap tanam",
            "Panduan budidaya lengkap + video",
            "Konsultasi langsung dengan ahli 12 bulan",
            "Bonus pupuk organik 50 kg + pestisida organik",
            "Garansi bibit tumbuh 97%",
            "Akses ke grup petani premium",
            "Kunjungan lapangan rutin oleh ahli",
            "Analisis tanah gratis",
            "Kesepakatan harga jual panen"
        ]
    }
];

// Fungsi untuk menampilkan paket bibit
function renderPaket(filter = "all") {
    const container = document.getElementById('allPaketContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const paketToShow = filter === "all" 
        ? paketData 
        : paketData.filter(paket => paket.kategori === filter);
    
    const colors = ["#2e7d32", "#1b5e20", "#ff9800", "#ff5722", "#4caf50", "#388e3c", "#f57c00"];
    
    paketToShow.forEach((paket, index) => {
        const paketCard = document.createElement('div');
        paketCard.className = 'paket-card fade-in';
        paketCard.style.animationDelay = `${0.1 * index}s`;
        
        const fiturList = paket.fitur.map(item => 
            `<li><i class="fas fa-check"></i> ${item}</li>`
        ).join('');
        
        paketCard.innerHTML = `
            <div class="paket-header" style="background-color: ${colors[index % colors.length]}">
                <h3>${paket.nama}</h3>
                <div class="harga">${paket.harga}</div>
                <p>${paket.deskripsi}</p>
            </div>
            <div class="paket-body">
                <ul>
                    ${fiturList}
                </ul>
                <a href="https://wa.me/628984338479?text=Halo%20BibitCabai,%20saya%20ingin%20pesan%20${encodeURIComponent(paket.nama)}" class="btn" target="_blank" style="width: 100%; text-align: center;">Pesan via WhatsApp</a>
            </div>
        `;
        
        container.appendChild(paketCard);
    });
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter paket
            const filter = this.getAttribute('data-filter');
            renderPaket(filter);
        });
    });
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderPaket();
    setupFilterButtons();
});