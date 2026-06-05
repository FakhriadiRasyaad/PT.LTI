"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, FileText, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

const ff = {
  serif: "var(--font-cormorant), 'Poppins', sans-serif",
  sans: "var(--font-jost), 'Poppins', sans-serif",
};

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

  const nav = t.nav;

  const navLinks = [
    { href: "/",          label: nav.home[lang] },
    { href: "/about",     label: nav.about[lang] },
    { href: "/services",  label: nav.services[lang] },
    { href: "/portfolio", label: nav.portfolio[lang] },
    { href: "/contact",   label: nav.contact[lang] },
  ];

  const serviceSubLinks = [
    { href: "/services/biomedic", label: nav.biomedic[lang],  desc: nav.biomedic_desc[lang] },
    { href: "/services/robotics", label: nav.robotics[lang],  desc: nav.robotics_desc[lang] },
    { href: "/services/software", label: nav.software[lang],  desc: nav.software_desc[lang] },
  ];

  const legalSubLinks = [
    { href: "/privacy-policy",   label: nav.privacyPolicy[lang],   desc: nav.privacyPolicy_desc[lang],   Icon: Shield },
    { href: "/terms-of-service", label: nav.termsOfService[lang],  desc: nav.termsOfService_desc[lang],  Icon: FileText },
  ];

  // Close mobile services submenu when mobile menu is closed
  useEffect(() => {
    if (!mobileOpen) setServicesMobileOpen(false);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navTextColor = scrolled ? "#2D2D2D" : "rgba(255,255,255,0.85)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 #E2DDD5" : "none",
      }}
    >
      {/* Gold top line */}
      <div style={{ height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C,#E8D5A3)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 76,
          }}
        >
          {/* LOGO */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/PT.png"
              alt="PT. LTI Logo"
              style={{ width: 44, height: 44, objectFit: "contain", display: "block" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: ff.serif,
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: 2,
                  color: scrolled ? "#1A2744" : "#FFFFFF",
                  transition: "color 0.4s",
                }}
              >
                PT. LTI
              </span>
              <span
                style={{
                  fontFamily: ff.sans,
                  fontSize: 7,
                  fontWeight: 500,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginTop: 2,
                }}
              >
                Lestari Teknologi Inovasi
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="nav-services-wrap"
                  >
                    {/* Services trigger */}
                    <Link
                      href="/services"
                      className="nav-services-label"
                      style={{
                        fontFamily: ff.sans,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: 2.5,
                        textTransform: "uppercase",
                        color: navTextColor,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        transition: "color 0.3s",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className="nav-services-chevron"
                        style={{
                          transition: "transform 0.25s ease",
                        }}
                      />
                    </Link>

                    {/* Dropdown panel */}
                    <div className="nav-dropdown">
                      {/* Gold accent bar */}
                      <div className="nav-dropdown-gold-bar" />

                      {/* All Services link */}
                      <Link
                        href="/services"
                        className="nav-all-services"
                      >
                        {nav.allServices[lang]}
                      </Link>

                      {/* Sub links */}
                      {serviceSubLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="nav-submenu-item"
                        >
                          <span className="nav-submenu-title">
                            {sub.label}
                          </span>
                          <span className="nav-submenu-desc">
                            {sub.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Normal nav link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: ff.sans,
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    color: navTextColor,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Legal dropdown — inside nav for consistent gap */}
            <div className="nav-services-wrap">
              <button
                className="nav-services-label"
                style={{
                  fontFamily: ff.sans,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: navTextColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                  transition: "color 0.3s",
                }}
              >
                {nav.legal[lang]}
                <ChevronDown
                  size={12}
                  className="nav-services-chevron"
                  style={{ transition: "transform 0.25s ease" }}
                />
              </button>
              <div className="nav-dropdown">
                <div className="nav-dropdown-gold-bar" />
                {legalSubLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="nav-submenu-item"
                  >
                    <span className="nav-submenu-title" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <sub.Icon size={11} color="#C9A84C" />
                      {sub.label}
                    </span>
                    <span className="nav-submenu-desc">{sub.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop right section */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: ff.sans,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: scrolled ? "#1A2744" : "rgba(255,255,255,0.85)",
                background: "none",
                border: scrolled ? "1px solid #E2DDD5" : "1px solid rgba(255,255,255,0.3)",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              <Globe size={12} />
              {lang === "id" ? "EN" : "ID"}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className={`nav-cta-button ${scrolled ? "scrolled" : ""}`}
            >
              {nav.cta[lang]}
            </Link>
          </div>

          {/* Mobile right section */}
          <div className="nav-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Mobile language toggle */}
            <button
              onClick={toggleLang}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: ff.sans,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: scrolled ? "#1A2744" : "#FFFFFF",
                background: "none",
                border: scrolled ? "1px solid #E2DDD5" : "1px solid rgba(255,255,255,0.4)",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              <Globe size={11} />
              {lang === "id" ? "EN" : "ID"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                color: scrolled ? "#2D2D2D" : "#FFFFFF",
                padding: 8,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="nav-mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: mobileOpen ? 600 : 0,
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E2DDD5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <div key={link.href} style={{ display: "flex", flexDirection: "column" }}>
                  <button
                    onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "4px 0",
                      cursor: "pointer",
                      fontFamily: ff.sans,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "#2D2D2D",
                      textAlign: "left",
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      style={{
                        transform: servicesMobileOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        color: "#C9A84C",
                      }}
                    />
                  </button>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: servicesMobileOpen ? 300 : 0,
                      transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      paddingLeft: 12,
                      marginTop: servicesMobileOpen ? 12 : 0,
                      borderLeft: "2px solid #E2DDD5",
                    }}
                  >
                    <Link
                      href="/services"
                      onClick={() => { setMobileOpen(false); setServicesMobileOpen(false); }}
                      style={{
                        fontFamily: ff.sans,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        textDecoration: "none",
                      }}
                    >
                      {nav.allServices[lang]}
                    </Link>
                    {serviceSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => { setMobileOpen(false); setServicesMobileOpen(false); }}
                        style={{
                          fontFamily: ff.sans,
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          color: "#6B6B6B",
                          textDecoration: "none",
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: ff.sans,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: "#2D2D2D",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-block",
              textAlign: "center",
              padding: "12px 24px",
              backgroundColor: "#1A2744",
              color: "#FFFFFF",
              fontFamily: ff.sans,
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: 8,
            }}
          >
            {nav.cta[lang]}
          </Link>

          {/* Legal links divider */}
          <div style={{ borderTop: "1px solid #E2DDD5", paddingTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            {legalSubLinks.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: ff.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#9B9B9B",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <sub.Icon size={11} color="#C9A84C" />
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}