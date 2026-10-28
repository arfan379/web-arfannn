# Website Portofolio — Arfan Indra Kurniawan

Website portofolio profesional untuk **Arfan Indra Kurniawan** (AI Developer · Data Engineer · Data Analysis), dibangun dengan modern web stack: **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

---

## 🌐 Akses Publik (Online)

Website saat ini aktif dan dapat langsung diakses publik oleh siapa saja (recruiter, klien, kolaborator):

🔗 **[https://rocks-informed-toilet-engage.trycloudflare.com](https://rocks-informed-toilet-engage.trycloudflare.com)**

---

## 🚀 Fitur Utama

1. **Halaman 1 — Profil**:
   - Hero section dengan foto profil profesional HD (`arfan.webp`), nama besar dengan gradient text, dan subjudul profesi.
   - Tombol kontak langsung (Lokasi Klaten, Telepon `tel:`, Email `mailto:`, LinkedIn).
   - Tombol Call-to-Action: *"Lihat Proyek"* dan *"Hubungi Saya"*.
   - Ringkasan profil lengkap tentang AI & Data Engineering.

2. **Halaman 2 — Work Experience**:
   - Timeline vertikal elegan dengan logo perusahaan.
   - **Frontier Group** (Data Engineer, Juli 2026 – Sekarang): ETL/ELT pipeline, LLM data labelling, skema data, optimasi.
   - **CV Karya Hidup Sentosa** (Internship AI & Data Engineer, Mei 2025 – Mei 2026) dikelompokkan ke dalam 4 kategori dengan interaksi accordion:
     - *Computer Vision & AI*
     - *Data Engineering & Analytics*
     - *Web Development & Database*
     - *Deployment & Kolaborasi*

3. **Halaman 3 — Proyek Pribadi**:
   - Kartu proyek interaktif dengan badge teknologi dan link GitHub.
   - Fitur **filter chip** dinamis (Filter berdasarkan teknologi seperti Python, FastAPI, PostgreSQL, Docker, Kafka, dll).
   - Rute dinamis ke halaman detail proyek (`/projects/:slug`).
   - 4 Proyek unggulan: *Simulasi Quantum Finance*, *MAGMA-IQ*, *SIAGA-API*, dan *ITMA*.

4. **Halaman 4 — Proyek Akademik**:
   - Berjudul *"Proyek Akademik — SMK Negeri 2 Klaten (2022–2026)"*.
   - 4 proyek akademik dengan deskripsi dan link langsung (Google Colab, LinkedIn, GitHub).

5. **Halaman 5 — Tools yang Dikuasai**:
   - Grid badge interaktif dengan hover animation.
   - Dikelompokkan ke dalam 6 kategori: *Bahasa & Analisis*, *Database & Storage*, *Data Engineering & BI*, *Container & Infrastruktur*, *AI / ML*, dan *Platform*.

6. **Fitur Lintas Halaman**:
   - Sticky navbar dengan indikator aktif animasi spring dan menu hamburger responsif untuk mobile.
   - Toggle **Dark Mode & Light Mode** dengan animasi rotasi ikon dan penyimpanan preferensi di `localStorage`.
   - Animasi transisi halaman halus (*fade & slide*) dan scroll reveal via Framer Motion.
   - SEO tags lengkap (Title, Meta Description, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`).
   - Aksesibilitas WCAG AA & dukungan `prefers-reduced-motion`.

---

## 🛠️ Cara Mengubah Konten

Semua konten (profil, pengalaman, proyek, tools) terpusat dalam **satu file data**:
👉 [src/data/data.ts](file:///home/admindata/Documents/cobaaa/web-arfan/src/data/data.ts)

Cukup edit data di file tersebut tanpa perlu mengubah komponen UI.

---

## 💻 Menjalankan Secara Lokal

```bash
# Masuk ke folder proyek
cd /home/admindata/Documents/cobaaa/web-arfan

# Jalankan development server
npm run dev

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```

---

## 🚢 Panduan Deploy Permanen ke Vercel / Netlify

1. Push repository ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Arfan portfolio website"
   git remote add origin https://github.com/<username>/portfolio-arfan.git
   git push -u origin main
   ```
2. Hubungkan repository ke [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
3. Pengaturan build otomatis:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy selesai! Website akan mendapatkan custom domain gratis dari Vercel/Netlify dengan sertifikat SSL otomatis.
