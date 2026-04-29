import { Shield, Target, Eye, Award, Users, TrendingUp } from "lucide-react";

const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans: "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

const milestones = [
  { year: "2025", event: "Ide dan konsep PT. LTI mulai dirumuskan oleh para pendiri dengan fokus pada tiga lini: robotika, biomedis, dan perangkat lunak." },
  { year: "01/05/2026", event: "PT. Lestari Teknologi Inovasi resmi berdiri dan mulai beroperasi dari Bandung, Jawa Barat, Indonesia." },
  { year: "2026", event: "Menyelesaikan dua proyek perdana: sistem keuangan untuk Yayasan Ahmad dan Yayasan Panam. Produk biomedis memasuki fase pengembangan aktif." },
];

const team = [
  {
    initial: "A",
    name: "Anggota A",
    role: "Chief Executive Officer",
    desc: "Pemimpin visioner yang mengarahkan strategi dan pertumbuhan PT. LTI sejak hari pertama berdiri.",
  },
  {
    initial: "B",
    name: "Anggota B",
    role: "Chief Technology Officer",
    desc: "Bertanggung jawab atas arsitektur teknologi, riset produk, dan pengembangan solusi inovatif perusahaan.",
  },
  {
    initial: "C",
    name: "Anggota C",
    role: "Chief Operations Officer",
    desc: "Memastikan setiap proyek berjalan tepat waktu, sesuai standar, dan memberikan nilai terbaik bagi klien.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 380, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "160px 48px 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>Tentang Kami</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(38px,5vw,68px)", lineHeight: 1.1 }}>
            PT. Lestari Teknologi Inovasi
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            Perusahaan teknologi yang lahir dari komitmen untuk menghadirkan inovasi berdampak nyata bagi Indonesia.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={{ padding: "96px 48px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 48 }}>
          {[
            {
              Icon: Eye, label: "Visi Kami",
              title: "Teknologi Lokal, Dampak Global",
              body: "Menjadi perusahaan teknologi Indonesia yang paling dipercaya—menghadirkan solusi robotika, biomedis, dan perangkat lunak yang memberdayakan industri dan meningkatkan kualitas hidup masyarakat.",
              points: null,
            },
            {
              Icon: Target, label: "Misi Kami",
              title: "Berinovasi dengan Integritas",
              body: null,
              points: [
                "Menghadirkan produk berkualitas tinggi yang relevan dengan kebutuhan lokal",
                "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan transparansi",
                "Terus berinvestasi dalam riset, teknologi, dan pengembangan tim",
                "Memberikan dampak positif bagi komunitas dan ekosistem bisnis Indonesia",
              ],
            },
          ].map(({ Icon, label, title, body, points }, i) => (
            <div key={i} style={{ border: "1px solid #E2DDD5", padding: 40, position: "relative" }}>
              <div style={{ position: "absolute", top: -11, left: 28, background: "#FEFEFE", padding: "0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                <Icon size={13} color="#C9A84C" />
                <span style={lbl}>{label}</span>
              </div>
              <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 16, marginTop: 8 }}>{title}</h3>
              <div style={{ ...goldLine, marginBottom: 20 }} />
              {body && <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85 }}>{body}</p>}
              {points && (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {points.map((p, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.7 }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700 }}>—</span>{p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Values */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {[
            { Icon: Shield, title: "Integritas", desc: "Kejujuran dan transparansi dalam setiap komitmen." },
            { Icon: Award, title: "Keunggulan", desc: "Standar tertinggi dalam setiap produk yang kami hadirkan." },
            { Icon: Users, title: "Kemitraan", desc: "Hubungan yang melampaui sekadar transaksi bisnis." },
            { Icon: TrendingUp, title: "Inovasi", desc: "Selalu berkembang, selalu relevan, selalu terdepan." },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} style={{ background: "#F5F4F1", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, margin: "0 auto 20px", border: "1px solid #E2DDD5", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={20} color="#C9A84C" />
              </div>
              <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>{title}</h4>
              <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: "#F5F4F1", padding: "96px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={lbl}>Perjalanan Kami</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,44px)", margin: "12px 0 20px" }}>
              Dari Gagasan Menuju Kenyataan
            </h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>

          {/* Simple vertical timeline for young company */}
          <div style={{ position: "relative", paddingLeft: 40 }}>
            <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 1, background: "#E2DDD5" }} />
            {milestones.map((m, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 36, paddingLeft: 32 }}>
                <div style={{ position: "absolute", left: -20, top: 8, width: 12, height: 12, borderRadius: "50%", background: "#C9A84C", border: "3px solid #F5F4F1", boxShadow: "0 0 0 1px #C9A84C" }} />
                <div style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", padding: "20px 28px" }}>
                  <div style={{ fontFamily: ff.serif, fontSize: 24, fontWeight: 600, color: "#C9A84C", marginBottom: 8 }}>{m.year}</div>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.75 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={lbl}>Tim Kami</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,44px)", margin: "12px 0 20px" }}>
              Para Pendiri
            </h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, maxWidth: 960, margin: "0 auto" }}>
            {team.map((m, i) => (
              <div key={i}>
                <div style={{ aspectRatio: "4/3", background: "#F5F4F1", border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, position: "relative", overflow: "hidden" }}>
                  <span style={{ fontFamily: ff.serif, fontSize: 72, fontWeight: 300, color: "#DDDDD5" }}>{m.initial}</span>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                </div>
                <h3 style={{ fontFamily: ff.serif, fontSize: 17, fontWeight: 600, color: "#1A2744" }}>{m.name}</h3>
                <div style={{ ...lbl, margin: "6px 0 10px" }}>{m.role}</div>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}