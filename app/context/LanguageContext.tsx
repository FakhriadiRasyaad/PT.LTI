"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "id" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("lti-lang") as Lang | null;
    if (stored === "id" || stored === "en") setLang(stored);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "id" ? "en" : "id";
      localStorage.setItem("lti-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
