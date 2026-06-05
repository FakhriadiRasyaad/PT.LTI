"use client";

import Link from "next/link";
import {
  Code2, Database, Smartphone, ArrowLeft,
  CheckCircle2, GitMerge, RefreshCw, Lock, BarChart2,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../translations";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: 4,
  textTransform: "uppercase",
  color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
  margin: "16px 0 0",
};

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function SoftwarePage() {
  const { lang } = useLanguage();
  const s = t.software;

  const services = [
    { Icon: Database,   title: s.svc1_title[lang], fullDesc: s.svc1_desc[lang], specs: s.svc1_specs[lang] },
    { Icon: Smartphone, title: s.svc2_title[lang], fullDesc: s.svc2_desc[lang], specs: s.svc2_specs[lang] },
    { Icon: Code2,      title: s.svc3_title[lang], fullDesc: s.svc3_desc[lang], specs: s.svc3_specs[lang] },
  ];

  const advantages = [
    { Icon: GitMerge,  title: s.adv1_title[lang], desc: s.adv1_desc[lang] },
    { Icon: RefreshCw, title: s.adv2_title[lang], desc: s.adv2_desc[lang] },
    { Icon: Lock,      title: s.adv3_title[lang], desc: s.adv3_desc[lang] },
    { Icon: BarChart2, title: s.adv4_title[lang], desc: s.adv4_desc[lang] },
  ];

  const catalogue = [
    { Icon: Code2, tag: s.cat1_tag[lang], name: s.cat1_name[lang], desc: s.cat1_desc[lang], highlights: s.cat1_highlights[lang], wa: s.cat1_wa[lang] },
    { Icon: Code2, tag: s.cat2_tag[lang], name: s.cat2_name[lang], desc: s.cat2_desc[lang], highlights: s.cat2_highlights[lang], wa: s.cat2_wa[lang] },
    { Icon: Code2, tag: s.cat3_tag[lang], name: s.cat3_name[lang], desc: s.cat3_desc[lang], highlights: s.cat3_highlights[lang], wa: s.cat3_wa[lang] },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: 520, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#111D38 0%,#1A2744 55%,#22305A 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <Code2 size={440} color="#C9A84C" style={{ position: "absolute", right: -60, bottom: -80, opacity: 0.04, pointerEvents: "none" }} />

        <div className="hero-inner page-container" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/services" className="breadcrumb-link-hover" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: ff.sans, fontSize: 11, letterSpacing: 1.5, textDecoration: "none", marginBottom: 32, textTransform: "uppercase" }}>
            <ArrowLeft size={12} /> {s.breadcrumb[lang]}
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{s.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(42px,5vw,76px)", lineHeight: 1.05, marginBottom: 20 }}>
            Software Enterprise
            <br />& Monitoring
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, maxWidth: 560, marginBottom: 40 }}>
            {s.hero_sub[lang]}
          </p>
          <a href="#services" className="tab-link-gold" style={{ display: "inline-block", padding: "14px 36px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
            {s.hero_cta[lang]}
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{s.section_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {s.section_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-3">
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "36px 32px", border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svc.Icon size={20} color="#C9A84C" />
                </div>
                <div>
                  <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{svc.fullDesc}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 8, borderTop: "1px solid #E2DDD5", marginTop: "auto" }}>
                  {svc.specs.map((spec, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <CheckCircle2 size={12} color="#C9A84C" />
                      <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOGUE ── */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div style={{ marginBottom: 56 }}>
            <span style={lbl}>{s.catalogue_label[lang]}</span>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.1, margin: "10px 0 0" }}>
              {s.catalogue_title[lang]}
            </h2>
            <div style={goldLine} />
          </div>
          <div className="grid-3">
            {catalogue.map((item, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 48, height: 48, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <item.Icon size={20} color="#C9A84C" />
                    </div>
                    <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E2DDD5", padding: "4px 10px" }}>
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: ff.serif, fontSize: 20, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{item.name}</h3>
                    <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, paddingTop: 14, borderTop: "1px solid #E2DDD5" }}>
                    {item.highlights.map((h, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <CheckCircle2 size={12} color="#C9A84C" />
                        <span style={{ fontFamily: ff.sans, fontSize: 11, color: "#555" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/6281180891901?text=${encodeURIComponent(item.wa)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid-navy"
                    style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "13px 20px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}
                  >
                    {WA_ICON}
                    {s.wa_btn[lang]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LTI ── */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="page-container">
          <div className="grid-2-asym" style={{ marginBottom: 52 }}>
            <div>
              <span style={lbl}>{s.why_label[lang]}</span>
              <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15, margin: "10px 0 0" }}>
                {s.why_title[lang]}
              </h2>
              <div style={goldLine} />
            </div>
            <p style={{ fontFamily: ff.sans, fontSize: 15, color: "#6B6B6B", lineHeight: 1.85, paddingTop: 8 }}>
              {s.why_sub[lang]}
            </p>
          </div>
          <div className="grid-4">
            {advantages.map((adv, i) => (
              <div key={i} style={{ padding: "28px 24px", background: "#FEFEFE", border: "1px solid #E2DDD5" }}>
                <div style={{ width: 40, height: 40, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <adv.Icon size={17} color="#C9A84C" />
                </div>
                <h4 style={{ fontFamily: ff.serif, fontSize: 16, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{adv.title}</h4>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad-sm" style={{ background: "#1A2744" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(28px,3.5vw,46px)", marginBottom: 16 }}>
            {s.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
            {s.cta_sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" className="btn-solid-gold" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {s.cta_btn1[lang]}
            </Link>
            <Link href="/services" className="btn-outline-light" style={{ display: "inline-block", padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase" }}>
              {s.cta_btn2[lang]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}