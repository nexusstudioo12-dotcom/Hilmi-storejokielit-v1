import { openWhatsApp } from "./whatsapp.js";

// Global Window Function to easily close from HTML onclick
window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

export function initModals() {
    // Tutup modal jika klik background (overlay)
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // 1. Logika Pemilihan Paket Joki Kontak
    let selectedPaket = null;
    let selectedHarga = null;
    const packageCards = document.querySelectorAll('#packageSelection .package-card');
    
    packageCards.forEach(card => {
        card.addEventListener('click', () => {
            // Hapus class active dari semua card
            packageCards.forEach(c => c.classList.remove('active'));
            // Tambahkan active ke card yg diklik
            card.classList.add('active');
            
            // Simpan data
            selectedPaket = card.getAttribute('data-paket');
            selectedHarga = card.getAttribute('data-harga');
        });
    });

    // 2. Logika Submit Joki Kontak
    const btnSubmitJoki = document.getElementById('btnSubmitJoki');
    if (btnSubmitJoki) {
        btnSubmitJoki.addEventListener('click', () => {
            const nama = document.getElementById('jokiNama').value.trim();
            let wa = document.getElementById('jokiWa').value.trim();

            if (!selectedPaket) return alert('Silakan pilih paket Joki Kontak terlebih dahulu.');
            if (!nama) return alert('Silakan masukkan nama Anda.');
            if (!wa) return alert('Silakan masukkan nomor WhatsApp Anda.');

            // Bersihkan nomor dari spasi atau strip jika ada user yg iseng masukin
            wa = wa.replace(/[^0-9]/g, '');

            const message = `Halo Admin HILMI STORE, saya ingin memesan layanan JOKI KONTAK.\n\n*Detail Pesanan:*\n- Paket: ${selectedPaket} (Rp ${selectedHarga})\n- Nama: ${nama}\n- No WA: +62${wa}\n\nMohon info pembayaran / QRIS nya ya min. Terima kasih.`;
            
            openWhatsApp(message);
        });
    }

    // 3. Logika Submit Jasa Lainnya
    const btnSubmitJasa = document.getElementById('btnSubmitJasa');
    if (btnSubmitJasa) {
        btnSubmitJasa.addEventListener('click', () => {
            const message = `Halo Admin HILMI STORE, saya ingin melihat/memesan layanan JASA ELIT (Suntik Sosmed, Nokos, Web, dll) yang tersedia. Bisa dibantu?`;
            openWhatsApp(message);
        });
    }
}
