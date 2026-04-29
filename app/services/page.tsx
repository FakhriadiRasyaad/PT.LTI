import Link from "next/link";
import { Bot, Cpu, Cog, Wrench, Activity, HeartPulse, Code2, Database, Smartphone } from "lucide-react";

const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans: "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)", margin: "16px 0 0",
};

const cats = [
  {
    id: "robotics",
    label: "Robotika Industri",
    Icon: Bot,
    headline: "Arm Robot Industri",
    intro: "Kami merancang dan mengintegrasikan arm robot presisi tinggi untuk kebutuhan otomasi manufaktur, perakitan, dan penanganan material. Solusi kami dioptimalkan untuk meningkatkan efisiensi lini produksi secara signifikan.",
    bg: "#FFFFFF",
    svcs: [
      { Icon: Cpu, title: "Arm Robot Perakitan", desc: "Robot lengan presisi untuk lini perakitan produk elektronik, otomotif, dan barang konsumsi. Akurasi tinggi, kecepatan konsisten." },
      { Icon: Cog, title: "Arm Robot Penanganan Material", desc: "Sistem pemindahan dan penyortiran material otomatis menggunakan arm robot yang terintegrasi dengan conveyor dan sistem gudang." },
      { Icon: Wrench, title: "Arm Robot Las & Fabrikasi", desc: "Arm robot untuk pengelasan, pemotongan, dan fabrikasi logam dengan keseragaman hasil yang tidak bisa dicapai secara manual." },
      { Icon: Bot, title: "Integrasi & Pemeliharaan", desc: "Layanan instalasi, commissioning, pelatihan operator, dan kontrak pemeliharaan preventif untuk memastikan uptime maksimal." },
    ],
  },
  {
    id: "biomedic",
    label: "Perangkat Biomedis",
    Icon: HeartPulse,
    headline: "Hardware Monitoring & Deteksi",
    intro: "Dua produk biomedis utama PT. LTI dirancang untuk menjawab kebutuhan kritis: keselamatan ibu hamil melalui monitoring janin, dan keselamatan pengemudi melalui deteksi kantuk berbasis sensor fisiologis.",
    bg: "#F5F4F1",
    svcs: [
      { Icon: Activity, title: "Monitoring Detak Jantung Janin", desc: "Perangkat hardware portabel untuk memantau detak jantung janin secara real-time. Dirancang untuk kemudahan penggunaan di klinik maupun rumah." },
      { Icon: HeartPulse, title: "Deteksi Sinyal Vital Ibu Hamil", desc: "Sensor yang merekam parameter fisiologis ibu hamil secara bersamaan dengan data janin, memberikan gambaran komprehensif kondisi kehamilan." },
      { Icon: Cog, title: "Deteksi Kantuk Pengemudi", desc: "Hardware berbasis sensor fisiologis yang mendeteksi tanda-tanda kantuk pada pengemudi dan memberikan peringatan dini untuk mencegah kecelakaan." },
      { Icon: Wrench, title: "Integrasi & Kalibrasi", desc: "Layanan integrasi perangkat biomedis dengan sistem informasi klinis, kalibrasi berkala, dan dukungan teknis purna jual." },
    ],
  },
  {
    id: "software",
    label: "Perangkat Lunak",
    Icon: Code2,
    headline: "Software Enterprise & Monitoring",
    intro: "Tim software PT. LTI mengembangkan solusi digital yang terintegrasi erat dengan kebutuhan operasional klien—mulai dari manajemen keuangan yayasan hingga platform monitoring kesehatan yang terhubung dengan perangkat biomedis kami.",
    bg: "#FFFFFF",
    svcs: [
      { Icon: Database, title: "Sistem Keuangan Yayasan MBG", desc: "Platform manajemen keuangan yang dirancang khusus untuk kebutuhan yayasan Makan Bergizi Gratis: pencatatan transaksi, laporan keuangan, dan audit trail yang transparan." },
      { Icon: Smartphone, title: "Software Monitoring Janin", desc: "Aplikasi yang terintegrasi dengan hardware monitoring janin PT. LTI—menampilkan data real-time, riwayat rekaman, dan notifikasi kondisi kritis kepada tenaga medis." },
      { Icon: Code2, title: "Pengembangan Aplikasi Custom", desc: "Pengembangan web dan mobile application sesuai kebutuhan spesifik klien, dengan arsitektur yang skalabel dan antarmuka yang intuitif." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 400, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "160px 48px 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>Layanan Kami</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,72px)", lineHeight: 1.1, marginBottom: 16 }}>
            Solusi & Layanan
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
            Tiga divisi spesialis. Satu komitmen terhadap keunggulan dan dampak nyata.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {cats.map(c => (
              <a key={c.id} href={`#${c.id}`} style={{ display: "inline-block", padding: "10px 22px", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.75)", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {cats.map((cat) => (
        <section key={cat.id} id={cat.id} style={{ padding: "96px 48px", background: cat.bg }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 64, marginBottom: 52, alignItems: "start" }}>
              <div>
                <div style={{ width: 64, height: 64, border: "1px solid #E2DDD5", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <cat.Icon size={30} color="#C9A84C" />
                </div>
                <div style={lbl}>{cat.label}</div>
                <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15, margin: "10px 0 0" }}>
                  {cat.headline}
                </h2>
                <div style={goldLine} />
              </div>
              <div style={{ paddingTop: 8 }}>
                <p style={{ fontFamily: ff.sans, fontSize: 15, color: "#6B6B6B", lineHeight: 1.85 }}>{cat.intro}</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${cat.svcs.length === 3 ? 3 : cat.svcs.length === 4 ? 2 : 3},1fr)`, gap: 20 }}>
              {cat.svcs.map((s, i) => (
                <div key={i} style={{ padding: "32px 28px", background: "#FFFFFF", border: "1px solid #E2DDD5" }}>
                  <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <s.Icon size={18} color="#C9A84C" />
                  </div>
                  <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{s.title}</h4>
                  <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "80px 48px", background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            Belum Yakin Solusi Mana yang Tepat?
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            Tim konsultan kami siap membantu mengidentifikasi kebutuhan dan merekomendasikan solusi terbaik—tanpa biaya.
          </p>
          <Link href="/contact" style={{ display: "inline-block", padding: "15px 40px", background: "#C9A84C", color: "#1A2744", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}