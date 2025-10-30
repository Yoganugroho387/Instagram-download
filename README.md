🎥 Instagram Video Downloader — by Yogaasz

Website simple dan profesional untuk **download video Instagram** (Reel, Post, atau IGTV) menggunakan API publik dari [api-pay-gold.vercel.app](https://api-pay-gold.vercel.app).
Dibangun menggunakan **HTML + Tailwind CSS + Serverless Function (Node.js)** dan **bisa langsung dideploy di Vercel** 🚀.

---

## ✨ Fitur

* 🧠 Input URL video Instagram
* ⚡ Fetch data video melalui backend proxy (tanpa mengekspos API key)
* 🎮 Preview thumbnail video sebelum download
* ⬇️ Tombol download langsung file `.mp4`
* 🌙 UI dark mode yang elegan (Tailwind CSS)
* 🧱 Deploy mudah di [Vercel](https://vercel.com)

---

## 📁 Struktur Proyek

```
instagram-downloader/
├── index.html              # Halaman utama (frontend)
├── api/
│   └── download.js         # Serverless backend untuk fetch API
├── vercel.json             # Konfigurasi deploy Vercel
└── package.json            # Info proyek Node.js
```

---

## ⚙️ Instalasi & Penggunaan Lokal

### 1️⃣ Clone repository

```bash
git clone https://github.com/Yoganugroho387/Instagram-download.git
cd Instagram-download
```

### 2️⃣ Jalankan secara lokal (opsional)

Jika ingin tes di lokal:

```bash
npm install -g vercel
vercel dev
```

Akses di browser:
➡️ `http://localhost:3000`

---

## 🚀 Deploy ke Vercel

1. Buat akun di [https://vercel.com](https://vercel.com)
2. Import repository GitHub kamu
3. Pastikan file `vercel.json` sudah ada di root folder
4. Klik **Deploy**
5. Tunggu beberapa detik, situs kamu akan tersedia di:
   🔗 `https://instagramdown.vercel.app/` *(contoh URL)*

---

## 🔑 API yang Digunakan

API diambil dari endpoint publik berikut:

```
https://api-pay-gold.vercel.app/download/instagram?apikey=yogaasz&url=<URL_VIDEO>
```

### Contoh Response:

```json
{
  "creator": "Yogaasz",
  "status": true,
  "result": [
    {
      "thumbnail": "https://....jpg",
      "kualitas": "Download Video",
      "url_download": "https://....mp4"
    }
  ]
}
```

---

## 💡 Teknologi yang Digunakan

* **HTML5 + Tailwind CSS** → Tampilan modern & responsif
* **JavaScript (Fetch API)** → Mengambil data dari server
* **Node.js Serverless Function (Vercel)** → Menyembunyikan API key
* **Vercel Hosting** → Deployment instan dan gratis

---

## 🧠 Cara Kerja Singkat

1. User memasukkan URL Instagram ke input form.
2. Frontend memanggil backend `/api/download?url=...`.
3. Backend memanggil API utama `api-pay-gold.vercel.app` menggunakan API key.
4. Server mengembalikan data video ke frontend.
5. Pengguna dapat melihat **thumbnail** dan menekan **Download Video**.

---

## 🧑‍💻 Author

**Yoga Nugroho (Yogaasz)**
🌍 Indonesia
🌐 [https://yogaasz.id](https://yogaasz.id)
📷 Instagram: [@yogaasz.id](https://instagram.com/yogaasz.id)

---

## 📜 Lisensi

Proyek ini dirilis di bawah lisensi **MIT License**.
Bebas digunakan untuk tujuan belajar atau pengembangan pribadi,
asal tetap mencantumkan kredit kepada **Yogaasz** 👌

---

## ❤️ Dukung Proyek Ini

Kalau kamu suka proyek ini, boleh bantu dengan cara:

* ⭐ Memberi bintang di repository ini
* 🔄 Share link deploy ke media sosial
* ☕ Dukung kreator di [yogaasz.id/support](https://yogaasz.id/support)

---

> 🚧 *"Code itu bukan hanya tentang logika, tapi juga tentang rasa dan gaya."* — Yogaasz
