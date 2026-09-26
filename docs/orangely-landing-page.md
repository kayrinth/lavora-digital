# Orangely — Landing Page UI Specification

Orangely adalah landing page untuk digital agency kreatif yang menawarkan layanan UI/UX design, illustration, 3D animation, dan development. Tampilan mengusung gaya minimalis dengan latar off-white hangat, aksen gradasi biru muda dan kuning bertekstur grain, tipografi sans-serif tipis dengan penekanan tebal pada kata kunci, serta banyak ruang kosong.

---

## Design Tokens

### Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `background` | `#FCFAF7` | Latar utama halaman |
| `background-outer` | `#EFEDE9` | Latar di luar kanvas halaman |
| `surface` | `#F5F3F0` | Kartu fitur, kotak statistik |
| `primary` | `#5BC0EB` | Logo, ikon, teks aktif, gradasi |
| `primary-soft` | `#E3F4FC` | Latar lembut, gradasi lembut |
| `secondary` | `#FFD23F` | Aksen pendukung, gradasi |
| `secondary-soft` | `#FFF6D6` | Highlight baris aktif |
| `text-primary` | `#111111` | Heading dan teks utama |
| `text-secondary` | `#6B6B6B` | Paragraf, deskripsi, menu tidak aktif |
| `border` | `#E5E2DD` | Garis pemisah, outline kartu dan pill |
| `button-dark` | `#111111` | Tombol utama |
| `button-text` | `#FFFFFF` | Teks pada tombol utama |

### Gradasi

- **Hero glow**: radial gradient `#5BC0EB` → `#FFD23F` → transparan, diberi efek noise/grain halus.
- **Section glow**: gradasi biru muda dan kuning lembut di sisi kiri/kanan pada banner "Work optimally" dan CTA "Let's talk together now!".

### Tipografi

Font sans-serif geometris (Inter, General Sans, atau sejenisnya).

| Elemen | Ukuran | Weight |
|---|---|---|
| Hero heading | 56–64px | 300, kata kunci 600 |
| Section heading | 36–40px | 300, kata kunci 600 |
| Marquee text | 56–64px | 300 |
| Card title | 20px | 500 |
| Stat number | 28px | 400 |
| Body | 14–16px | 400 |
| Caption / small | 12px | 400 |
| Footer heading | 13px | 600, uppercase |

### Spacing & Radius

| Token | Nilai |
|---|---|
| Container max-width | 1200px |
| Padding horizontal | 80–100px |
| Jarak antar section | 120–160px |
| Radius tombol | 6px |
| Radius kartu | 12px |
| Radius ikon box | 10px |
| Radius pill / lingkaran | 9999px |

---

## Struktur Halaman

1. Navbar
2. Hero
3. Collaboration Structure
4. Services
5. Work Optimally Banner
6. Work Process
7. Marquee "Create Something Awesome"
8. CTA
9. Footer

---

## 1. Navbar

Layout tiga kolom: logo di kiri, menu di tengah, tombol di kanan.

- **Logo**: ikon lingkaran biru muda + teks **Orangely**
- **Menu**:
  - Home (aktif, teks hitam tebal)
  - Work
  - Service (dengan ikon chevron dropdown)
  - About
- **Tombol**: `Contact Us` — latar hitam, teks putih, ukuran kecil

---

## 2. Hero

Latar off-white dengan gradasi biru muda dan kuning bertekstur grain di bagian tengah.

**Kolom kiri**

- Heading:
  > **Connect** with a
  > first touch to
  > ——— awesome

  Garis horizontal tipis berada sebelum kata "awesome".
- Subteks: *Lorem Ipsum is simply dummy text of the printing and typesetting industry*
- Tombol lingkaran hitam dengan ikon panah ke bawah, dikelilingi teks melingkar berputar "get started • get started"
- Ikon sosial media: Instagram, YouTube, Dribbble

**Kolom kanan**

- Kotak statistik (latar `surface`):

  | Angka | Label |
  |---|---|
  | 50M+ | Happy client's |
  | 900+ | Big Project |

- Testimoni, diawali garis horizontal:
  > "Very good performance from the Orangely team. They really prioritize quality with their cooperation. Complete work structure from start to finish"

  **Paul Yayuk Reyhan**
  Ceo of Google

---

## 3. Collaboration Structure

**Header** (dua kolom)

- Kiri: Establish our **collaboration** structure
- Kanan: *We prioritize structured cooperation and aim to create maximum results reaching the point of perfection. There is always complete documentation*

**Kartu fitur**

Satu kontainer besar (latar `surface`, border tipis, radius 12px) berisi empat item sejajar. Setiap item terdiri dari ikon biru muda di dalam kotak putih dan deskripsi di bawahnya, rata tengah.

| Ikon | Deskripsi |
|---|---|
| Hand touch | Provide several touches that make the result perfect |
| Magic wand | Efficient and effective work by prioritizing quality |
| Layers | Complete documentation of every progress |
| Lightning | Fast work and still provides quality results |

---

## 4. Services

