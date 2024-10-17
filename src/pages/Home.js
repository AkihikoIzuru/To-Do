import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage-container">
      <h1 className="h1-home">Selamat Datang di Website zeroTask</h1>
      <p className="p-home">
        Website zeroTask ini dirancang untuk membantu anda mengatur dan
        melacak tugas tugas harian anda dengan lebih mudah dan efisien
      </p>
      <section className="features-section">
        <h2>Mengapa Menggunakan Website ini?</h2>
        <ul className="ul-homepage">
          <li>
            <strong>Mudah Digunakan</strong> Dapat menambah, mengedit,
            menghapus, dan mencoret tugas yang sudah selesai dengan cepat.
          </li>
          <li>
            <strong>Organisasi Lebih Baik</strong> Membantu mengelola tugas
            harian/mingguan untuk meningkatkan produktivitas.
          </li>
          <li>
            <strong>Ringan untuk Dijalankan</strong> Dikarenakan zeroTask ini
            berbasis website jadi sangat ringan untuk dijalankan di semua
            perangkat apapun.
          </li>
        </ul>
      </section>
      <section className="cta-section">
        <h2>Mulailah Mengelola Tugas Anda Sekarang!</h2>
        <Link to="/todos">
          <button className="todos-button">Lihat Daftar Tugas</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
