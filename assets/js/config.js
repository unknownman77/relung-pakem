/* =========================================================
   KONFIGURASI SITUS — ubah di sini tanpa menyentuh kode lain
   ========================================================= */
window.RELUNG_CONFIG = {
  // Nomor WhatsApp format internasional tanpa "+" / "0" di depan
  whatsapp: "628977121244",

  // OTA (Online Travel Agent)
  // Saat ini DISEMBUNYIKAN karena sedang migrasi vendor.
  // Untuk menampilkan: ubah `enabled` menjadi true, lalu isi `url`
  // dan set `show: true` pada OTA yang ingin ditampilkan.
  ota: {
    enabled: false,
    links: [
      { name: "Airbnb",      url: "", show: false },
      { name: "Booking.com", url: "", show: false },
      { name: "Traveloka",   url: "", show: false },
      { name: "tiket.com",   url: "", show: false },
      { name: "Agoda",       url: "", show: false }
    ]
  }
};
