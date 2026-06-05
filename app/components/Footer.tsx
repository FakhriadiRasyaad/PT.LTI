"use client";

import Link from "next/link";
import { 
  Mail, Phone, MapPin, 
  Home, Info, Settings, Briefcase, PhoneCall,
  Bot, HeartPulse, Activity, Code2, Smartphone, Cpu,
  Shield, FileText
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

const S = {
  serif: { fontFamily: "var(--font-cormorant), 'Poppins', sans-serif" },
  sans: { fontFamily: "var(--font-jost), 'Poppins', sans-serif" },
};

export default function Footer() {
  const { lang } = useLanguage();
  const f = t.footer;
  const n = t.nav;

  const quickLinks = [
    { href: "/",          label: t.nav.home[lang],      Icon: Home },
    { href: "/about",     label: t.nav.about[lang],     Icon: Info },
    { href: "/services",  label: t.nav.services[lang],  Icon: Settings },
    { href: "/portfolio", label: t.nav.portfolio[lang], Icon: Briefcase },
    { href: "/contact",   label: t.nav.contact[lang],   Icon: PhoneCall },
  ];

  const solutions = [
    { label: lang === "id" ? "Robotika Industri"   : "Industrial Robotics",   Icon: Bot },
    { label: lang === "id" ? "Perangkat Medis"     : "Medical Devices",        Icon: HeartPulse },
    { label: lang === "id" ? "Peralatan Bedah"     : "Surgical Equipment",     Icon: Activity },
    { label: lang === "id" ? "Software Enterprise" : "Enterprise Software",    Icon: Code2 },
    { label: lang === "id" ? "Web & Mobile"        : "Web & Mobile Apps",      Icon: Smartphone },
    { label: lang === "id" ? "Integrasi Sistem"    : "System Integration",     Icon: Cpu },
  ];

  return (
    <footer style={{ background: "#1A2744", color: "#FFFFFF" }}>
      <div style={{ height: "2px", background: "linear-gradient(to right, #9B7A2E, #C9A84C, #E8D5A3)" }} />

      <div className="page-container" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ ...S.serif, fontSize: "22px", fontWeight: 600, letterSpacing: "3px", color: "#FFFFFF" }}>PT. LTI</div>
              <div style={{ ...S.sans, fontSize: "8px", fontWeight: 500, letterSpacing: "5px", textTransform: "uppercase", color: "#C9A84C", marginTop: "3px" }}>PT. Lestari Teknologi Inovasi</div>
            </div>
            <p style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "24px" }}>
              {f.tagline[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              {f.quickLinks[lang]}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link-hover"
                    style={{
                      ...S.sans,
                      fontSize: "12px",
                      textDecoration: "none",
                      letterSpacing: "0.5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <link.Icon size={13} color="#C9A84C" style={{ flexShrink: 0 }} />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              {f.ourSolutions[lang]}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {solutions.map(s => (
                <li key={s.label} style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <s.Icon size={13} color="#C9A84C" style={{ flexShrink: 0 }} />{s.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              {f.contact[lang]}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={13} color="#C9A84C" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
                Jl. Cikoneng, Lengkong, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40287
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Phone size={13} color="#C9A84C" />
                <a href="tel:+62222345678" style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                  +62 811-8089-1901
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Mail size={13} color="#C9A84C" />
                <a href="mailto:contact@lti.company" style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                contact@lti.company
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "56px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "1px" }}>
            © {new Date().getFullYear()} PT. Lestari Teknologi Inovasi. {f.copyright[lang]}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href="/privacy-policy"
              style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s ease" }}
              className="footer-link-hover"
            >
              <Shield size={11} />
              {f.privacyPolicy[lang]}
            </Link>
            <Link
              href="/terms-of-service"
              style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s ease" }}
              className="footer-link-hover"
            >
              <FileText size={11} />
              {f.termsOfService[lang]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
