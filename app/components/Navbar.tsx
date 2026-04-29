"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans: "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s ease",
      backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      boxShadow: scrolled ? "0 1px 0 #E2DDD5" : "none",
    }}>
      <div style={{ height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C,#E8D5A3)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>

          {/* LOGO — SVG monogram LTI */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" fill="#1A2744"/>
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="Georgia,serif" fontSize="16" fontWeight="700"
                letterSpacing="1" fill="#C9A84C">LTI</text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: ff.serif, fontSize: 15, fontWeight: 600, letterSpacing: 2, color: scrolled ? "#1A2744" : "#FFFFFF", transition: "color 0.4s" }}>
                PT. LTI
              </span>
              <span style={{ fontFamily: ff.sans, fontSize: 7, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#C9A84C", marginTop: 2 }}>
                Lestari Teknologi Inovasi
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: ff.sans, fontSize: 11, fontWeight: 500,
                letterSpacing: 2.5, textTransform: "uppercase",
                color: scrolled ? "#2D2D2D" : "rgba(255,255,255,0.85)",
                textDecoration: "none", transition: "color 0.3s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "#2D2D2D" : "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" style={{
              display: "inline-block", padding: "10px 24px",
              fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
              letterSpacing: 2.5, textTransform: "uppercase",
              border: scrolled ? "1px solid #1A2744" : "1px solid rgba(255,255,255,0.5)",
              color: scrolled ? "#1A2744" : "#FFFFFF",
              textDecoration: "none", background: "transparent", transition: "all 0.3s",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#1A2744"; el.style.borderColor = "#1A2744"; el.style.color = "#FFFFFF"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.borderColor = scrolled ? "#1A2744" : "rgba(255,255,255,0.5)"; el.style.color = scrolled ? "#1A2744" : "#FFFFFF"; }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: scrolled ? "#2D2D2D" : "#FFFFFF", padding: 8, background: "none", border: "none", cursor: "pointer" }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" style={{
        overflow: "hidden", maxHeight: mobileOpen ? 400 : 0,
        transition: "max-height 0.3s ease", backgroundColor: "#FFFFFF",
        borderTop: mobileOpen ? "1px solid #E2DDD5" : "none",
      }}>
        <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              fontFamily: ff.sans, fontSize: 11, fontWeight: 500, letterSpacing: 2.5,
              textTransform: "uppercase", color: "#2D2D2D", textDecoration: "none",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
            display: "inline-block", textAlign: "center", padding: "12px 24px",
            backgroundColor: "#1A2744", color: "#FFFFFF", fontFamily: ff.sans,
            fontSize: 10, fontWeight: 500, letterSpacing: 2.5,
            textTransform: "uppercase", textDecoration: "none", marginTop: 8,
          }}>
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}