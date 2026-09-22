"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, MapPin, QrCode, Heart } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-temple-maroon to-amber-950 text-amber-100 border-t-4 border-temple-gold/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-amber-800/60">
          {/* Column 1: Temple Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🛕</span>
              <div>
                <h2 className="text-xl font-bold text-amber-200">
                  {language === "mr" ? "श्री वासुदेव मंदिर, वाटेगाव" : "Shree Vasudev Mandir, Wategaon"}
                </h2>
                <p className="text-xs text-amber-400 font-devanagari">
                  {language === "mr" ? "एकनाथी भागवत संप्रदाय स्थान" : "Eknathi Bhagwat Sampradaya Heritage"}
                </p>
              </div>
            </div>
            <p className="text-sm text-amber-200/80 leading-relaxed font-devanagari mb-4">
              {language === "mr"
                ? "भोगावती नदीच्या तीरावर वसलेले सुमारे २०० वर्षांचे एकमेव ऐतिहासिक वासुदेव मंदिर. गाभाऱ्यातील पंचधातूची श्रीकृष्ण मूर्ती व सागवानी मंडप हे वाटेगावचे मुख्य आध्यात्मिक वैभव आहे."
                : "A 200-year-old unique historical Vasudev shrine on the banks of Bhogawati river. Features a sacred Panchadhatu Krishna idol & pure teakwood mandap."}
            </p>
            <div className="inline-flex items-center space-x-2 bg-amber-900/60 px-3 py-1.5 rounded-full text-xs text-amber-300 border border-amber-600/40">
              <Landmark className="w-4 h-4 text-temple-gold" />
              <span>{language === "mr" ? "दिवेकर घराण्याचे कुलदैवत" : "Kuldaivat of Divekar Family"}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-4 border-b border-amber-700/50 pb-2">
              {language === "mr" ? "महत्त्वाची दालने" : "Quick Links"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/history" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "मंदिराचा ऐतिहासिक इतिहास" : "Temple 200-Year History"}</span>
                </Link>
              </li>
              <li>
                <Link href="/who-is-vasudev" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "वासुदेव कोण आहेत? (एकनाथी भागवत)" : "Who is Vasudev? (Citations)"}</span>
                </Link>
              </li>
              <li>
                <Link href="/deepotsav" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "भव्य महिन्याचा दीपोत्सव सोहळा" : "Month-long Deepotsav Festival"}</span>
                </Link>
              </li>
              <li>
                <Link href="/aarti-abhang" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "वासुदेव आरती व संत एकनाथ अभंग" : "Aarti & Eknath Maharaj Abhangs"}</span>
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "कसे पोहोचावे व नकाशा" : "Directions & Google Maps"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Temple QR Code Placement Note */}
          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-4 border-b border-amber-700/50 pb-2 flex items-center space-x-2">
              <QrCode className="w-5 h-5 text-temple-gold" />
              <span>{language === "mr" ? "मंदिरात लावण्यासाठी QR कोड" : "Printable QR Code for Temple"}</span>
            </h3>
            <p className="text-sm text-amber-200/80 leading-relaxed mb-4">
              {language === "mr"
                ? "मंदिराच्या प्रवेशद्वारावर लावण्यासाठी प्रिंट-रेडी QR कोड बनवून डाउनलोड करा. भाविक मोबाईलने स्कॅन करून सर्व माहिती वाचू शकतात."
                : "Generate and print high-resolution QR codes to place at the temple entrance for visiting devotees."}
            </p>
            <Link
              href="/qr-code"
              className="inline-flex items-center space-x-2 bg-temple-gold hover:bg-amber-400 text-temple-maroon font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md"
            >
              <QrCode className="w-4 h-4" />
              <span>{language === "mr" ? "QR कोड बोर्ड डाऊनलोड करा" : "Generate Temple QR Board"}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/70 space-y-3 sm:space-y-0">
          <p className="font-devanagari">
            © {new Date().getFullYear()}{" "}
            {language === "mr"
              ? "श्री वासुदेव मंदिर देवस्थान, वाटेगाव (जि. सांगली). सर्व हक्क राखीव."
              : "Shree Vasudev Mandir Devasthan, Wategaon (Sangli). All rights reserved."}
          </p>
          <div className="flex items-center space-x-1">
            <span>{language === "mr" ? "Vercel वर डिप्लॉयमेंट साठी तयार" : "Ready for Vercel Deployment"}</span>
            <span className="text-amber-500">•</span>
            <span>॥ एका जनार्दनी ॥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

