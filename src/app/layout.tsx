import type { Metadata, Viewport } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#78350F",
};

export const metadata: Metadata = {
  title: "श्री वासुदेव मंदिर, वाटेगाव | Shree Vasudev Mandir Wategaon",
  description:
    "वाटेगाव (जि. सांगली) येथील भोगावती नदीच्या तीरावर स्थित श्री वासुदेव मंदिर माहिती, इतिहास, दीपोत्सव व वासुदेव स्वरूप.",
  keywords: [
    "Vasudev Mandir Wategaon",
    "श्री वासुदेव मंदिर वाटेगाव",
    "वाटेगाव सांगली",
    "Divekar Kuldaivat",
    "Deepotsav Wategaon",
    "Vasudev Mandir History",
    "श्रीकृष्ण मंदिर",
  ],
  authors: [{ name: "Vasudev Mandir Devasthan Wategaon" }],
  openGraph: {
    title: "श्री वासुदेव मंदिर, वाटेगाव | Shree Vasudev Mandir Wategaon",
    description:
      "वाटेगाव (जि. सांगली) येथील श्री वासुदेव मंदिर अधिकृत माहिती संकेतस्थळ",
    locale: "mr_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className={`${mukta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-devanagari bg-temple-warmBg text-gray-900 selection:bg-temple-gold selection:text-temple-maroon antialiased text-rendering-optimizeLegibility">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
