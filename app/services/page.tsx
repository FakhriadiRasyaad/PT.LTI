"use client";

import Link from "next/link";
import { Bot, Cpu, Cog, Wrench, Activity, HeartPulse, Code2, Database, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)", margin: "16px 0 0",
};

export default function ServicesPage() {
  const { lang } = useLanguage();
  const { servicesTranslations: s } = useCms();

  const cats = [
    {
      id: "robotics",
      label: s.cat_robotics_label[lang],
      Icon: Bot,
      headline: s.cat_robotics_headline[lang],
      intro: s.cat_robotics_intro[lang],
      bg: "#FFFFFF",
      svcs: [
        { Icon: Cpu,   title: s.svc_robot_assembly_title[lang],    desc: s.svc_robot_assembly_desc[lang] },
        { Icon: Cog,   title: s.svc_robot_material_title[lang],    desc: s.svc_robot_material_desc[lang] },
        { Icon: Wrench,title: s.svc_robot_welding_title[lang],     desc: s.svc_robot_welding_desc[lang] },
        { Icon: Bot,   title: s.svc_robot_integration_title[lang], desc: s.svc_robot_integration_desc[lang] },
      ],
    },
    {
      id: "biomedic",
      label: s.cat_biomedic_label[lang],
      Icon: HeartPulse,
      headline: s.cat_biomedic_headline[lang],
      intro: s.cat_biomedic_intro[lang],
      bg: "#F5F4F1",
      svcs: [
        { Icon: Activity,   title: s.svc_bio_fetal_title[lang],  desc: s.svc_bio_fetal_desc[lang] },
        { Icon: HeartPulse, title: s.svc_bio_vital_title[lang],  desc: s.svc_bio_vital_desc[lang] },
        { Icon: Cog,        title: s.svc_bio_drowsy_title[lang], desc: s.svc_bio_drowsy_desc[lang] },
        { Icon: Wrench,     title: s.svc_bio_calib_title[lang],  desc: s.svc_bio_calib_desc[lang] },
      ],
    },
    {
      id: "software",
      label: s.cat_software_label[lang],
      Icon: Code2,
      headline: s.cat_software_headline[lang],
      intro: s.cat_software_intro[lang],
      bg: "#FFFFFF",
      svcs: [
        { Icon: Database,   title: s.svc_sw_finance_title[lang],    desc: s.svc_sw_finance_desc[lang] },
        { Icon: Smartphone, title: s.svc_sw_monitoring_title[lang], desc: s.svc_sw_monitoring_desc[lang] },
        { Icon: Code2,      title: s.svc_sw_custom_title[lang],     desc: s.svc_sw_custom_desc[lang] },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 400, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{s.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,72px)", lineHeight: 1.1, marginBottom: 16 }}>
            {s.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
            {s.hero_sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {cats.map(c => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="tab-link-gold"
                style={{
                  display: "inline-block",
                  padding: "10px 22px",
                  fontFamily: ff.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {cats.map((cat) => (
        <section key={cat.id} id={cat.id} className="section-pad" style={{ background: cat.bg }}>
          <div className="page-container">
            <div className="grid-2-asym" style={{ marginBottom: 12 }}>
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

            {/* Button row */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
              <Link
                href={`/services/${cat.id}`}
                className="btn-outline-dark"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 28px",
                  textDecoration: "none",
                  fontFamily: ff.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                }}
              >
                {s.more_btn[lang]}
                <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
              </Link>
            </div>

            <div className="grid-3" style={{ gap: 20 }}>
              {cat.svcs.map((svc, i) => (
                <div key={i} style={{ padding: "32px 28px", background: "#FFFFFF", border: "1px solid #E2DDD5" }}>
                  <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <svc.Icon size={18} color="#C9A84C" />
                  </div>
                  <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{svc.title}</h4>
                  <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            {s.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            {s.cta_sub[lang]}
          </p>
          <Link
            href="/contact"
            className="btn-solid-gold"
            style={{
              display: "inline-block",
              padding: "15px 40px",
              textDecoration: "none",
              fontFamily: ff.sans,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            {s.cta_btn[lang]}
          </Link>
        </div>
      </section>
    </div>
  );
}