"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const { portfolioTranslations: p } = useCms();

  const projects = [
    {
      cat: "Software",
      client: "Yayasan Ahmad",
      cp: "CP: Dimas",
      year: "2026",
      accent: "#1A2744",
      title: p.p1_title[lang],
      desc: p.p1_desc[lang],
      tags: p.p1_tags[lang],
      result: p.p1_result[lang],
    },
    {
      cat: "Software",
      client: "Yayasan Panam",
      cp: "CP: Farhan Zamril",
      year: "2026",
      accent: "#2C3E6B",
      title: p.p2_title[lang],
      desc: p.p2_desc[lang],
      tags: p.p2_tags[lang],
      result: p.p2_result[lang],
    },
  ];

  return (
    <div style={{ fontFamily: ff.sans, color: "#2D2D2D", background: "#FEFEFE" }}>

      {/* HERO */}
      <section style={{ minHeight: 400, display: "flex", alignItems: "flex-end", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ height: 1, width: 48, background: "#C9A84C" }} />
            <span style={lbl}>{p.hero_label[lang]}</span>
          </div>
          <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.1, marginBottom: 16 }}>
            {p.hero_title[lang]}
          </h1>
          <p style={{ fontFamily: ff.sans, fontSize: 15, color: "rgba(255,255,255,0.62)", lineHeight: 1.8, maxWidth: 560 }}>
            {p.hero_sub[lang]}
          </p>
        </div>
      </section>

      {/* STATS */}
      <div style={{ borderBottom: "1px solid #E2DDD5" }}>
        <div className="page-container grid-stats">
          {[
            { num: "2",    lbl: p.stat_done[lang] },
            { num: "100%", lbl: p.stat_satisfy[lang] },
            { num: "2026", lbl: p.stat_year[lang] },
          ].map((s, i) => (
            <div key={i} style={{ padding: "36px 0", textAlign: "center", borderRight: i < 2 ? "1px solid #E2DDD5" : "none" }}>
              <div style={{ fontFamily: ff.serif, fontSize: 40, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
              <div style={{ ...lbl, color: "#6B6B6B", marginTop: 6 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section className="section-pad">
        <div className="page-container">
          <div style={{ marginBottom: 40 }}>
            <span style={lbl}>{p.selected[lang]}</span>
          </div>

          <div className="grid-proj">
            {projects.map((proj, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid #E2DDD5", background: "#FFFFFF" }}>
                <div style={{ height: 4, background: `linear-gradient(to right,${proj.accent},#C9A84C)` }} />
                <div style={{ padding: "36px 36px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 12 }}>
                    <div>
                      <span style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase", color: "#C9A84C", border: "1px solid #E8D5A3", padding: "3px 10px", display: "inline-block", marginBottom: 8 }}>
                        {proj.cat}
                      </span>
                      <div style={{ fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#6B6B6B" }}>
                        {proj.client}
                      </div>
                      <div style={{ fontFamily: ff.sans, fontSize: 11, color: "#C9A84C", marginTop: 3 }}>
                        {proj.cp}
                      </div>
                    </div>
                    <span style={{ fontFamily: ff.sans, fontSize: 12, color: "#AAAAAA", fontWeight: 500, whiteSpace: "nowrap" }}>{proj.year}</span>
                  </div>

                  <h3 style={{ fontFamily: ff.serif, fontSize: 22, fontWeight: 600, color: "#1A2744", lineHeight: 1.3, marginBottom: 16 }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.85, flex: 1, marginBottom: 20 }}>
                    {proj.desc}
                  </p>

                  <div style={{ background: "#F5F4F1", borderLeft: "3px solid #C9A84C", padding: "12px 16px", marginBottom: 20 }}>
                    <div style={{ fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C9A84C", marginBottom: 4 }}>{p.result_label[lang]}</div>
                    <div style={{ fontFamily: ff.sans, fontSize: 12, color: "#2D2D2D", fontWeight: 500 }}>{proj.result}</div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {(proj.tags as string[]).map((tag: string) => (
                      <span key={tag} style={{ fontFamily: ff.sans, fontSize: 9, letterSpacing: 0.5, padding: "3px 8px", background: "#F5F4F1", color: "#6B6B6B" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, border: "1px dashed #E2DDD5", padding: "48px 36px", textAlign: "center" }}>
            <div style={{ fontFamily: ff.serif, fontSize: 20, color: "#C9A84C", marginBottom: 8 }}>{p.next_title[lang]}</div>
            <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#AAAAAA", lineHeight: 1.7 }}>
              {p.next_sub[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm" style={{ background: "#F5F4F1", borderTop: "1px solid #E2DDD5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(26px,3.5vw,46px)", marginBottom: 14 }}>
            {p.cta_title[lang]}
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 14, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 32 }}>
            {p.cta_sub[lang]}
          </p>
          <Link href="/contact" className="btn-solid-navy" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 40px", textDecoration: "none", fontFamily: ff.sans, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
            {p.cta_btn[lang]} <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}