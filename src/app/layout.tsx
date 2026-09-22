import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "श्री वासुदेव मंदिर, वाटेगाव | Shree Vasudev Mandir Wategaon",
  description:
    "सांगली जिल्ह्यातील वाटेगाव येथील २०० वर्षांचे ऐतिहासिक व भारतातील एकमेव वासुदेव मंदिर. एकनाथी भागवत संप्रदाय स्थान, दीपोत्सव व इतिहास माहिती.",
  keywords: [
    "Vasudev Mandir Wategaon",
    "श्री वासुदेव मंदिर वाटेगाव",
    "वाटेगाव सांगली",
    "Eknathi Bhagwat Sampradaya",
    "एकनाथी भागवत",
    "Divekar Kuldaivat",
    "Deepotsav Wategaon",
    "Vasudev Mandir History",
    "श्रीकृष्ण मंदिर",
  ],
  authors: [{ name: "Vasudev Mandir Devasthan Wategaon" }],
  openGraph: {
    title: "श्री वासुदेव मंदिर, वाटेगाव | Shree Vasudev Mandir Wategaon",
    description:
      "भारतातील एकमेव वासुदेव मंदिर • एकनाथी भागवत संप्रदाय स्थान • २०० वर्षांची परंपरा",
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
    <html lang="mr" className={`${mukta.variable}`}>
      <body className="min-h-screen flex flex-col font-devanagari bg-temple-warmBg text-gray-900 selection:bg-temple-gold selection:text-temple-maroon">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