- **Heading** (rata tengah): Providing the **best service** for you
- **Carousel horizontal** full-width, kartu dipisahkan garis vertikal tipis, kartu terakhir terpotong di tepi kanan sebagai penanda bisa digeser.

Struktur kartu: gambar (rasio ±1:1) → judul + nomor urut → deskripsi.

| No | Judul | Deskripsi | Gambar |
|---|---|---|---|
| 01 | UI/UX Design | Designing application and website interfaces and dashboards | Tangan memegang smartphone di depan laptop |
| 02 | illustration | Beautiful illustrations using artists who have distinctive characteristics | Tangan menggambar ilustrasi di tablet |
| 03 | 3D Animation | 3D any shape and animate it to make it more alive | Bentuk abstrak 3D bertumpuk warna pastel |
| 04 | Development | Implementation of design into a functional product | Smartphone pada stand di meja kerja |

---

## 5. Work Optimally Banner

Banner full-width dengan foto meja kerja (monitor, laptop, keyboard) dan gradasi biru muda dan kuning di sisi kiri dan kanan.

- **Heading**: Work optimally for satisfaction
- **Subteks**: *Together we prioritize quality integrity*
- **Tombol video**: lingkaran hitam dengan ikon play, dikelilingi teks melingkar berputar "Watching about us"

---

## 6. Work Process

**Kolom kiri**

- **Heading**: How do we work to help you
- **Subteks**: *Clear work structure with definite steps for clarity of good performance*
- **Tombol**: `Contact Us` (hitam)

**Kolom kanan** — daftar langkah dengan garis pemisah antar baris. Setiap baris berisi nomor, judul, dan deskripsi.

| No | Judul | Deskripsi |
|---|---|---|
| 1 | Research | To start the work, we carry out research as needed |
| 2 | Sketching | The design process before execution makes it clearer |
| 3 | Execution | The core stage of all optimal cores |
| 4 | Finishing | Ensure that the final stage produces perfection |

**State hover / aktif**: latar baris berubah menjadi `secondary-soft`, judul berwarna biru muda, dan muncul gambar preview miring (mockup dashboard di layar) di sisi kanan baris.

---

## 7. Marquee "Create Something Awesome"

Dua baris teks besar dengan elemen pill dan lingkaran ber-outline tipis, dibatasi garis horizontal atas dan bawah. Dapat dibuat bergerak sebagai marquee horizontal.

**Baris 1**

`Create` — lingkaran ikon magic wand — `Something`

**Baris 2**

lingkaran ikon sparkle — `awesome` — pill berisi teks kecil — lingkaran ikon clapping hands

Teks pada pill:
> The results must be satisfactory so that a product or brand can be well known

---

## 8. CTA

Section rata tengah dengan gradasi biru muda di kiri dan kuning di kanan.

- **Heading**: Let's talk together now!
- **Tombol**: `Contact Us →` (hitam, dengan ikon panah)

---

## 9. Footer

**Kolom tautan**

| SERVICES | COMPANY | CONNECT |
|---|---|---|
| UI/UX Design | About | Instagram |
| illustration | Press | LinkedIn |
| 3D Design | Careers | Twitter |
| Animation | Contact | |

**Newsletter — STAY UPDATED**

- Input email berbentuk pill dengan placeholder `Email Address..`
- Tombol `Subscribe →` (hitam, pill) di dalam input
- Teks kecil: *You'll receive occasional emails from Orangely. You always have the choice to unsubscribe within every email.*

**Bottom bar** (dipisahkan garis horizontal)

- Kiri:
  - **©2023 Orangely All rights reserved.**
  - *Orangely is a digital agency that prioritizes creative industries that uphold quality so they can create something cool and beyond expectations.*
- Kanan: Terms · Privacy

---

## Komponen

| Komponen | Spesifikasi |
|---|---|
| Primary button | Latar hitam, teks putih 12–13px, padding 8×16px, radius 6px, opsional ikon panah |
| Circular badge | Lingkaran hitam 72–80px, ikon putih di tengah, teks melingkar berputar di sekeliling |
| Icon box | Kotak putih 40px, radius 10px, shadow halus, ikon biru muda outline |
| Feature card | Latar `surface`, border 1px `border`, radius 12px |
| Service card | Gambar di atas, judul + nomor sejajar, deskripsi abu-abu, pemisah garis vertikal |
| Process row | Nomor, judul, deskripsi; garis bawah 1px; state aktif berlatar `secondary-soft` |
| Outline pill / circle | Border 1px `border`, tanpa isi, radius penuh |
| Email input | Pill ber-border, tombol subscribe hitam di dalamnya |

---

## Interaksi

- Menu **Service** membuka dropdown saat di-hover atau diklik.
- Teks melingkar pada tombol "get started" dan "Watching about us" berputar perlahan secara terus-menerus.
- Tombol "get started" melakukan scroll ke section berikutnya.
- Carousel Services dapat digeser secara horizontal.
- Baris Work Process menampilkan highlight dan gambar preview saat di-hover.
- Baris "Create Something Awesome" bergerak sebagai marquee horizontal.
- Seluruh tombol `Contact Us` mengarah ke halaman atau form kontak.
