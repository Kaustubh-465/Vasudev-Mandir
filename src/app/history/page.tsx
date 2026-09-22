"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { templeHistory } from "@/data/history";
import { ScrollText, ArrowLeft, Clock, Calendar, Sparkles, Image as ImageIcon } from "lucide-react";

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
          ऐतिहासिक टप्पे • १८१४ ते आजपर्यंत
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {templeHistory.title[language]}
        </h1>
      </div>

      {/* Main Narrative */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border-2 border-amber-200 space-y-4">
        <h2 className="text-2xl font-bold text-temple-maroon font-devanagari border-b border-amber-200 pb-3 flex items-center space-x-2">
          <ScrollText className="w-6 h-6 text-temple-saffron" />
          <span>{language === "mr" ? "मंदिराची ऐतिहासिक पार्श्वभूमी" : "Temple Historical Background"}</span>
        </h2>

        <div className="space-y-4 text-gray-700 font-devanagari leading-relaxed text-base sm:text-lg">
          {templeHistory.paragraphs.map((para, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: para[language] }} />
          ))}
        </div>
      </div>

      {/* Historical Timeline */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200 space-y-6">
        <h2 className="text-2xl font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
          <Clock className="w-6 h-6 text-temple-saffron" />
          <span>{language === "mr" ? "ऐतिहासिक कालखंड (Historical Timeline)" : "Historical Timeline"}</span>
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-amber-300">
          {templeHistory.timeline.map((item, tIdx) => (
            <div key={tIdx} className="relative pl-10 space-y-1">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-temple-saffron text-white flex items-center justify-center font-bold text-xs shadow-md">
                ✓
              </div>
              <div className="text-xs font-bold text-temple-saffron font-mono bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
                {item.year}
              </div>
              <h3 className="text-xl font-bold text-temple-maroon font-devanagari">
                {item.title[language]}
              </h3>
              <p className="text-sm text-gray-700 font-devanagari leading-relaxed">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated Section: Mandir Sthapana Utsav */}
      <div className="bg-gradient-to-br from-amber-900 via-temple-maroon to-amber-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl border-4 border-temple-gold space-y-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-500/40 pb-4 gap-2">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 text-temple-gold font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{templeHistory.sthapanaUtsav.subtitle[language]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-devanagari text-amber-100">
              {templeHistory.sthapanaUtsav.title[language]}
            </h2>
          </div>
          <div className="px-4 py-2 bg-amber-500/20 rounded-xl border border-amber-400/40 text-xs font-bold text-amber-200 font-devanagari shrink-0">
            {templeHistory.sthapanaUtsav.duration[language]}
          </div>
        </div>

        <p className="text-amber-100 font-devanagari text-base sm:text-lg leading-relaxed">
          {language === "mr"
            ? "दरवर्षी फेब्रुवारी - मार्च दरम्यान मंदिरात ४ दिवसांचा भव्य मंदिर स्थापना उत्सव साजरा केला जातो. या काळात रात्री कीर्तन, रथोत्सव आणि भजनांचे आयोजन केले जाते."
            : "Every year in February - March, a 4-day Mandir Sthapana Utsav is organized featuring night Kirtan, Rathotsav, and Bhajans."}
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {templeHistory.sthapanaUtsav.events.map((evt, eIdx) => (
            <div
              key={eIdx}
              className="bg-amber-950/80 p-6 rounded-2xl border border-amber-500/40 space-y-2"
            >
              {evt.time && (
                <div className="text-xs font-bold text-temple-gold font-mono bg-amber-900/80 px-2.5 py-1 rounded-md inline-block">
                  ⏰ {evt.time[language]}
                </div>
              )}
              <h3 className="text-lg font-bold text-amber-100 font-devanagari">
                {evt.title[language]}
              </h3>
              <p className="text-xs text-amber-200/80 font-devanagari leading-relaxed">
                {evt.desc[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Photo Placeholder Note */}
        <div className="pt-4 border-t border-amber-800/60 flex items-center justify-between text-xs text-amber-300/80 font-devanagari">
          <div className="flex items-center space-x-2">
            <ImageIcon className="w-4 h-4 text-temple-gold" />
            <span>{language === "mr" ? "उत्सवातील छायाचित्रे (Photos Coming Soon)" : "Festival photos coming soon"}</span>
          </div>
          <span>॥ श्री वासुदेव प्रसन्न ॥</span>
        </div>
      </div>
    </div>
  );
}
