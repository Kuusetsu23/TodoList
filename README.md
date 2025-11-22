# Todo API – CI Pipeline Project

Project ini adalah implementasi sederhana API Todo menggunakan **Node.js + Express**, dilengkapi dengan **Continuous Integration (CI) Pipeline** menggunakan **GitHub Actions**.  
Dibuat sebagai bagian dari tugas **Team Base Project (TBP)** untuk menerapkan konsep *linting*, *unit testing*, dan *automated pipeline*.

---

## Fitur Utama

### 🗂 CRUD Todo
- **GET** `/todos` – Mendapatkan semua todo
- **POST** `/todos` – Menambah todo baru
- **PUT** `/todos/:id` – Mengupdate todo
- **DELETE** `/todos/:id` – Menghapus todo

### Unit Test (Jest)
- Tes untuk GET
- Tes untuk POST
- Tes untuk PUT
- Tes untuk DELETE

### Linter (ESLint)
- Mengecek kualitas kode
- Menghindari error seperti `no-unused-vars` dan `no-undef`

### CI Pipeline (GitHub Actions)
Pipeline berjalan otomatis ketika ada push ke branch **main**, dan akan menjalankan:
1. Install dependencies  
2. ESLint linting  
3. Unit testing  

---

## Struktur Project

todo-api/
│── app.js
│── server.js
│── package.json
│── eslint.config.js
│── .gitignore
│── tests/
│     └── todo.test.js
│── .github/
      └── workflows/
            └── ci.yml

---

## ▶ Cara Menjalankan Project

### 1. Install dependencies
npm install

### 2. Jalankan server
npm start

Server berjalan di:
http://localhost:3000

---

## Menjalankan Unit Test (Jest)

npm test

Output yang diharapkan:

PASS tests/todo.test.js
✓ GET /todos
✓ POST /todos
✓ PUT /todos/:id
✓ DELETE /todos/:id

---

## Menjalankan ESLint

npm run lint

---

## CI Pipeline (GitHub Actions)

File pipeline berada pada:

.github/workflows/ci.yml

Pipeline berjalan otomatis setiap ada perubahan pada branch **main**.

Isi pipeline:
(name: CI Pipeline ...)

---

## Contoh Screenshot Pipeline  
(Ganti gambar ini dengan screenshot asli milikmu)

---

## Teknologi yang Digunakan
- Node.js
- Express.js
- Jest
- Supertest
- ESLint
- GitHub Actions (CI/CD)

---

## Tujuan Pengerjaan
- Menerapkan konsep Continuous Integration
- Menggunakan linting dan testing otomatis
- Membuat pipeline yang berjalan ketika terjadi push ke main
- Melatih workflow DevOps pada project backend

---
