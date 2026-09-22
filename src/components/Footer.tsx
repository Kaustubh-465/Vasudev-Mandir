"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, MapPin } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-temple-maroon to-amber-950 text-amber-100 border-t-4 border-temple-gold/60 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-amber-800/60">
          {/* Column 1: Temple Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🛕</span>
              <div>
                <h2 className="text-xl font-bold text-amber-200">
                  {language === "mr" ? "श्री वासुदेव मंदिर, वाटेगाव" : "Shree Vasudev Mandir, Wategaon"}
                </h2>
                <p className="text-xs text-amber-400 font-devanagari">
                  {language === "mr" ? "॥ ॐ नमो भगवते वासुदेवाय ॥" : "॥ Om Namo Bhagavate Vasudevaya ॥"}
                </p>
              </div>
            </div>
            <p className="text-sm text-amber-200/80 leading-relaxed font-devanagari">
              {language === "mr"
                ? "भोगावती नदीच्या पवित्र तीरावर स्थित श्री वासुदेव देवस्थान. गाभाऱ्यातील पंचधातूची श्रीकृष्ण मूर्ती व सागवानी लाकडी सभामंडप हे वातेगावचे मुख्य आध्यात्मिक स्थान आहे."
                : "Sacred shrine of Shree Vasudev on the banks of Bhogawati river. Features a Panchadhatu Krishna idol & teakwood assembly hall."}
            </p>
            <div className="inline-flex items-center space-x-2 bg-amber-900/60 px-3 py-1.5 rounded-full text-xs text-amber-300 border border-amber-600/40 font-devanagari">
              <Landmark className="w-4 h-4 text-temple-gold" />
              <span>{language === "mr" ? "दिवेकर घराण्याचे कुलदैवत" : "Kuldaivat of Divekar Family"}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-4 border-b border-amber-700/50 pb-2">
              {language === "mr" ? "महत्त्वाची दालने" : "Quick Links"}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-devanagari">
              <li>
                <Link href="/history" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "मंदिराचा इतिहास" : "Temple History"}</span>
                </Link>
              </li>
              <li>
                <Link href="/who-is-vasudev" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "वासुदेव स्वरूप (श्रीकृष्ण)" : "Who is Vasudev?"}</span>
                </Link>
              </li>
              <li>
                <Link href="/deepotsav" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "भव्य दीपोत्सव सोहळा" : "Deepotsav Festival"}</span>
                </Link>
              </li>
              <li>
                <Link href="/aarti-abhang" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "आरती व अभंग" : "Aarti & Hymns"}</span>
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-temple-gold transition-colors flex items-center space-x-2">
                  <span>▸</span>
                  <span>{language === "mr" ? "कसे पोहोचावे" : "Location & Map"}</span>
                </Link>
              </li>
            </ul>
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
          <div className="flex items-center space-x-2 font-devanagari">
            <span>॥ ॐ नमो भगवते वासुदेवाय ॥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
