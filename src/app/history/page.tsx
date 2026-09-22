"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { templeHistory } from "@/data/history";
import { ScrollText, ArrowLeft, Clock, Landmark } from "lucide-react";

export default function HistoryPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors font-devanagari"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

        <div className="inline-block bg-amber-100 text-temple-maroon px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300 font-devanagari">
          ऐतिहासिक परंपरा • दिवेकर कुलदैवत
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {templeHistory.title[language]}
        </h1>
      </div>

      {/* Main Narrative */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border-2 border-amber-200 space-y-6">
        <h2 className="text-2xl font-bold text-temple-maroon font-devanagari border-b border-amber-200 pb-3 flex items-center space-x-2">
          <Landmark className="w-6 h-6 text-temple-saffron" />
          <span>{language === "mr" ? "मंदिराची ऐतिहासिक पार्श्वभूमी" : "Temple History"}</span>
        </h2>

        <div className="space-y-4 text-gray-700 font-devanagari leading-relaxed text-base sm:text-lg">
          {templeHistory.paragraphs.map((para, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: para[language] }} />
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-amber-900 text-white p-6 rounded-2xl shadow-md border-2 border-temple-gold space-y-2">
          <div className="text-3xl">🪵</div>
          <h3 className="text-xl font-bold font-devanagari text-amber-200">
            {language === "mr" ? "सागवानी लाकडी मंडप" : "Teakwood Mandap"}
          </h3>
          <p className="text-sm text-amber-100/80 font-devanagari leading-relaxed">
            {language === "mr"
              ? "मंदिराचा ६० फूट लांब व ३० फूट रुंद सभामंडप हा दुर्मीळ सागवानी लाकडापासून बनवलेला आहे."
              : "60ft long by 30ft wide assembly hall crafted from pure teakwood."}
          </p>
        </div>

        <div className="bg-temple-maroon text-white p-6 rounded-2xl shadow-md border-2 border-temple-gold space-y-2">
          <div className="text-3xl">🛕</div>
          <h3 className="text-xl font-bold font-devanagari text-amber-200">
            {language === "mr" ? "५० फूट नक्षीदार शिखर" : "50ft High Shikhara"}
          </h3>
          <p className="text-sm text-amber-100/80 font-devanagari leading-relaxed">
            {language === "mr"
              ? "५० फूट उंच भव्य शिखर जे दीपोत्सावाच्या काळात दिव्यांनी उजळून निघते."
              : "Imposing 50-foot temple spire illuminated during annual Deepotsav."}
          </p>
        </div>

        <div className="bg-amber-950 text-white p-6 rounded-2xl shadow-md border-2 border-temple-gold space-y-2">
          <div className="text-3xl">✨</div>
          <h3 className="text-xl font-bold font-devanagari text-amber-200">
            {language === "mr" ? "पंचधातू श्रीकृष्ण मूर्ती" : "Panchadhatu Idol"}
          </h3>
          <p className="text-sm text-amber-100/80 font-devanagari leading-relaxed">
            {language === "mr"
              ? "गाभाऱ्यातील शांत, प्रसन्न हास्यमुद्रेतील पंचधातूची श्रीकृष्ण मूर्ती."
              : "Panchadhatu five-metal idol reflecting Lord Krishna's divine smiling posture."}
          </p>
        </div>
      </div>

      {/* Historical Timeline */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200 space-y-6">
        <h2 className="text-2xl font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
          <Clock className="w-6 h-6 text-temple-saffron" />
          <span>{language === "mr" ? "ऐतिहासिक टप्पे" : "Historical Phases"}</span>
        </h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-amber-300">
          {templeHistory.timeline.map((item, tIdx) => (
            <div key={tIdx} className="relative pl-10 space-y-1">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-temple-saffron text-white flex items-center justify-center font-bold text-xs shadow-md">
                ✓
              </div>
              <div className="text-xs font-bold text-temple-saffron font-mono">
                {item.period[language]}
              </div>
              <h3 className="text-lg font-bold text-temple-maroon font-devanagari">
                {item.event[language]}
              </h3>
              <p className="text-sm text-gray-600 font-devanagari leading-relaxed">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
