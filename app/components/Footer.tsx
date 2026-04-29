import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const S = {
  serif: { fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" },
  sans: { fontFamily: "var(--font-jost), Jost, system-ui, sans-serif" },
};

export default function Footer() {
  return (
    <footer style={{ background: "#1A2744", color: "#FFFFFF" }}>
      <div style={{ height: "2px", background: "linear-gradient(to right, #9B7A2E, #C9A84C, #E8D5A3)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 48px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1.1fr", gap: "56px" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ ...S.serif, fontSize: "22px", fontWeight: 600, letterSpacing: "3px", color: "#FFFFFF" }}>PT. LTI</div>
              <div style={{ ...S.sans, fontSize: "8px", fontWeight: 500, letterSpacing: "5px", textTransform: "uppercase", color: "#C9A84C", marginTop: "3px" }}>PT. Lestari Teknologi Inovasi</div>
            </div>
            <p style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "24px" }}>
              Pioneering innovation through advanced robotics, precision healthcare solutions, and enterprise-grade software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[{href:"/",label:"Home"},{href:"/about",label:"About Us"},{href:"/services",label:"Services"},{href:"/portfolio",label:"Portfolio"},{href:"/contact",label:"Contact"}].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", textDecoration: "none", letterSpacing: "0.5px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#C9A84C" }}>—</span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Our Solutions
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Industrial Robotics","Medical Devices","Surgical Equipment","Enterprise Software","Web & Mobile Apps","System Integration"].map(s => (
                <li key={s} style={{ ...S.sans, fontSize: "12px", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#C9A84C" }}>—</span>{s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ ...S.serif, fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              Contact
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
            © {new Date().getFullYear()} PT. Lestari Teknologi Inovasi. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy","Terms of Service"].map(t => (
              <a key={t} href="#" style={{ ...S.sans, fontSize: "11px", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "1px" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
