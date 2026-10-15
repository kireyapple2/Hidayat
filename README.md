# Website Company Profile - CV. ZAKIA JAYA BERKAH 🏗️

Website profil perusahaan statis, ultra-ringan, modern, cepat, dan 100% responsif (optimal untuk HP/smartphone dan Laptop/PC) untuk **CV. ZAKIA JAYA BERKAH**.

Dibuat menggunakan **HTML5 semantik + Tailwind CSS murni + Vanilla JS** tanpa dependensi framework rumit, sehingga bebas dari error build dan siap dideploy langsung ke **Cloudflare Pages**.

---

## 🏢 Profil Perusahaan
- **Nama Perusahaan:** CV. ZAKIA JAYA BERKAH
- **Bidang Usaha:** Kontraktor Spesialis Konstruksi Jalan, Bangunan Gedung, dan Infrastruktur Sipil
- **Pemilik (Founder / Owner):** Hidayatullah Mawardi
- **Direktur (Director):** Ayu Putri Zakia

---

## ⚡ Fitur Utama Website
1. **Performa Tinggi & Ringan**: Ukuran bundle CSS minified hanya ~30KB (Gzip ~6KB), waktu muat sub-detik.
2. **Mobile First & Responsive**: Tampilan sangat rapi di layar smartphone (HP), tablet, hingga monitor resolusi tinggi.
3. **Menu Navigasi Mobile Responsif**: Hamburger menu yang halus, ramah sentuhan, dan otomatis tertutup saat link diklik.
4. **Tombol Cepat WhatsApp Melayang (Floating WA Widget)**: Memudahkan calon klien langsung terhubung dengan admin/marketing via WhatsApp dengan teks pesan otomatis.
5. **Formulir Permintaan Penawaran & Survey**: Langsung memformat data pemesan dan membuka obrolan WhatsApp resmi.
6. **Filter Portofolio Proyek**: Pengunjung dapat memfilter pekerjaan (Semua, Konstruksi Jalan, Bangunan Gedung, Infrastruktur & Drainase).
7. **Accordion Tanya Jawab (FAQ)**: Penjelasan legalitas, prosedur tender pemerintah/swasta, dan garansi pemeliharaan proyek.
8. **Cloudflare Pages Ready**: Dilengkapi file `_headers` dengan caching otomatis dan header keamanan.

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Buka Langsung (Tanpa Server)
Bisa langsung klik dua kali file `index.html` di komputer Anda, atau buka via browser apapun (Google Chrome, Firefox, Edge).

### 2. Jalankan Mode Development (Live Edit CSS)
Jika ingin mengubah styling atau menambah class Tailwind:
```bash
npm run dev:css
```

### 3. Build untuk Produksi
Untuk mengompilasi CSS minified dan menghasilkan folder `dist/`:
```bash
npm run build
```
Folder `dist/` akan otomatis berisi semua file siap deploy.

---

## 🌐 Panduan Deploy ke Cloudflare Pages

### Opsi A: Melalui Git (Rekomendasi)
1. Push proyek ini ke repository GitHub atau GitLab Anda.
2. Masuk ke dashboard [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Pilih repository proyek ini.
4. Pada bagian **Build settings**:
   - **Framework preset:** `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Klik **Save and Deploy**. Website Anda akan aktif dalam hitungan detik!

### Opsi B: Direct Upload (Drag & Drop Folder)
1. Jalankan `npm run build` di komputer lokal.
2. Masuk ke dashboard Cloudflare Pages > **Upload assets**.
3. Beri nama project (misal: `cv-zakia-jaya-berkah`).
4. Tarik dan lepas (drag & drop) seluruh isi folder `dist/`.
5. Selesai! Website langsung aktif dengan domain `.pages.dev`.

---

## 📞 Cara Mengubah Nomor WhatsApp & Kontak
- **Nomor WhatsApp**: Buka file [js/main.js](js/main.js) baris `waNumber = '6281234567890'` dan file [index.html](index.html) bagian floating WA, lalu ganti dengan nomor WhatsApp aktif perusahaan Anda (gunakan format kode negara tanpa tanda `+`, contoh: `628xxxxxxxxxx`).
- **Email & Alamat**: Edit langsung teks di bagian `#kontak` pada [index.html](index.html).
