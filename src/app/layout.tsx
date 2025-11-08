import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const manrope = Manrope({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Методика Огороднова — настройте свой главный инструмент",
    template: "%s · Методика Огороднова",
  },
  description:
    "Современная экосистема методики Огороднова: голос, движение и дыхание для детей, профессионалов, руководителей и терапевтов. Интерактивная лаборатория, курсы и комьюнити.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${playfair.variable} bg-neutral-50 text-brand-slate antialiased`}
      >
        <div className="min-h-screen bg-hero-gradient">
          <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col">
            <div className="flex flex-1 flex-col bg-white/80 shadow-[0_40px_80px_-60px_rgba(31,60,136,0.45)]">
              <SiteHeader />
              <main className="flex-1 px-0">{children}</main>
            </div>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
