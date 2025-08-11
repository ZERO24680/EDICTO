import type { Metadata } from "next";
import { Public_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/(components)/Header";
import { Footer } from "@/app/(components)/Footer";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EDICTO — The official register of verified statements.",
  description: "Public register of verified statements from organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${ebGaramond.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
