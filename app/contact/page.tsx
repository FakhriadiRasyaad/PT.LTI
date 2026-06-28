"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCms } from "../context/CmsContext";

const S = {
  serif: {
    fontFamily: "var(--font-cormorant), 'Poppins', sans-serif",
  },
  sans: {
    fontFamily: "var(--font-jost), 'Poppins', sans-serif",
  },
  label: {
    fontFamily: "var(--font-jost), 'Poppins', sans-serif",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "4px",
    textTransform: "uppercase" as const,
    color: "#C9A84C",
  },
  goldLine: {
    width: "48px",
    height: "2px",
    background: "linear-gradient(to right, #9B7A2E, #C9A84C)",
  },
  gray: {
    color: "#6B6B6B",
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "#F5F4F1",
  border: "1px solid #E2DDD5",
  fontFamily: "var(--font-jost), 'Poppins', sans-serif",
  fontSize: "13px",
  color: "#2D2D2D",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const { contactTranslations: c } = useCms();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailTo = "contact@lti.company";
    const emailSubject = form.subject || "General Enquiry";

    const emailBody = `
Full Name: ${form.name}
Company: ${form.company || "-"}
Email: ${form.email}
Phone: ${form.phone || "-"}

Subject: ${form.subject}

Message:
${form.message}
`;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "340px",
          display: "flex",
          alignItems: "flex-end",
          background: "linear-gradient(135deg, #1A2744 0%, #2C3E6B 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="hero-inner-md page-container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "48px",
                background: "#C9A84C",
              }}
            />
            <span style={S.label}>{c.hero_label[lang]}</span>
          </div>

          <h1
            style={{
              ...S.serif,
              fontWeight: 300,
              color: "#FFFFFF",
              fontSize: "clamp(42px, 5vw, 72px)",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              ...S.sans,
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "12px",
              maxWidth: "500px",
              lineHeight: 1.75,
            }}
          >
            {c.hero_sub[lang]}
          </p>
        </div>
      </section>

      <section className="section-pad page-container">
        <div className="grid-2-bias">
          {/* Contact Info */}
          <div>
            <span style={S.label}>{c.offices_label[lang]}</span>

            <h2
              style={{
                ...S.serif,
                fontWeight: 300,
                color: "#1A2744",
                fontSize: "clamp(24px,3vw,38px)",
                margin: "12px 0 32px",
              }}
            >
              {c.offices_title[lang]}
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  Icon: MapPin,
                  label: c.address_label[lang],
                  content: c.address_value[lang],
                },
                {
                  Icon: Phone,
                  label: c.phone_label[lang],
                  content: c.phone_value[lang],
                },
                {
                  Icon: Mail,
                  label: c.email_label[lang],
                  content: "contact@lti.company",
                },
                {
                  Icon: Clock,
                  label: c.hours_label[lang],
                  content: c.hours_value[lang],
                },
              ].map(({ Icon, label, content }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    border: "1px solid #E2DDD5",
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#1A2744",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} color="#C9A84C" />
                  </div>

                  <div>
                    <div style={{ ...S.label, marginBottom: "6px" }}>
                      {label}
                    </div>
                    <div
                      style={{
                        ...S.sans,
                        fontSize: "12px",
                        ...S.gray,
                        lineHeight: 1.8,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <span style={S.label}>{c.form_label[lang]}</span>

            <h2
              style={{
                ...S.serif,
                fontWeight: 300,
                color: "#1A2744",
                fontSize: "clamp(24px,3vw,38px)",
                margin: "12px 0 32px",
              }}
            >
              {c.form_title[lang]}
            </h2>

            {submitted ? (
              <div
                style={{
                  border: "1px solid #C9A84C",
                  padding: "64px 40px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#1A2744",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Send size={22} color="#C9A84C" />
                </div>

                <h3
                  style={{
                    ...S.serif,
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#1A2744",
                    marginBottom: "12px",
                  }}
                >
                  {c.sent_title[lang]}
                </h3>

                <p
                  style={{
                    ...S.sans,
                    fontSize: "13px",
                    ...S.gray,
                    lineHeight: 1.8,
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  {c.sent_sub[lang]}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  {[
                    {
                      label: "Full Name *",
                      key: "name",
                      placeholder: "Budi Santoso",
                      required: true,
                    },
                    {
                      label: "Company",
                      key: "company",
                      placeholder: "PT Indonesia Group",
                      required: false,
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          ...S.sans,
                          fontSize: "9px",
                          fontWeight: 500,
                          letterSpacing: "2px",
                          textTransform: "uppercase" as const,
                          color: "#6B6B6B",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        {f.label}
                      </label>

                      <input
                        required={f.required}
                        placeholder={f.placeholder}
                        style={inputStyle}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="form-grid-2">
                  <div>
                    <label
                      style={{
                        ...S.sans,
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "2px",
                        textTransform: "uppercase" as const,
                        color: "#6B6B6B",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Email Address *
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="budi@company.co.id"
                      style={inputStyle}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        ...S.sans,
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "2px",
                        textTransform: "uppercase" as const,
                        color: "#6B6B6B",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Phone Number
                    </label>

                    <input
                      placeholder="+62 812 3456 7890"
                      style={inputStyle}
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      ...S.sans,
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase" as const,
                      color: "#6B6B6B",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Subject *
                  </label>

                  <select
                    required
                    style={inputStyle}
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select a subject…
                    </option>
                    <option>Industrial Robotics & Automation</option>
                    <option>Healthcare Equipment</option>
                    <option>Software Development</option>
                    <option>System Integration</option>
                    <option>Technical Support & Maintenance</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      ...S.sans,
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase" as const,
                      color: "#6B6B6B",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Message *
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="Describe your requirements in detail…"
                    style={{
                      ...inputStyle,
                      resize: "none",
                    }}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-solid-navy"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 36px",
                    ...S.sans,
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {c.submit_btn[lang]} <Send size={13} />
                </button>

                <p
                  style={{
                    ...S.sans,
                    fontSize: "11px",
                    color: "#BBBBB0",
                    marginTop: "12px",
                  }}
                >
                  * Required fields. Your information is kept strictly
                  confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ borderTop: "1px solid #E2DDD5" }}>
        <div style={{ height: "420px", position: "relative" }}>
          <iframe
            src="https://www.google.com/maps?q=Dewadaru%20Residence&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(20%) contrast(1.05)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PT Lestari Teknologi Inovasi - Dewadaru Residence"
          />

          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              background: "#FFFFFF",
              border: "1px solid #E2DDD5",
              padding: "16px 20px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "6px",
              }}
            >
              <MapPin size={12} color="#C9A84C" />
              <span style={S.label}>Head Office</span>
            </div>

            <div
              style={{
                ...S.serif,
                fontSize: "15px",
                fontWeight: 600,
                color: "#1A2744",
              }}
            >
              PT Lestari Teknologi Inovasi
            </div>

            <div
              style={{
                ...S.sans,
                fontSize: "12px",
                color: "#6B6B6B",
                marginTop: "2px",
              }}
            >
              Dewadaru Residence
            </div>

            <a
              href="https://maps.app.goo.gl/6NAqmwba1h3p48NG7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                ...S.sans,
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#1A2744",
                textDecoration: "none",
              }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}