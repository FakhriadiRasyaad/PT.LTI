import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { CmsProvider } from "./context/CmsContext";
import LayoutWrapper from "./components/LayoutWrapper";

export const metadata: Metadata = {
  title: "PT.LTI | Robotics · Healthcare · Software",
  description: "Leading provider of advanced robotics, healthcare equipment, and enterprise software solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <CmsProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CmsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

