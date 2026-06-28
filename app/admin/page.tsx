"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCms } from "../context/CmsContext";
import { useLanguage } from "../context/LanguageContext";
import { t as defaultTranslations } from "../translations";
import {
  Save, RefreshCw, Eye, EyeOff, Search,
  X, ChevronDown, ChevronUp, LogOut, Check, AlertTriangle,
  ArrowRight, Layout, Globe,
  BookOpen, Briefcase, HeartPulse, Bot, FolderOpen, Mail, Scale, Code2,
  Cpu, Activity, UserPlus, User, Key
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// ── Type aliases ──────────────────────────────────────────────────────────────
type HomeTranslations = typeof defaultTranslations.home;

// ── Styling constants ─────────────────────────────────────────────────────────
const ff = {
  serif: "var(--font-cormorant),'Cormorant Garamond',Georgia,serif",
  sans:  "var(--font-jost),'Helvetica Neue',Arial,sans-serif",
};
const lbl: React.CSSProperties = {
  fontFamily: ff.sans, fontSize: 10, fontWeight: 500,
  letterSpacing: 4, textTransform: "uppercase", color: "#C9A84C",
};
const goldLine: React.CSSProperties = {
  width: 56, height: 2, background: "linear-gradient(to right,#9B7A2E,#C9A84C)",
};

// ── Page tab definitions ──────────────────────────────────────────────────────
type PageId = "home" | "about" | "services" | "robotics" | "biomedic" | "software" | "portfolio" | "contact" | "privacy" | "terms";

interface PageTab {
  id: PageId;
  label: string;
  icon: React.ReactNode;
  url: string;
  sections: { id: string; title: string; keys: string[] }[];
}

function buildPageTabs(cms: ReturnType<typeof useCms>): PageTab[] {
  return [
    {
      id: "home",
      label: "Home",
      icon: <Globe size={14} />,
      url: "/",
      sections: [
        {
          id: "hero",
          title: "Hero & Stats Section",
          keys: ["hero_label","hero_title1","hero_em","hero_title2","hero_sub","hero_cta1","hero_cta2","stat_founded","stat_products","stat_clients","stat_quality"],
        },
        {
          id: "overview",
          title: "Overview (About Us) Section",
          keys: ["overview_label","overview_title1","overview_em","overview_title2","overview_p1","overview_p2","overview_cta","overview_card_tagline"],
        },
        {
          id: "services",
          title: "Services Highlights Section",
          keys: ["services_label","services_title","svc_robotics_title","svc_robotics_desc","svc_biomedic_title","svc_biomedic_desc","svc_software_title","svc_software_desc","svc_more"],
        },
        { id: "testimonials", title: "Testimonials Section", keys: ["testi_label","testi_title"] },
        { id: "cta", title: "CTA Footer Banner Section", keys: ["cta_title1","cta_em","cta_title2","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "about",
      label: "About",
      icon: <BookOpen size={14} />,
      url: "/about",
      sections: [
        { id: "hero",     title: "Hero Section",        keys: ["hero_label","hero_title","hero_sub"] },
        { id: "vision",   title: "Vision & Mission",    keys: ["vision_label","vision_title","vision_body","mission_label","mission_title"] },
        { id: "values",   title: "Core Values",         keys: ["val_integrity","val_integrity_desc","val_excellence","val_excellence_desc","val_partnership","val_partnership_desc","val_innovation","val_innovation_desc"] },
        { id: "timeline", title: "Timeline",            keys: ["timeline_label","timeline_title"] },
        { id: "team",     title: "Team Section",        keys: ["team_title","ceo_desc"] },
      ],
    },
    {
      id: "services",
      label: "Services",
      icon: <Briefcase size={14} />,
      url: "/services",
      sections: [
        { id: "hero", title: "Hero Section", keys: ["hero_label","hero_title","hero_sub"] },
        { id: "robotics_cat", title: "Robotics Category", keys: ["cat_robotics_label","cat_robotics_headline","cat_robotics_intro","svc_robot_assembly_title","svc_robot_assembly_desc","svc_robot_material_title","svc_robot_material_desc","svc_robot_welding_title","svc_robot_welding_desc","svc_robot_integration_title","svc_robot_integration_desc"] },
        { id: "biomedic_cat", title: "Biomedic Category", keys: ["cat_biomedic_label","cat_biomedic_headline","cat_biomedic_intro","svc_bio_fetal_title","svc_bio_fetal_desc","svc_bio_vital_title","svc_bio_vital_desc","svc_bio_drowsy_title","svc_bio_drowsy_desc","svc_bio_calib_title","svc_bio_calib_desc"] },
        { id: "software_cat", title: "Software Category", keys: ["cat_software_label","cat_software_headline","cat_software_intro","svc_sw_finance_title","svc_sw_finance_desc","svc_sw_monitoring_title","svc_sw_monitoring_desc","svc_sw_custom_title","svc_sw_custom_desc"] },
        { id: "cta", title: "CTA Section", keys: ["cta_title","cta_sub","cta_btn","more_btn"] },
      ],
    },
    {
      id: "robotics",
      label: "Robotics",
      icon: <Bot size={14} />,
      url: "/services/robotics",
      sections: [
        { id: "hero",      title: "Hero Section",       keys: ["breadcrumb","hero_label","hero_title","hero_sub","hero_cta"] },
        { id: "services",  title: "Services",           keys: ["section_label","section_title","svc1_title","svc1_desc"] },
        { id: "catalogue", title: "Product Catalogue",  keys: ["catalogue_label","catalogue_title","cat1_tag","cat1_name","cat1_desc","cat1_wa","cat1_pay","cat2_tag","cat2_name","cat2_desc","cat2_wa","cat2_pay","wa_btn","pay_btn"] },
        { id: "why",       title: "Why LTI Section",    keys: ["why_label","why_title","why_sub","adv1_title","adv1_desc","adv2_title","adv2_desc","adv3_title","adv3_desc","adv4_title","adv4_desc"] },
        { id: "cta",       title: "CTA Section",        keys: ["cta_title","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "biomedic",
      label: "Biomedic",
      icon: <HeartPulse size={14} />,
      url: "/services/biomedic",
      sections: [
        { id: "hero",      title: "Hero Section",       keys: ["breadcrumb","hero_label","hero_sub","hero_cta"] },
        { id: "services",  title: "Services",           keys: ["section_label","section_title","svc1_title","svc1_desc","svc2_title","svc2_desc","svc3_title","svc3_desc"] },
        { id: "catalogue", title: "Product Catalogue",  keys: ["catalogue_label","catalogue_title","cat1_tag","cat1_desc","cat1_wa","cat1_pay","cat2_tag","cat2_desc","cat2_wa","cat2_pay","wa_btn","pay_btn"] },
        { id: "why",       title: "Why LTI Section",    keys: ["why_label","why_title","why_sub","adv1_title","adv1_desc","adv2_title","adv2_desc","adv3_title","adv3_desc","adv4_title","adv4_desc"] },
        { id: "cta",       title: "CTA Section",        keys: ["cta_title","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "software",
      label: "Software",
      icon: <Code2 size={14} />,
      url: "/services/software",
      sections: [
        { id: "hero",      title: "Hero Section",       keys: ["breadcrumb","hero_label","hero_sub","hero_cta"] },
        { id: "services",  title: "Services",           keys: ["section_label","section_title","svc1_title","svc1_desc","svc2_title","svc2_desc","svc3_title","svc3_desc"] },
        { id: "catalogue", title: "Product Catalogue",  keys: ["catalogue_label","catalogue_title","cat1_tag","cat1_name","cat1_desc","cat1_wa","cat1_pay","cat2_tag","cat2_name","cat2_desc","cat2_wa","cat2_pay","cat3_tag","cat3_name","cat3_desc","cat3_wa","cat3_pay","wa_btn","pay_btn"] },
        { id: "why",       title: "Why LTI Section",    keys: ["why_label","why_title","why_sub","adv1_title","adv1_desc","adv2_title","adv2_desc","adv3_title","adv3_desc","adv4_title","adv4_desc"] },
        { id: "cta",       title: "CTA Section",        keys: ["cta_title","cta_sub","cta_btn1","cta_btn2"] },
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <FolderOpen size={14} />,
      url: "/portfolio",
      sections: [
        { id: "hero",     title: "Hero Section",      keys: ["hero_label","hero_title","hero_sub"] },
        { id: "stats",    title: "Stats Bar",         keys: ["stat_done","stat_satisfy","stat_year","selected","result_label"] },
        { id: "projects", title: "Projects",          keys: ["p1_title","p1_desc","p1_result","p2_title","p2_desc","p2_result"] },
        { id: "next",     title: "Upcoming Projects", keys: ["next_title","next_sub"] },
        { id: "cta",      title: "CTA Section",       keys: ["cta_title","cta_sub","cta_btn"] },
      ],
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={14} />,
      url: "/contact",
      sections: [
        { id: "hero",    title: "Hero Section",         keys: ["hero_label","hero_title","hero_sub"] },
        { id: "info",    title: "Contact Info",         keys: ["offices_label","offices_title","address_label","address_value","phone_label","phone_value","email_label","hours_label","hours_value"] },
        { id: "form",    title: "Enquiry Form",         keys: ["form_label","form_title","submit_btn"] },
        { id: "sent",    title: "Success Message",      keys: ["sent_title","sent_sub"] },
      ],
    },
    {
      id: "privacy",
      label: "Privacy",
      icon: <Scale size={14} />,
      url: "/privacy-policy",
      sections: [
        { id: "hero",     title: "Hero Section",          keys: ["hero_label","hero_title","updated"] },
        { id: "intro",    title: "Introduction",          keys: ["intro"] },
        { id: "sections", title: "Policy Sections",       keys: ["s1_title","s2_title","s3_title","s4_title","s5_title","s6_title"] },
        { id: "contact",  title: "Contact Box",           keys: ["contact_title","contact_sub"] },
      ],
    },
    {
      id: "terms",
      label: "Terms",
      icon: <Scale size={14} />,
      url: "/terms-of-service",
      sections: [
        { id: "hero",     title: "Hero Section",          keys: ["hero_label","hero_title","updated"] },
        { id: "intro",    title: "Introduction",          keys: ["intro"] },
        { id: "sections", title: "Terms Sections",        keys: ["s1_title","s2_title","s3_title","s4_title","s5_title","s6_title"] },
        { id: "contact",  title: "Contact Box",           keys: ["contact_title","contact_sub"] },
      ],
    },
  ];
}

// ── Helper: get live translations for a page from CmsContext ─────────────────
function usePageTranslations(pageId: PageId, cms: ReturnType<typeof useCms>): Record<string, { id: string; en: string }> {
  const map: Record<PageId, Record<string, any>> = {
    home:      cms.homeTranslations,
    about:     cms.aboutTranslations,
    services:  cms.servicesTranslations,
    robotics:  cms.roboticsTranslations,
    biomedic:  cms.biomedicTranslations,
    software:  cms.softwareTranslations,
    portfolio: cms.portfolioTranslations,
    contact:   cms.contactTranslations,
    privacy:   cms.privacyTranslations,
    terms:     cms.termsTranslations,
  };
  return map[pageId] ?? {};
}

// ── Field Input Component ────────────────────────────────────────────────────
function FieldRow({
  keyStr,
  value,
  isFocused,
  onUpdate,
  onFocus,
}: {
  keyStr: string;
  value: { id?: string; en?: string } | undefined;
  isFocused: boolean;
  onUpdate: (lang: "id" | "en", val: string) => void;
  onFocus: () => void;
}) {
  const isTextarea =
    keyStr.endsWith("_sub") ||
    keyStr.includes("_desc") ||
    keyStr.includes("_p1") ||
    keyStr.includes("_p2") ||
    keyStr.includes("_tagline") ||
    keyStr.includes("_body") ||
    keyStr.includes("_intro") ||
    keyStr === "quote";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#111B30",
    border: isFocused ? "1px solid #C9A84C" : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
    padding: "8px 12px 8px 36px",
    fontSize: "12px",
    color: "#FFFFFF",
    outline: "none",
    fontFamily: "var(--font-jost)",
    ...(isTextarea ? { minHeight: "60px", resize: "vertical" as const, lineHeight: "1.4" } : {}),
  };

  const renderInput = (lang: "id" | "en") => {
    const langLabel = (
      <span style={{ position: "absolute", top: "8px", left: "8px", fontSize: "9px", background: "rgba(255,255,255,0.1)", padding: "2px 4px", borderRadius: "2px", color: "rgba(255,255,255,0.7)" }}>
        {lang.toUpperCase()}
      </span>
    );
    const val = value?.[lang] || "";

    return (
      <div style={{ marginBottom: lang === "id" ? "8px" : 0, position: "relative" }}>
        {langLabel}
        {isTextarea ? (
          <textarea id={`cms-input-${keyStr}-${lang}`} value={val} onChange={(e) => onUpdate(lang, e.target.value)} onFocus={onFocus} style={inputStyle} />
        ) : (
          <input id={`cms-input-${keyStr}-${lang}`} type="text" value={val} onChange={(e) => onUpdate(lang, e.target.value)} onFocus={onFocus} style={inputStyle} />
        )}
      </div>
    );
  };

  return (
    <div style={{ borderLeft: isFocused ? "3px solid #C9A84C" : "1px solid rgba(255,255,255,0.06)", paddingLeft: "10px", transition: "all 0.2s ease" }}>
      <label style={{ fontSize: "11px", color: isFocused ? "#C9A84C" : "rgba(255,255,255,0.5)", fontWeight: 600, display: "block", marginBottom: "6px", fontFamily: "monospace" }}>
        {keyStr}
      </label>
      {renderInput("id")}
      {renderInput("en")}
    </div>
  );
}

// ── Main Admin Component ──────────────────────────────────────────────────────
export default function AdminPage() {
  const { lang } = useLanguage();
  const cms = useCms();
  const {
    isLoggedIn, loginWithOAuth, logout,
    isCmsMode, setIsCmsMode,
    homeTranslations: h,
    updateHomeField,
    updateField,
    publishChanges,
    resetDefaults,
    activeEditKey, setActiveEditKey,
    isSaving,
  } = cms;

  const [searchQuery,        setSearchQuery]        = useState("");
  const [activeSection,      setActiveSection]      = useState<string | null>("hero");
  const [activePage,         setActivePage]         = useState<PageId>("home");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [regLoading, setRegLoading] = useState(false);

  const getEmailFromUsername = (input: string) => {
    const trimmed = input.trim();
    if (trimmed.includes("@")) return trimmed;
    return `${trimmed.toLowerCase()}@lti.company`;
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");
    setRegSuccess("");

    if (!regUsername.trim() || !regPassword) {
      setRegError("Username/email dan password wajib diisi");
      return;
    }

    if (regUsername.trim().length < 3) {
      setRegError("Username minimal 3 karakter");
      return;
    }

    if (regPassword.length < 6) {
      setRegError("Password minimal 6 karakter");
      return;
    }

    setRegLoading(true);
    const supabase = createClient();
    const email = getEmailFromUsername(regUsername);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password: regPassword,
      });

      if (authError) {
        setRegError(authError.message);
        setRegLoading(false);
        return;
      }

      setRegSuccess("Admin baru berhasil didaftarkan!");
      setRegUsername("");
      setRegPassword("");
      setTimeout(() => {
        setIsRegisterOpen(false);
        setRegSuccess("");
      }, 1500);
    } catch (err: any) {
      setRegError(err.message || "Terjadi kesalahan");
    } finally {
      setRegLoading(false);
    }
  };

  const pageTabs = buildPageTabs(cms);
  const currentTab = pageTabs.find(p => p.id === activePage)!;
  const pageTranslations = usePageTranslations(activePage, cms);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  useEffect(() => {
    if (isLoggedIn) setIsCmsMode(true);
  }, [isLoggedIn, setIsCmsMode]);

  // Reset to first section when tab changes
  useEffect(() => {
    if (currentTab?.sections?.[0]) {
      setActiveSection(currentTab.sections[0].id);
    }
  }, [activePage]);

  const handlePublish = async () => {
    const success = await publishChanges();
    setToast(success
      ? { message: "Changes published & saved to codebase!", type: "success" }
      : { message: "Failed to save changes to disk.", type: "error" }
    );
  };

  const handleReset = async () => {
    if (window.confirm("Reset ALL translations across ALL pages to defaults? This cannot be undone.")) {
      const success = await resetDefaults();
      setToast(success
        ? { message: "Restored to default translations!", type: "success" }
        : { message: "Failed to reset translations.", type: "error" }
      );
    }
  };

  // ── DASHBOARD ───────────────────────────────────────────────────────────────
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#0D1424", fontFamily: "var(--font-jost)", color: "#FFFFFF", overflow: "hidden" }}>

      {/* TOAST */}
      {toast && (
        <div className={`cms-toast ${toast.type}`} style={{ position: "fixed", bottom: "24px", left: "24px", zIndex: 2001, backgroundColor: toast.type === "success" ? "#10B981" : "#EF4444", color: "#FFFFFF", padding: "12px 20px", borderRadius: "6px", boxShadow: "0 4px 15px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", animation: "slideIn 0.3s ease-out" }}>
          {toast.type === "success" ? <Check size={16} /> : <AlertTriangle size={16} />}
          {toast.message}
        </div>
      )}

      {/* TOP BAR */}
      <header style={{ height: "64px", backgroundColor: "#111B30", borderBottom: "1px solid rgba(201, 168, 76, 0.25)", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Layout size={20} color="#C9A84C" />
          <div>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", color: "#C9A84C", fontWeight: 400, margin: 0 }}>PT. LTI CMS Editor</h1>
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginTop: "-2px" }}>All Pages Admin</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button id="cms-add-admin-btn" onClick={() => setIsRegisterOpen(true)} style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", color: "#C9A84C", backgroundColor: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <UserPlus size={13} /> Tambah Admin
          </button>
          <Link href={currentTab.url} target="_blank" style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <Globe size={13} color="#C9A84C" /> View Live Page
          </Link>
          <button id="cms-logout-btn" onClick={logout} style={{ color: "#EF4444", backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", padding: "8px 12px", borderRadius: "4px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
            <LogOut size={13} /> Logout
          </button>
        </div>
      </header>

      {/* BODY */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* PAGE TAB SIDEBAR */}
        <nav style={{ width: "64px", backgroundColor: "#0D1424", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "16px", gap: "4px", flexShrink: 0 }}>
          {pageTabs.map((tab) => {
            const active = activePage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePage(tab.id)}
                title={tab.label}
                style={{
                  width: "48px", height: "48px", borderRadius: "8px",
                  backgroundColor: active ? "rgba(201,168,76,0.15)" : "transparent",
                  border: active ? "1px solid rgba(201,168,76,0.4)" : "1px solid transparent",
                  color: active ? "#C9A84C" : "rgba(255,255,255,0.4)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", gap: "3px", transition: "all 0.15s ease",
                  fontSize: "8px", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase",
                  fontFamily: "var(--font-jost)",
                }}
              >
                {tab.icon}
                <span style={{ fontSize: "7px", letterSpacing: 0 }}>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* EDITOR PANEL */}
        <aside style={{ width: "400px", backgroundColor: "#111B30", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 }}>

          {/* Panel header with page name */}
          <div style={{ padding: "16px 20px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ color: "#C9A84C" }}>{currentTab.icon}</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF" }}>{currentTab.label} Page</span>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", marginLeft: "auto", fontFamily: "monospace" }}>{currentTab.url}</span>
            </div>

            {/* CMS Mode Toggle + Search */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>Hover Highlight</span>
                <button id="cms-inline-toggle" onClick={() => setIsCmsMode(!isCmsMode)} style={{ backgroundColor: isCmsMode ? "#C9A84C" : "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: "4px", color: isCmsMode ? "#1A2744" : "#FFFFFF", fontSize: "11px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                  {isCmsMode ? <Eye size={12} /> : <EyeOff size={12} />}
                  {isCmsMode ? "Enabled" : "Disabled"}
                </button>
              </div>
              <div style={{ position: "relative" }}>
                <input id="cms-search-input" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search keys..." style={{ width: "100%", backgroundColor: "#0D1424", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "7px 10px 7px 30px", fontSize: "12px", color: "#FFFFFF", outline: "none" }} />
                <Search size={13} style={{ position: "absolute", left: "9px", top: "9px", color: "rgba(255,255,255,0.4)" }} />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} style={{ position: "absolute", right: "8px", top: "7px", background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", display: "flex" }}>
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sections accordion */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px" }} className="cms-fields-container">
            {currentTab.sections.map((section) => {
              const filteredKeys = section.keys.filter((key) => {
                const field = pageTranslations[key] as { id?: string; en?: string } | undefined;
                return (
                  key.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (field?.id || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (field?.en || "").toLowerCase().includes(searchQuery.toLowerCase())
                );
              });

              if (filteredKeys.length === 0) return null;
              const isExpanded = activeSection === section.id;

              return (
                <div key={section.id} style={{ marginBottom: "10px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", overflow: "hidden", backgroundColor: "#152037" }}>
                  <button
                    onClick={() => setActiveSection(isExpanded ? null : section.id)}
                    style={{ width: "100%", padding: "11px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: isExpanded ? "rgba(201,168,76,0.08)" : "transparent", color: isExpanded ? "#C9A84C" : "#FFFFFF", fontSize: "12px", fontWeight: 500, textAlign: "left", cursor: "pointer" }}
                  >
                    <span>{section.title}</span>
                    {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  {isExpanded && (
                    <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
                      {filteredKeys.map((key) => {
                        const fieldValue = pageTranslations[key] as { id?: string; en?: string } | undefined;
                        // Skip non-bilingual fields (arrays, nested objects)
                        if (!fieldValue || typeof fieldValue !== "object" || Array.isArray(fieldValue) || (!("id" in fieldValue) && !("en" in fieldValue))) return null;

                        return (
                          <FieldRow
                            key={key}
                            keyStr={key}
                            value={fieldValue}
                            isFocused={activeEditKey === key}
                            onFocus={() => setActiveEditKey(key)}
                            onUpdate={(lang, val) => updateField(activePage, key, lang, val)}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom action bar */}
          <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "8px", backgroundColor: "#16223D" }}>
            <button id="cms-publish-btn" onClick={handlePublish} disabled={isSaving} style={{ width: "100%", background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)", color: "#1A2744", fontWeight: 600, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "11px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer", opacity: isSaving ? 0.7 : 1 }}>
              <Save size={13} />
              {isSaving ? "Saving..." : "Save & Publish All"}
            </button>
            <button id="cms-reset-btn" onClick={handleReset} disabled={isSaving} style={{ width: "100%", backgroundColor: "rgba(239,68,68,0.08)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.18)", fontWeight: 500, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", padding: "9px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", cursor: "pointer" }}>
              <RefreshCw size={11} /> Reset All Defaults
            </button>
          </div>
        </aside>

        {/* LIVE PREVIEW PANEL */}
        <section style={{ flex: 1, backgroundColor: "#1C2A49", padding: "24px", overflowY: "auto", display: "flex", justifyContent: "center" }} className="admin-preview-section">
          <div className="admin-preview-frame" style={{ width: "100%", maxWidth: "1024px", backgroundColor: "#FEFEFE", color: "#2D2D2D", borderRadius: "8px", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
            {/* Browser chrome */}
            <div style={{ height: "36px", backgroundColor: "#F5F4F1", borderBottom: "1px solid #E2DDD5", padding: "0 14px", display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }} />
              </div>
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2DDD5", borderRadius: "4px", fontSize: "10px", color: "#6B6B6B", padding: "2px 14px", marginLeft: "12px", flex: 1, maxWidth: "480px", fontFamily: "monospace", textAlign: "center" }}>
                localhost:3000{currentTab.url}
              </div>
              <div style={{ marginLeft: "auto", fontSize: "10px", fontWeight: 700, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "1px" }}>Live Preview</div>
            </div>

            {/* Preview content — HOME PAGE */}
            {activePage === "home" && (
              <div style={{ flex: 1, overflowY: "auto" }}>

                {/* Hero */}
                <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#1A2744 0%,#243356 50%,#1A2744 100%)", position: "relative", overflow: "hidden", padding: "60px 0" }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#C9A84C 1px,transparent 1px),linear-gradient(90deg,#C9A84C 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
                  <div style={{ position: "relative", zIndex: 1, padding: "0 40px", maxWidth: 680 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ height: 1, width: 36, background: "#C9A84C" }} />
                      <span style={lbl}><span className={`cms-editable-wrapper ${activeEditKey === "hero_label" ? "active" : ""}`}>{h.hero_label[lang]}</span></span>
                    </div>
                    <h1 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1, fontSize: "clamp(32px,4.5vw,58px)", marginBottom: 20 }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "hero_title1" ? "active" : ""}`}>{h.hero_title1[lang]}</span>{" "}
                      <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9A84C" }}>
                        <span className={`cms-editable-wrapper ${activeEditKey === "hero_em" ? "active" : ""}`}>{h.hero_em[lang]}</span>
                      </em>{" "}
                      <span className={`cms-editable-wrapper ${activeEditKey === "hero_title2" ? "active" : ""}`}>{h.hero_title2[lang]}</span>
                    </h1>
                    <p style={{ fontFamily: ff.sans, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: 480, marginBottom: 32 }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "hero_sub" ? "active" : ""}`}>{h.hero_sub[lang]}</span>
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <div className="btn-solid-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
                        <span className={`cms-editable-wrapper ${activeEditKey === "hero_cta1" ? "active" : ""}`}>{h.hero_cta1[lang]}</span> <ArrowRight size={11} />
                      </div>
                      <div className="btn-outline-light" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>
                        <span className={`cms-editable-wrapper ${activeEditKey === "hero_cta2" ? "active" : ""}`}>{h.hero_cta2[lang]}</span>
                      </div>
                    </div>
                    <div className="grid-4" style={{ marginTop: 48, borderTop: "1px solid rgba(201,168,76,0.25)" }}>
                      {[
                        { num: "2026", label: h.stat_founded[lang],  key: "stat_founded" },
                        { num: "3+",   label: h.stat_products[lang], key: "stat_products" },
                        { num: "2",    label: h.stat_clients[lang],  key: "stat_clients" },
                        { num: "100%", label: h.stat_quality[lang],  key: "stat_quality" },
                      ].map((s, i) => (
                        <div key={i} style={{ padding: "16px 0 16px 10px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                          <div style={{ fontFamily: ff.serif, fontSize: 26, fontWeight: 600, color: "#C9A84C" }}>{s.num}</div>
                          <div style={{ ...lbl, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>
                            <span className={`cms-editable-wrapper ${activeEditKey === s.key ? "active" : ""}`}>{s.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Overview */}
                <section style={{ padding: "60px 40px" }}>
                  <div style={lbl}><span className={`cms-editable-wrapper ${activeEditKey === "overview_label" ? "active" : ""}`}>{h.overview_label[lang]}</span></div>
                  <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", lineHeight: 1.15, fontSize: "clamp(24px,3vw,40px)", margin: "10px 0 16px" }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_title1" ? "active" : ""}`}>{h.overview_title1[lang]}</span>{" "}
                    <em><span className={`cms-editable-wrapper ${activeEditKey === "overview_em" ? "active" : ""}`}>{h.overview_em[lang]}</span></em>{" "}
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_title2" ? "active" : ""}`}>{h.overview_title2[lang]}</span>
                  </h2>
                  <div style={{ ...goldLine, marginBottom: 20 }} />
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 12, maxWidth: 520 }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_p1" ? "active" : ""}`}>{h.overview_p1[lang]}</span>
                  </p>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "#6B6B6B", lineHeight: 1.8, maxWidth: 520 }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "overview_p2" ? "active" : ""}`}>{h.overview_p2[lang]}</span>
                  </p>
                </section>

                {/* Services */}
                <section style={{ padding: "60px 40px", background: "#F5F4F1" }}>
                  <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <div style={lbl}><span className={`cms-editable-wrapper ${activeEditKey === "services_label" ? "active" : ""}`}>{h.services_label[lang]}</span></div>
                    <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#1A2744", fontSize: "clamp(24px,3vw,40px)", margin: "10px 0 14px" }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "services_title" ? "active" : ""}`}>{h.services_title[lang]}</span>
                    </h2>
                    <div style={{ ...goldLine, margin: "0 auto" }} />
                  </div>
                  <div className="grid-3">
                    {[
                      { icon: <Cpu size={20} color="#C9A84C" />, title: h.svc_robotics_title[lang], desc: h.svc_robotics_desc[lang], tKey: "svc_robotics_title", dKey: "svc_robotics_desc" },
                      { icon: <Activity size={20} color="#C9A84C" />, title: h.svc_biomedic_title[lang], desc: h.svc_biomedic_desc[lang], tKey: "svc_biomedic_title", dKey: "svc_biomedic_desc" },
                      { icon: <Code2 size={20} color="#C9A84C" />, title: h.svc_software_title[lang], desc: h.svc_software_desc[lang], tKey: "svc_software_title", dKey: "svc_software_desc" },
                    ].map((s, i) => (
                      <div key={i} style={{ background: "#FEFEFE", padding: "28px 22px", border: "1px solid #E2DDD5" }}>
                        <div style={{ width: 44, height: 44, border: "1px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>{s.icon}</div>
                        <h3 style={{ fontFamily: ff.serif, fontSize: 17, fontWeight: 600, color: "#1A2744", marginBottom: 10 }}>
                          <span className={`cms-editable-wrapper ${activeEditKey === s.tKey ? "active" : ""}`}>{s.title}</span>
                        </h3>
                        <p style={{ fontFamily: ff.sans, fontSize: 12, color: "#6B6B6B", lineHeight: 1.7 }}>
                          <span className={`cms-editable-wrapper ${activeEditKey === s.dKey ? "active" : ""}`}>{s.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <section style={{ padding: "60px 40px", background: "linear-gradient(135deg,#1A2744 0%,#2C3E6B 100%)", textAlign: "center" }}>
                  <h2 style={{ fontFamily: ff.serif, fontWeight: 300, color: "#FFFFFF", fontSize: "clamp(24px,3vw,42px)", marginBottom: 14 }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "cta_title1" ? "active" : ""}`}>{h.cta_title1[lang]}</span>{" "}
                    <em style={{ color: "#C9A84C" }}><span className={`cms-editable-wrapper ${activeEditKey === "cta_em" ? "active" : ""}`}>{h.cta_em[lang]}</span></em>{" "}
                    <span className={`cms-editable-wrapper ${activeEditKey === "cta_title2" ? "active" : ""}`}>{h.cta_title2[lang]}</span>
                  </h2>
                  <p style={{ fontFamily: ff.sans, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
                    <span className={`cms-editable-wrapper ${activeEditKey === "cta_sub" ? "active" : ""}`}>{h.cta_sub[lang]}</span>
                  </p>
                  <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <div className="btn-solid-gold" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", fontFamily: ff.sans, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "cta_btn1" ? "active" : ""}`}>{h.cta_btn1[lang]}</span> <ArrowRight size={11} />
                    </div>
                    <div className="btn-outline-light" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", fontFamily: ff.sans, fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase" }}>
                      <span className={`cms-editable-wrapper ${activeEditKey === "cta_btn2" ? "active" : ""}`}>{h.cta_btn2[lang]}</span>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Preview content — ALL OTHER PAGES (generic field list) */}
            {activePage !== "home" && (
              <div style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ color: "#C9A84C" }}>{currentTab.icon}</span>
                    <h2 style={{ fontFamily: ff.serif, fontWeight: 400, color: "#1A2744", fontSize: "28px", margin: 0 }}>{currentTab.label} Page — Field Overview</h2>
                  </div>
                  <p style={{ fontFamily: ff.sans, fontSize: "12px", color: "#6B6B6B" }}>
                    Select a field on the left to edit it. Changes are reflected immediately on the live website.
                  </p>
                </div>

                {currentTab.sections.map((section) => {
                  const keys = section.keys.filter(k => {
                    const field = pageTranslations[k] as any;
                    return field && typeof field === "object" && !Array.isArray(field) && ("id" in field || "en" in field);
                  });
                  if (keys.length === 0) return null;
                  return (
                    <div key={section.id} style={{ marginBottom: "24px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px", paddingBottom: "8px", borderBottom: "1px solid #E2DDD5" }}>
                        {section.title}
                      </div>
                      <div style={{ display: "grid", gap: "10px" }}>
                        {keys.map((key) => {
                          const field = pageTranslations[key] as { id?: string; en?: string } | undefined;
                          const isFocused = activeEditKey === key;
                          return (
                            <div
                              key={key}
                              onClick={() => {
                                setActiveEditKey(key);
                                setActiveSection(section.id);
                                // expand the correct section
                                if (activeSection !== section.id) setActiveSection(section.id);
                              }}
                              style={{
                                padding: "12px 16px", border: isFocused ? "1px solid #C9A84C" : "1px solid #E2DDD5",
                                borderRadius: "4px", cursor: "pointer",
                                backgroundColor: isFocused ? "rgba(201,168,76,0.04)" : "#FFFFFF",
                                transition: "all 0.15s ease",
                              }}
                            >
                              <div style={{ fontFamily: "monospace", fontSize: "10px", color: isFocused ? "#C9A84C" : "#AAAAAA", marginBottom: "6px", fontWeight: 600 }}>{key}</div>
                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                <div style={{ fontSize: "12px", color: "#2D2D2D", lineHeight: 1.5 }}>
                                  <span style={{ fontSize: "9px", color: "#C9A84C", fontWeight: 700, marginRight: "4px" }}>ID</span>
                                  {field?.id || <span style={{ color: "#AAAAAA", fontStyle: "italic" }}>—</span>}
                                </div>
                                <div style={{ fontSize: "12px", color: "#2D2D2D", lineHeight: 1.5 }}>
                                  <span style={{ fontSize: "9px", color: "#6B9BD2", fontWeight: 700, marginRight: "4px" }}>EN</span>
                                  {field?.en || <span style={{ color: "#AAAAAA", fontStyle: "italic" }}>—</span>}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* REGISTRATION MODAL */}
      {isRegisterOpen && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(13, 20, 36, 0.75)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ backgroundColor: "#111B30", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "12px", padding: "36px", width: "100%", maxWidth: "400px", boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5)", color: "#FFFFFF", position: "relative" }}>
            
            {/* Close Button */}
            <button onClick={() => setIsRegisterOpen(false)} style={{ position: "absolute", top: "16px", right: "16px", color: "rgba(255, 255, 255, 0.4)", cursor: "pointer" }}>
              <X size={20} />
            </button>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(201, 168, 76, 0.12)", color: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <UserPlus size={22} />
              </div>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "24px", color: "#C9A84C", fontWeight: 400, margin: 0 }}>Tambah Admin Baru</h3>
              <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.55)", marginTop: "4px" }}>
                Daftarkan kredensial admin baru untuk mengakses panel CMS
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateAdmin}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "6px" }}>Username / Email</label>
                <div style={{ position: "relative" }}>
                  <User size={14} style={{ position: "absolute", left: "12px", top: "12px", color: "rgba(255, 255, 255, 0.4)" }} />
                  <input type="text" value={regUsername} onChange={(e) => setRegUsername(e.target.value)} placeholder="Tentukan username atau email" style={{ width: "100%", backgroundColor: "#0D1424", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "6px", padding: "10px 10px 10px 36px", fontSize: "13px", color: "#FFFFFF", outline: "none" }} />
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "6px" }}>Password</label>
                <div style={{ position: "relative" }}>
                  <Key size={14} style={{ position: "absolute", left: "12px", top: "12px", color: "rgba(255, 255, 255, 0.4)" }} />
                  <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder="Tentukan password" style={{ width: "100%", backgroundColor: "#0D1424", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "6px", padding: "10px 10px 10px 36px", fontSize: "13px", color: "#FFFFFF", outline: "none" }} />
                </div>
              </div>

              {regError && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#EF4444", fontSize: "12px", backgroundColor: "rgba(239, 68, 68, 0.1)", padding: "10px", borderRadius: "6px", border: "1px solid rgba(239, 68, 68, 0.2)", marginBottom: "16px" }}>
                  <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                  <span>{regError}</span>
                </div>
              )}

              {regSuccess && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10B981", fontSize: "12px", backgroundColor: "rgba(16, 185, 129, 0.1)", padding: "10px", borderRadius: "6px", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: "16px" }}>
                  <Check size={14} style={{ flexShrink: 0 }} />
                  <span>{regSuccess}</span>
                </div>
              )}

              <button type="submit" disabled={regLoading} style={{ width: "100%", background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)", color: "#1A2744", fontWeight: 600, fontSize: "13px", padding: "10px", borderRadius: "6px", cursor: regLoading ? "not-allowed" : "pointer", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", opacity: regLoading ? 0.7 : 1 }}>
                {regLoading ? "Mendaftarkan..." : "Daftarkan Admin"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
