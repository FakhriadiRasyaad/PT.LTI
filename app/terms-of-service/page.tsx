"use client";

import { FileText, Users, AlertTriangle, Ban, Scale, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 48, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

export default function TermsOfServicePage() {
  const { lang } = useLanguage();
  const terms = t.terms;

  const sections = [
    { Icon: Users,         title: terms.s1_title[lang], content: terms.s1[lang] },
    { Icon: FileText,      title: terms.s2_title[lang], content: terms.s2[lang] },
    { Icon: Scale,         title: terms.s3_title[lang], content: terms.s3[lang] },
    { Icon: AlertTriangle, title: terms.s4_title[lang], content: terms.s4[lang] },
    { Icon: Ban,           title: terms.s5_title[lang], content: terms.s5[lang] },
    { Icon: RefreshCw,     title: terms.s6_title[lang], content: terms.s6[lang] },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 340, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{terms.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1 }}>
            {terms.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            {terms.updated[lang]}: 1 Mei 2026 &nbsp;·&nbsp; PT. Lestari Teknologi Inovasi
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad-sm">
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ border: "1px solid #E2DDD5", padding: "36px 40px", background: "#FDFBF7", position: "relative" }}>
            <div style={{ ...goldLine, marginBottom: 20 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.9 }}>
              {terms.intro[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {sections.map(({ Icon, title, content }, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", padding: "36px 40px", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: 28, background: "#FEFEFE", padding: "0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={13} color="#C9A84C" />
                  <span style={lbl}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", marginBottom: 20 }}>
                  {title}
                </h2>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {content.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85 }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div style={{ marginTop: 48, background: "linear-gradient(135deg,#1A2744,#2C3E6B)", padding: "40px", textAlign: "center" }}>
            <div style={{ ...goldLine, margin: "0 auto 20px" }} />
            <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#FFFFFF", marginBottom: 12 }}>
              {terms.contact_title[lang]}
            </h3>
            <p style={{ fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.75 }}>
              {terms.contact_sub[lang]}
            </p>
            <a
              href="mailto:contact@lti.company"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", background: "#C9A84C", color: "#1A2744",
                fontFamily: ff.sans, fontSize: 11, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
              }}
            >
              <Mail size={14} />
              contact@lti.company
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
