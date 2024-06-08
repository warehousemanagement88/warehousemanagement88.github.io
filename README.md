# 📈 StockSynergy - Solusi Manajemen Persediaan Terintegrasi 📈

Selamat datang di **StockSynergy**! Aplikasi web ini dirancang untuk membantu Anda mengelola persediaan dengan efisien dan efektif. StockSynergy menggabungkan backend yang kuat dengan Golang, frontend dinamis menggunakan HTML dan JavaScript, serta database yang dapat diskalakan dengan MongoDB. Untuk meningkatkan fungsionalitas dan efisiensi, kami juga mengintegrasikan Google Cloud Functions.

## ✨ Fitur Utama

- **Manajemen Persediaan**: Kelola stok barang dengan mudah, termasuk menambah, mengedit, dan menghapus item.
- **Analisis Data**: Dapatkan laporan dan analisis mengenai persediaan untuk membantu pengambilan keputusan.
- **Notifikasi Stok Rendah**: Terima notifikasi ketika stok barang mendekati batas minimum.
- **Integrasi Cloud**: Manfaatkan Google Cloud Functions untuk meningkatkan kinerja dan skalabilitas sistem.

## 🛠️ Teknologi yang Digunakan

- **Backend**: Golang
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB
- **Hosting**: Google Cloud
- **Cloud Functions**: Google Cloud Functions

## 🚀 Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi StockSynergy di lokal Anda:

### Backend

1. **Clone Repository**

   ```bash
   git clone https://github.com/username/stocksynergy.git
   ```

2. **Masuk ke Direktori Proyek**

git clone folder backend 'https://github.com/warehousemanagement88/be_warehouse.git'

```bash
cd stocksynergy/backend
```

3. **Instalasi Dependensi**

   ```bash
   go mod download
   ```

4. **Konfigurasi Lingkungan**

   - Buat file `.env` dan sesuaikan konfigurasi yang diperlukan

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/stocksynergy
   PORT=8080
   ```

5. **Menjalankan Server**
   ```bash
   go run main.go
   ```

### Frontend

1. **Masuk ke Direktori Frontend**

   ```bash
   cd ../frontend
   ```

2. **Buka file `index.html` di browser Anda**

### Google Cloud Functions

1. **Deploy Functions**
   - Buat fungsi cloud di Google Cloud dan deploy dengan mengikuti dokumentasi Google Cloud Functions.

## 🌐 Cara Menggunakan

1. **Beranda**: Pada halaman beranda, Anda akan melihat daftar barang persediaan dan status stok mereka.
2. **Manajemen Persediaan**: Tambahkan, edit, atau hapus barang persediaan melalui antarmuka pengguna.
3. **Analisis Data**: Akses laporan dan analisis untuk mendapatkan wawasan tentang persediaan Anda.

## 🎉 Terima Kasih!

Terima kasih telah menggunakan StockSynergy! Kami berharap aplikasi ini dapat membantu Anda mengelola persediaan dengan lebih mudah dan efisien.
