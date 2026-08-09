"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { t as defaultTranslations } from "../translations";
import { createClient } from "@/lib/supabase/client";

type HomeTranslations      = typeof defaultTranslations.home;
type AboutTranslations     = typeof defaultTranslations.about;
type ServicesTranslations  = typeof defaultTranslations.services;
type RoboticsTranslations  = typeof defaultTranslations.robotics;
type BiomedicTranslations  = typeof defaultTranslations.biomedic;
type SoftwareTranslations  = typeof defaultTranslations.software;
type PortfolioTranslations = typeof defaultTranslations.portfolio;
type ContactTranslations   = typeof defaultTranslations.contact;
type PrivacyTranslations   = typeof defaultTranslations.privacy;
type TermsTranslations     = typeof defaultTranslations.terms;
type NavTranslations       = typeof defaultTranslations.nav;
type FooterTranslations    = typeof defaultTranslations.footer;

type AnyPageKey = "home" | "about" | "services" | "robotics" | "biomedic" | "software" | "portfolio" | "contact" | "privacy" | "terms" | "nav" | "footer";

interface CmsContextType {
  isLoggedIn: boolean;
  loginWithOAuth: (provider: "github" | "google") => Promise<boolean>;
  logout: () => void;
  isCmsMode: boolean;
  setIsCmsMode: (val: boolean) => void;

  // Per-page translation state
  homeTranslations:      HomeTranslations;
  aboutTranslations:     AboutTranslations;
  servicesTranslations:  ServicesTranslations;
  roboticsTranslations:  RoboticsTranslations;
  biomedicTranslations:  BiomedicTranslations;
  softwareTranslations:  SoftwareTranslations;
  portfolioTranslations: PortfolioTranslations;
  contactTranslations:   ContactTranslations;
  privacyTranslations:   PrivacyTranslations;
  termsTranslations:     TermsTranslations;
  navTranslations:       NavTranslations;
  footerTranslations:    FooterTranslations;

  // Generic field updater
  updateField: (page: AnyPageKey, key: string, lang: "id" | "en", value: any) => void;
  // Legacy alias for home page (keeps existing code working)
  updateHomeField: (key: keyof HomeTranslations, lang: "id" | "en", value: string) => void;

  publishChanges: () => Promise<boolean>;
  resetDefaults: () => Promise<boolean>;
  activeEditKey: string | null;
  setActiveEditKey: (key: string | null) => void;
  isSaving: boolean;
}

