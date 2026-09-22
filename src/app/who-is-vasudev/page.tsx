"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { vasudevCitations } from "@/data/citations";
import { BookOpen, Sparkles, ArrowLeft } from "lucide-react";

export default function WhoIsVasudevPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors font-devanagari"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

        <div className="inline-block bg-amber-100 text-temple-maroon px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300 font-devanagari">
          ॥ ॐ नमो भगवते वासुदेवाय ॥ • स्वरूप व आध्यात्मिक महत्त्व
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {language === "mr" ? "श्री वासुदेव स्वरूप व महत्त्व" : "Form & Significance of Shri Vasudev"}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {language === "mr"
            ? "वाटेगाव येथील भक्तिमय श्री वासुदेव मंदिर, दिवेकर खाजगी देवस्थान ट्रस्ट, भगवान वासुदेवांचे सर्वव्यापी चैतन्य व उत्सव."
            : "Devotional sanctuary of Shri Vasudev Mandir Wategaon, Divekar private devasthan trust, divine consciousness, and celebrations."}
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10">
        {vasudevCitations.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border-2 border-amber-200 hover:border-temple-gold transition-all space-y-6"
          >
            <div className="border-b border-amber-200 pb-4 space-y-1">
              <div className="flex items-center space-x-2 text-temple-saffron font-bold text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{section.subtitle[language]}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-temple-maroon font-devanagari">
                {section.title[language]}
              </h2>
            </div>

            <div className="space-y-4 text-gray-800 font-devanagari leading-relaxed text-base sm:text-lg">
              {section.content.map((para, pIdx) => (
                <p key={pIdx}>{para[language]}</p>
              ))}
            </div>

            {section.bullets && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {section.bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="bg-gradient-to-br from-amber-50 to-amber-100/60 p-6 rounded-2xl border border-amber-300/80 space-y-2"
                  >
                    <h3 className="text-lg font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
                      <span className="text-temple-saffron text-lg">✦</span>
                      <span>{b.heading[language]}</span>
                    </h3>
                    <p className="text-sm text-gray-700 font-devanagari leading-relaxed">
                      {b.detail[language]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
