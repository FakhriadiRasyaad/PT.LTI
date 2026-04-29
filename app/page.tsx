import Link from "next/link";
import { ArrowRight, ChevronRight, Star, Cpu, Activity, Code2, Zap } from "lucide-react";

const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans: "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 56, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

export default function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg,#1A2744 0%,#243356 50%,#1A2744 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 280px 280px 0", borderColor: "transparent rgba(201,168,76,0.06) transparent transparent" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "160px 48px 100px", width: "100%" }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
              <span style={lbl}>Inovasi · Presisi · Keunggulan</span>
            </div>
            <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1, fontSize: "clamp(48px,6.5vw,84px)", marginBottom: 28 }}>
              Teknologi untuk{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9A84C" }}>Indonesia</em>{" "}
              yang Lebih Maju.
            </h1>
            <p style={{ fontFamily: ff.sans, fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: 520, marginBottom: 44 }}>
              PT. Lestari Teknologi Inovasi menghadirkan solusi robotika industri, perangkat biomedis, dan perangkat lunak enterprise yang dirancang untuk kebutuhan nyata dunia usaha Indonesia.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: "#C9A84C", color: "#1A2744", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
                Lihat Layanan <ArrowRight size={13} />
              </Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", border: "1px solid rgba(255,255,255,0.4)", color: "#FFFFFF", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase", background: "transparent" }}>
                Hubungi Kami
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(201,168,76,0.25)" }}>
            {[
              { num: "2026", label: "Tahun Berdiri" },
              { num: "3+", label: "Produk Unggulan" },
              { num: "2", label: "Klien Aktif" },
              { num: "100%", label: "Komitmen Kualitas" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "24px 0 24px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontFamily: ff.serif, fontSize: 32, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
                <div style={{ ...lbl, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: "112px 48px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
          <div>
            <div style={lbl}>Tentang PT. LTI</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", lineHeight: 1.15, fontSize: "clamp(32px,4vw,52px)", margin: "12px 0 20px" }}>
              Lahir dari Semangat <em style={{ fontStyle: "italic" }}>Inovasi</em> Lokal
            </h2>
            <div style={{ ...goldLine, marginBottom: 24 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85, marginBottom: 16 }}>
              PT. Lestari Teknologi Inovasi berdiri pada 1 Mei 2026 dengan satu misi: menghadirkan teknologi berkualitas tinggi yang relevan, terjangkau, dan berdampak nyata bagi pelaku usaha dan institusi di Indonesia.
            </p>
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85, marginBottom: 40 }}>
              Kami membangun tiga lini solusi—robotika, biomedis, dan perangkat lunak—dengan tim yang berpengalaman dan berkomitmen terhadap kepuasan klien jangka panjang.
            </p>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#1A2744", textDecoration: "none", borderBottom: "1px solid #C9A84C", paddingBottom: 4 }}>
              Selengkapnya <ChevronRight size={13} />
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ background: "#F5F4F1", aspectRatio: "1", maxWidth: 440, marginLeft: "auto", position: "relative" }}>
              <div style={{ position: "absolute", inset: 32, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", padding: "40px 32px" }}>
                  <div style={{ width: 64, height: 64, margin: "0 auto 20px", background: "#1A2744", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Cpu size={28} color="#C9A84C" />
                  </div>
                  <div style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>Est. 2026</div>
                  <div style={lbl}>Bandung, Indonesia</div>
                  <div style={{ margin: "20px 0 0", paddingTop: 20, borderTop: "1px solid #E2DDD5" }}>
                    <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.7 }}>
                      Berkomitmen menghadirkan teknologi inovatif yang berdampak nyata.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -16, right: -16, width: 120, height: 120, background: "#C9A84C", opacity: 0.15 }} />
            <div style={{ position: "absolute", top: -16, left: -16, width: 72, height: 72, border: "2px solid #C9A84C", opacity: 0.25 }} />
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section style={{ padding: "96px 48px", background: "#F5F4F1" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={lbl}>Yang Kami Tawarkan</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(32px,4vw,50px)", margin: "12px 0 20px" }}>Solusi Utama Kami</h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {[
              { icon: <Cpu size={26} color="#C9A84C" />, title: "Robotika Industri", desc: "Arm robot presisi tinggi untuk otomasi lini produksi, perakitan, dan proses manufaktur kompleks yang membutuhkan akurasi konsisten." },
              { icon: <Activity size={26} color="#C9A84C" />, title: "Perangkat Biomedis", desc: "Hardware monitoring detak jantung janin untuk ibu hamil dan sistem deteksi kantuk berbasis sensor fisiologis untuk keselamatan pengemudi." },
              { icon: <Code2 size={26} color="#C9A84C" />, title: "Perangkat Lunak", desc: "Sistem keuangan untuk yayasan MBG dan software monitoring janin yang terintegrasi dengan perangkat biomedis kami." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#FEFEFE", padding: "40px 36px", border: "1px solid #E2DDD5" }}>
                <div style={{ width: 52, height: 52, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 14 }}>{s.title}</h3>
                <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", textDecoration: "none" }}>
                  Selengkapnya <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "112px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={lbl}>Klien Kami</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(32px,4vw,50px)", margin: "12px 0 20px" }}>Dipercaya Sejak Awal</h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 28, maxWidth: 900, margin: "0 auto" }}>
            {[
              { quote: "PT. LTI hadir dengan solusi software keuangan yang tepat sasaran untuk operasional yayasan kami. Tim mereka responsif dan memahami kebutuhan spesifik sektor nirlaba.", name: "Dimas", title: "Contact Person, Yayasan Ahmad" },
              { quote: "Sistem monitoring yang dikembangkan PT. LTI sangat membantu pengelolaan keuangan yayasan kami. Antarmuka yang bersih dan laporan yang akurat.", name: "Farhan Zamril", title: "Contact Person, Yayasan Panam" },
            ].map((t, i) => (
              <div key={i} style={{ padding: "40px 36px", border: "1px solid #E2DDD5", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 24, fontFamily: ff.serif, fontSize: 80, color: "#EEECE7", lineHeight: 1, userSelect: "none" }}>&ldquo;</div>
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#C9A84C" stroke="none" />)}
                </div>
                <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85, marginBottom: 28, position: "relative", zIndex: 1 }}>{t.quote}</p>
                <div style={{ borderTop: "1px solid #E2DDD5", paddingTop: 20 }}>
                  <div style={{ fontFamily: ff.serif, fontSize: 15, fontWeight: 600, color: "#1A2744" }}>{t.name}</div>
                  <div style={{ fontFamily: ff.sans, fontSize: 10, color: "#C9A84C", letterSpacing: 0.5, marginTop: 4 }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNERaa */}
      <section style={{ padding: "96px 48px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} /><Zap size={16} color="#C9A84C" /><div style={{ height: 1, width: 48, background: "#C9A84C" }} />
          </div>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,4vw,52px)", marginBottom: 20 }}>
            Siap Bertransformasi Bersama{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>PT. LTI</em>?
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40 }}>
            Konsultasi awal bersama tim kami tidak dipungut biaya. Mari diskusikan kebutuhan bisnis Anda.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 40px", background: "#C9A84C", color: "#1A2744", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              Jadwalkan Konsultasi <ArrowRight size={13} />
            </Link>
            <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", padding: "16px 40px", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", textDecoration: "none", background: "transparent", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}