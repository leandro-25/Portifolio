import type { Metadata } from "next";
import { Unbounded, Anton, Inter } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const outline = Anton({
  variable: "--font-outline",
  subsets: ["latin"],
  weight: "400",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leandro Mariano Jr. — Analista de Dados & IA",
  description: "Transformo dados em decisões que geram resultado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`h-full antialiased ${display.variable} ${outline.variable} ${sans.variable}`}>
      <body className="min-h-full flex flex-col bg-[#EEEEEE] text-[#303841]">{children}</body>
    </html>
  );
}
