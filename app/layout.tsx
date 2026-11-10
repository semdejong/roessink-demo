import type { Metadata, Viewport } from "next";
import { Libre_Franklin, Zilla_Slab } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const zilla = Zilla_Slab({
  subsets: ["latin", "latin-ext"],
  weight: "700",
  variable: "--font-zilla",
  display: "swap",
});

const libre = Libre_Franklin({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | Roessink Schilderwerken",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = { themeColor: content.colors.primary };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={content.seo.lang} style={themeVars} className={`${zilla.variable} ${libre.variable} h-full antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header nav={content.nav} phone={content.contact.phoneDisplay} phoneHref={content.contact.phoneHref} />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
