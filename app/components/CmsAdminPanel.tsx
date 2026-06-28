"use client";

import React from "react";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function CmsAdminPanel() {
  return (
    <Link
      id="cms-floating-trigger"
      href="/admin"
      className="cms-floating-btn"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)",
        color: "#1A2744",
        borderRadius: "50px",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 20px rgba(201, 168, 76, 0.4)",
        fontWeight: 600,
        fontSize: "12px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontFamily: "var(--font-jost)",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Settings size={16} className="animate-spin-slow" />
      CMS Admin
    </Link>
  );
}
