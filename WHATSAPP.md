# WhatsApp Integration

- Konfigurasi pusat ada di `js/config.js`.
- Semua logic routing ke WhatsApp ada di `js/whatsapp.js`.
- String wajib di-encode dengan `encodeURIComponent()` untuk menangani spasi dan karakter spesial pada URL `wa.me`.
- Pastikan nomor tujuan dimulai dengan kode negara tanpa simbol "+" (Contoh: `6283848561189`).