const CmsContext = createContext<CmsContextType | null>(null);

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCmsMode, setIsCmsMode] = useState(false);
  const [activeEditKey, setActiveEditKey] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Per-page translation states
  const [homeTranslations,      setHomeTranslations]      = useState<HomeTranslations>(defaultTranslations.home);
  const [aboutTranslations,     setAboutTranslations]     = useState<AboutTranslations>(defaultTranslations.about);
  const [servicesTranslations,  setServicesTranslations]  = useState<ServicesTranslations>(defaultTranslations.services);
  const [roboticsTranslations,  setRoboticsTranslations]  = useState<RoboticsTranslations>(defaultTranslations.robotics);
  const [biomedicTranslations,  setBiomedicTranslations]  = useState<BiomedicTranslations>(defaultTranslations.biomedic);
  const [softwareTranslations,  setSoftwareTranslations]  = useState<SoftwareTranslations>(defaultTranslations.software);
  const [portfolioTranslations, setPortfolioTranslations] = useState<PortfolioTranslations>(defaultTranslations.portfolio);
  const [contactTranslations,   setContactTranslations]   = useState<ContactTranslations>(defaultTranslations.contact);
  const [privacyTranslations,   setPrivacyTranslations]   = useState<PrivacyTranslations>(defaultTranslations.privacy);
  const [termsTranslations,     setTermsTranslations]     = useState<TermsTranslations>(defaultTranslations.terms);
  const [navTranslations,       setNavTranslations]       = useState<NavTranslations>(defaultTranslations.nav);
  const [footerTranslations,    setFooterTranslations]    = useState<FooterTranslations>(defaultTranslations.footer);

  const setterMap: Record<AnyPageKey, React.Dispatch<React.SetStateAction<any>>> = {
    home:      setHomeTranslations,
    about:     setAboutTranslations,
    services:  setServicesTranslations,
    robotics:  setRoboticsTranslations,
    biomedic:  setBiomedicTranslations,
    software:  setSoftwareTranslations,
    portfolio: setPortfolioTranslations,
    contact:   setContactTranslations,
    privacy:   setPrivacyTranslations,
    terms:     setTermsTranslations,
    nav:       setNavTranslations,
    footer:    setFooterTranslations,
  };

  // Load overrides from server + localStorage on mount & listen to auth
  useEffect(() => {
    // 1. Check current session (Supabase cookie-based)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setIsLoggedIn(true);
    });

    // 2. Listen to Auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    const applyOverrides = (overrides: Record<string, any>) => {
      (Object.keys(setterMap) as AnyPageKey[]).forEach((page) => {
        if (overrides[page]) {
          setterMap[page]((prev: any) => ({ ...prev, ...overrides[page] }));
        }
      });
    };

    const loadTranslations = async () => {
      try {
        const localOverrides = localStorage.getItem("lti-cms-overrides");
        if (localOverrides) {
          applyOverrides(JSON.parse(localOverrides));
        }

        const res = await fetch("/api/save-translations");
        if (res.ok) {
          const serverOverrides = await res.json();
          applyOverrides(serverOverrides);
          localStorage.setItem("lti-cms-overrides", JSON.stringify(serverOverrides));
        }
      } catch (err) {
        console.error("Failed to load translation overrides:", err);
      }
    };

    loadTranslations();

    return () => {
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginWithOAuth = async (provider: "github" | "google"): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/admin`,
        },
      });
      if (error) throw error;
      return true;
    } catch (err) {
      console.error(`OAuth login failed with provider ${provider}:`, err);
      return false;
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setIsCmsMode(false);
    localStorage.removeItem("lti-cms-overrides");
    await supabase.auth.signOut();
    // Redirect to login after logout
    window.location.href = "/admin/login";
  };

  // Generic field updater — works for any page
  const updateField = (page: AnyPageKey, key: string, lang: "id" | "en", value: any) => {
    setterMap[page]((prev: any) => {
      const fieldData = prev[key];
      if (typeof fieldData === "object" && fieldData !== null && !Array.isArray(fieldData)) {
        return { ...prev, [key]: { ...fieldData, [lang]: value } };
      }
      return prev;
    });
  };

  // Legacy alias — keeps existing home page admin code working without changes
  const updateHomeField = (key: keyof HomeTranslations, lang: "id" | "en", value: string) => {
    updateField("home", key as string, lang, value);
  };

  const publishChanges = async (): Promise<boolean> => {
    setIsSaving(true);
    try {
      const overrides = {
        home:      homeTranslations,
        about:     aboutTranslations,
        services:  servicesTranslations,
        robotics:  roboticsTranslations,
        biomedic:  biomedicTranslations,
        software:  softwareTranslations,
        portfolio: portfolioTranslations,
        contact:   contactTranslations,
        privacy:   privacyTranslations,
        terms:     termsTranslations,
        nav:       navTranslations,
        footer:    footerTranslations,
      };

      localStorage.setItem("lti-cms-overrides", JSON.stringify(overrides));

      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      const res = await fetch("/api/save-translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(overrides),
      });

      setIsSaving(false);
      return res.ok;
    } catch (err) {
      console.error("Failed to publish changes:", err);
      setIsSaving(false);
      return false;
    }
  };

  const resetDefaults = async (): Promise<boolean> => {
    setIsSaving(true);
    try {
      localStorage.removeItem("lti-cms-overrides");
      setHomeTranslations(defaultTranslations.home);
      setAboutTranslations(defaultTranslations.about);
      setServicesTranslations(defaultTranslations.services);
      setRoboticsTranslations(defaultTranslations.robotics);
      setBiomedicTranslations(defaultTranslations.biomedic);
      setSoftwareTranslations(defaultTranslations.software);
      setPortfolioTranslations(defaultTranslations.portfolio);
      setContactTranslations(defaultTranslations.contact);
      setPrivacyTranslations(defaultTranslations.privacy);
      setTermsTranslations(defaultTranslations.terms);
      setNavTranslations(defaultTranslations.nav);
      setFooterTranslations(defaultTranslations.footer);

      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      const res = await fetch("/api/save-translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({}),
      });

      setIsSaving(false);
      return res.ok;
    } catch (err) {
      console.error("Failed to reset defaults:", err);
      setIsSaving(false);
      return false;
    }
  };

  return (
    <CmsContext.Provider
      value={{
        isLoggedIn,
        loginWithOAuth,
        logout,
        isCmsMode,
        setIsCmsMode,
        homeTranslations,
        aboutTranslations,
        servicesTranslations,
        roboticsTranslations,
        biomedicTranslations,
        softwareTranslations,
        portfolioTranslations,
        contactTranslations,
        privacyTranslations,
        termsTranslations,
        navTranslations,
        footerTranslations,
        updateField,
        updateHomeField,
        publishChanges,
        resetDefaults,
        activeEditKey,
        setActiveEditKey,
        isSaving,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error("useCms must be used within a CmsProvider");
  }
  return context;
}
