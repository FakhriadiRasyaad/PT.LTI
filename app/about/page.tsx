"use client";

import { Shield, Target, Eye, Award, Users, TrendingUp } from "lucide-react";
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

export default function AboutPage() {
  const { lang } = useLanguage();
  const a = t.about;

  const milestones = a.milestones[lang];

  const team = [
    {
      initial: "A",
      photo: "/team-a.jpg",
      name: "Fakhriadi Rasyaad",
      role: "Chief Executive Officer",
      desc: a.ceo_desc[lang],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 380, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{a.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(32px,5vw,68px)", lineHeight: 1.1 }}>
            {a.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.6)", marginTop: 14, maxWidth: 520, lineHeight: 1.75 }}>
            {a.hero_sub[lang]}
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-pad page-container">
        <div className="grid-2">
          {/* Vision */}
          <div style={{ padding: "48px 40px", border: "1px solid #E2DDD5", background: "#FEFEFE" }}>
            <div style={{ width: 48, height: 48, background: "#1A2744", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <Eye size={20} color="#C9A84C" />
            </div>
            <div style={lbl}>{a.vision_label[lang]}</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.2, margin: "12px 0 16px" }}>
              {a.vision_title[lang]}
            </h2>
            <div style={{ ...goldLine, marginBottom: 20 }} />
            <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85 }}>
              {a.vision_body[lang]}
            </p>
          </div>

          {/* Mission */}
          <div style={{ padding: "48px 40px", background: "#1A2744" }}>
            <div style={{ width: 48, height: 48, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <Target size={20} color="#C9A84C" />
            </div>
            <div style={{ ...lbl, color: "#C9A84C" }}>{a.mission_label[lang]}</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.2, margin: "12px 0 16px" }}>
              {a.mission_title[lang]}
            </h2>
            <div style={{ ...goldLine, marginBottom: 24 }} />
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {a.mission_points[lang].map((point, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  <div style={{ width: 6, height: 6, background: "#C9A84C", marginTop: 7, flexShrink: 0 }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={lbl}>Core Values</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 20px" }}>
              {lang === "id" ? "Nilai yang Kami Pegang" : "Values We Hold"}
            </h2>
            <div style={{ ...goldLine, margin: "0 auto" }} />
          </div>
          <div className="grid-4">
            {[
              { Icon: Shield,    title: a.val_integrity[lang],  desc: a.val_integrity_desc[lang] },
              { Icon: Award,     title: a.val_excellence[lang], desc: a.val_excellence_desc[lang] },
              { Icon: Users,     title: a.val_partnership[lang],desc: a.val_partnership_desc[lang] },
              { Icon: TrendingUp,title: a.val_innovation[lang], desc: a.val_innovation_desc[lang] },
            ].map((v, i) => (
              <div key={i} style={{ background: "#FFFFFF", padding: "36px 28px", border: "1px solid #E2DDD5", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, border: "1px solid #E2DDD5", background: "#FEFEFE", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <v.Icon size={20} color="#C9A84C" />
                </div>
                <h3 style={{ fontFamily: ff.serif, fontSize: 18, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-pad page-container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={lbl}>{a.timeline_label[lang]}</div>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 20px" }}>
            {a.timeline_title[lang]}
          </h2>
          <div style={{ ...goldLine, margin: "0 auto" }} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "#E2DDD5" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{ width: 40, height: 40, background: i === 1 ? "#1A2744" : "#FFFFFF", border: i === 1 ? "none" : "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
                    <div style={{ width: 8, height: 8, background: "#C9A84C", borderRadius: i === 1 ? 0 : "50%" }} />
                  </div>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ ...lbl, marginBottom: 8 }}>{m.year}</div>
                  <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.85 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: "#F5F4F1" }}>
        <div className="page-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={lbl}>{a.team_title[lang]}</div>
            <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 0" }}>
              {lang === "id" ? "Tim Kepemimpinan" : "Leadership Team"}
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {team.map((p, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid #E2DDD5", maxWidth: 280, textAlign: "center", overflow: "hidden" }}>
                <div style={{ height: 3, background: "linear-gradient(to right,#9B7A2E,#C9A84C)" }} />
                <div style={{ padding: "40px 32px" }}>
                  <div style={{ width: 72, height: 72, background: "#1A2744", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: ff.serif, fontSize: 28, fontWeight: 600, color: "#C9A84C" }}>
                    {p.initial}
                  </div>
                  <div style={{ fontFamily: ff.serif, fontSize: 18, fontWeight: 600, color: "#1A2744" }}>{p.name}</div>
                  <div style={{ ...lbl, fontSize: 9, marginTop: 6, marginBottom: 16 }}>{p.role}</div>
                  <div style={{ width: 32, height: 1, background: "#C9A84C", margin: "0 auto 16px" }} />
                  <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}