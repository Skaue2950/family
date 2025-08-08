
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "FAMILY — Din AI‑baserede familieassistent",
  description: "AI der planlægger måltider, styrer kalendere, husker fødselsdage og automatiserer opgaver — samlet ét sted.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "FAMILY — Din AI‑baserede familieassistent",
    description: "AI der planlægger måltider, styrer kalendere, husker fødselsdage og automatiserer opgaver — samlet ét sted.",
    images: ["/og.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
