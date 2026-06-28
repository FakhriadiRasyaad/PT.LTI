"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, ArrowLeft, User, Key, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Helper to map username to internal email structure if no @ is present
  const getEmailFromUsername = (input: string) => {
    const trimmed = input.trim();
    if (trimmed.includes("@")) {
      return trimmed;
    }
    return `${trimmed.toLowerCase()}@lti.company`;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Username/email dan password wajib diisi");
      return;
    }

    setIsLoading(true);
    const supabase = createClient();
    const email = getEmailFromUsername(username);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
        setIsLoading(false);
        return;
      }

      // Successful login - redirect to admin page
      window.location.href = "/admin";
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat masuk");
      setIsLoading(false);
    }
  };

  return (
    <div
      id="cms-login-overlay"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D1424",
        backgroundImage: "linear-gradient(135deg, #0D1424 0%, #15223D 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#111B30",
          border: "1px solid rgba(201, 168, 76, 0.3)",
          borderRadius: "12px",
          padding: "45px 40px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.4)",
          fontFamily: "var(--font-jost), 'Helvetica Neue', Arial, sans-serif",
          color: "#FFFFFF",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "rgba(201, 168, 76, 0.12)",
              color: "#C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Lock size={28} />
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "30px",
              color: "#C9A84C",
              fontWeight: 400,
              margin: 0,
            }}
          >
            PT. LTI CMS Portal
          </h1>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.55)",
              marginTop: "8px",
            }}
          >
            Masuk dengan akun Admin untuk mengelola konten website
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "6px",
              }}
            >
              Username / Email
            </label>
            <div style={{ position: "relative" }}>
              <User
                size={16}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "14px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username atau email"
                style={{
                  width: "100%",
                  backgroundColor: "#0D1424",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "6px",
                  padding: "12px 12px 12px 38px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <Key
                size={16}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "14px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                style={{
                  width: "100%",
                  backgroundColor: "#0D1424",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "6px",
                  padding: "12px 12px 12px 38px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Alert Messages */}
          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#EF4444",
                fontSize: "13px",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                marginBottom: "16px",
              }}
            >
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #9B7A2E 0%, #C9A84C 100%)",
              color: "#1A2744",
              fontWeight: 600,
              fontSize: "14px",
              padding: "12px",
              borderRadius: "6px",
              cursor: isLoading ? "not-allowed" : "pointer",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? "Memproses Masuk..." : "Masuk ke Panel"}
          </button>
        </form>

        {/* Back Link */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Link
            href="/"
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.4)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowLeft size={12} /> Kembali ke Website
          </Link>
        </div>
      </div>
    </div>
  );
}
