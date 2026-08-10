"use client";

import { Shield, Lock, Eye, Bell, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";
import EditableText from "../components/EditableText";

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


export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const { privacyTranslations: p, isCmsMode, isLoggedIn, setActiveEditKey } = useCms();

  const sections = [
    { Icon: Eye,       titleKey: "s1_title" as const, contentKey: "s1" as const, title: p.s1_title[lang], content: p.s1[lang] },
    { Icon: Lock,      titleKey: "s2_title" as const, contentKey: "s2" as const, title: p.s2_title[lang], content: p.s2[lang] },
    { Icon: Shield,    titleKey: "s3_title" as const, contentKey: "s3" as const, title: p.s3_title[lang], content: p.s3[lang] },
    { Icon: Bell,      titleKey: "s4_title" as const, contentKey: "s4" as const, title: p.s4_title[lang], content: p.s4[lang] },
    { Icon: RefreshCw, titleKey: "s5_title" as const, contentKey: "s5" as const, title: p.s5_title[lang], content: p.s5[lang] },
    { Icon: Mail,      titleKey: "s6_title" as const, contentKey: "s6" as const, title: p.s6_title[lang], content: p.s6[lang] },
  ];

  const cmsActive = isCmsMode && isLoggedIn;

  const handleListClick = (key: string) => {
    if (!cmsActive) return;
    setActiveEditKey(key);
    const el = document.getElementById(`cms-input-${key}-id`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => (el as HTMLElement).focus(), 400);
    }
  };

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 340, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>
              <EditableText fieldKey="hero_label">{p.hero_label[lang]}</EditableText>
            </span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.1 }}>
            <EditableText fieldKey="hero_title">{p.hero_title[lang]}</EditableText>
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            <EditableText fieldKey="updated">{p.updated[lang]}</EditableText>: 1 Mei 2026 &nbsp;·&nbsp; PT. Lestari Teknologi Inovasi
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad-sm">
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ border: "1px solid #E2DDD5", padding: "36px 40px", background: "#FDFBF7", position: "relative" }}>
            <div style={{ ...goldLine, marginBottom: 20 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.9 }}>
              <EditableText fieldKey="intro" inline={false}>{p.intro[lang]}</EditableText>
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="page-container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {sections.map(({ Icon, titleKey, contentKey, title, content }, i) => (
              <div key={i} style={{ border: "1px solid #E2DDD5", padding: "36px 40px", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: 28, background: "#FEFEFE", padding: "0 10px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={13} color="#C9A84C" />
                  <span style={lbl}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", marginBottom: 20 }}>
                  <EditableText fieldKey={titleKey}>{title}</EditableText>
                </h2>
                <ul
                  style={{
                    listStyle: "none", display: "flex", flexDirection: "column", gap: 14,
                    ...(cmsActive ? { cursor: "pointer", outline: "1px dashed rgba(201,168,76,0.4)", borderRadius: 4, padding: "8px" } : {}),
                  }}
                  onClick={() => handleListClick(contentKey)}
                  title={cmsActive ? `Click to edit "${contentKey}"` : undefined}
                >
                  {(Array.isArray(content) ? content : (typeof content === "string" ? content.split("\n") : [])).map((item: string, j: number) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85 }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
                      {item}
                    </li>
                  ))}
                  {cmsActive && (
                    <li style={{ fontSize: 9, color: "#C9A84C", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginTop: 4, opacity: 0.7 }}>
                      ✎ click to edit {contentKey}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div style={{ marginTop: 48, background: "linear-gradient(135deg,#1A2744,#2C3E6B)", padding: "40px", textAlign: "center" }}>
            <div style={{ ...goldLine, margin: "0 auto 20px" }} />
            <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#FFFFFF", marginBottom: 12 }}>
              <EditableText fieldKey="contact_title">{p.contact_title[lang]}</EditableText>
            </h3>
            <p style={{ fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.75 }}>
              <EditableText fieldKey="contact_sub" inline={false}>{p.contact_sub[lang]}</EditableText>
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
