import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans: "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};

const projects = [
  {
    cat: "Software",
    client: "Yayasan Ahmad",
    cp: "CP: Dimas",
    year: "2026",
    accent: "#1A2744",
    title: "Sistem Manajemen Keuangan Yayasan",
    desc: "Pengembangan platform manajemen keuangan khusus untuk Yayasan Ahmad dalam program Makan Bergizi Gratis (MBG). Sistem mencakup pencatatan transaksi harian, manajemen anggaran, laporan keuangan otomatis, dan audit trail yang transparan untuk keperluan pertanggungjawaban.",
    tags: ["Sistem Keuangan", "Web Application", "Yayasan MBG"],
    result: "Pengelolaan keuangan lebih terstruktur dan transparan",
  },
  {
    cat: "Software",
    client: "Yayasan Panam",
    cp: "CP: Farhan Zamril",
    year: "2026",
    accent: "#2C3E6B",
    title: "Sistem Manajemen Keuangan Yayasan",
    desc: "Implementasi sistem keuangan serupa untuk Yayasan Panam—disesuaikan dengan struktur organisasi dan alur pelaporan internal yayasan. Platform memungkinkan pengurus mengakses laporan keuangan real-time dan menghasilkan dokumen pelaporan yang siap audit.",
    tags: ["Sistem Keuangan", "Web Application", "Yayasan MBG"],
    result: "Pelaporan keuangan lebih cepat dan akurat",
  },
];

export default function PortfolioPage() {
  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 400, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "160px 48px 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>Proyek Kami</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,72px)", lineHeight: 1.1, marginBottom: 16 }}>
            Portofolio & Proyek
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, maxWidth: 560 }}>
            Setiap proyek adalah cerminan komitmen kami terhadap kualitas, ketepatan waktu, dan kepuasan klien.
          </p>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderBottom: "1px solid #E2DDD5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {[
            { num: "2", lbl: "Proyek Selesai" },
            { num: "100%", lbl: "Kepuasan Klien" },
            { num: "2026", lbl: "Tahun Pertama" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "36px 0", textAlign: "center", borderRight: i < 2 ? "1px solid #E2DDD5" : "none" }}>
              <div style={{ fontFamily: ff.serif, fontSize: 40, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
              <div style={{ ...lbl, color: "#6B6B6B", marginTop: 6 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 48px 96px" }}>
        <div style={{ marginBottom: 40 }}>
          <span style={lbl}>Proyek Terpilih</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid #E2DDD5", background: "#FFFFFF" }}>
              <div style={{ height: 4, background: `linear-gradient(to right,${p.accent},#C9A84C)` }} />
              <div style={{ padding: "36px 36px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Top */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E8D5A3", padding: "3px 10px", display: "inline-block", marginBottom: 8 }}>
                      {p.cat}
                    </span>
                    <div style={{ fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#6B6B6B" }}>
                      {p.client}
                    </div>
                    <div style={{ fontFamily: ff.sans, fontSize: 11, color: "#C9A84C", marginTop: 3 }}>
                      {p.cp}
                    </div>
                  </div>
                  <span style={{ fontFamily: ff.sans, fontSize: 12, color: "#AAAAAA", fontWeight: 500 }}>{p.year}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", lineHeight: 1.3, marginBottom: 16 }}>
                  {p.title}
                </h3>

                {/* Desc */}
                <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85, flex: 1, marginBottom: 20 }}>
                  {p.desc}
                </p>

                {/* Result highlight */}
                <div style={{ background: "#F5F4F1", borderLeft: "3px solid #C9A84C", padding: "12px 16px", marginBottom: 20 }}>
                  <div style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", marginBottom: 4 }}>Hasil</div>
                  <div style={{ fontFamily: ff.sans, fontSize: 12, color: "#2D2D2D", fontWeight: 500 }}>{p.result}</div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: ff.sans, fontSize: 9, letterSpacing: 0.5, padding: "3px 8px", background: "#F5F4F1", color: "#6B6B6B" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state — coming soon */}
        <div style={{ marginTop: 32, border: "1px dashed #E2DDD5", padding: "48px 36px", textAlign: "center" }}>
          <div style={{ fontFamily: ff.serif, fontSize: 20, color: "#C9A84C", marginBottom: 8 }}>Proyek Berikutnya</div>
          <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#AAAAAA", lineHeight: 1.7 }}>
            Kami sedang mengerjakan beberapa proyek baru di bidang robotika dan biomedis. Pantau terus halaman ini.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", background: "#F5F4F1", borderTop: "1px solid #E2DDD5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 14 }}>
            Jadilah Klien Berikutnya
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 32 }}>
            Diskusikan kebutuhan Anda bersama tim PT. LTI dan temukan solusi yang tepat untuk bisnis Anda.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 40px", background: "#1A2744", color: "#FFFFFF", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
            Mulai Diskusi <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}