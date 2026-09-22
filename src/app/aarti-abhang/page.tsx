"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { aartiCollection } from "@/data/aarti";
import { Music, ArrowLeft, BookOpen, ScrollText } from "lucide-react";

export default function AartiAbhangPage() {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState(aartiCollection[0].id);

  const activeItem = aartiCollection.find((item) => item.id === activeId) || aartiCollection[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

        <div className="inline-block bg-amber-100 text-temple-maroon px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300 font-devanagari">
          एकनाथी भागवत परंपरा • नित्य पठण
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {language === "mr" ? "वासुदेव आरती व अभंग साहित्य" : "Vasudev Aarti & Abhang Literature"}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {language === "mr"
            ? "श्री वासुदेवाची पारंपरिक महाआरती, संत एकनाथ महाराजांचे प्रसिद्ध वासुदेव अभंग व वासुदेव महामंत्र."
            : "Traditional Shree Vasudev Aarti, Sant Eknath Maharaj's Abhangs, and sacred Krishna Mahamantras."}
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-3">
        {aartiCollection.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`px-5 py-3 rounded-2xl text-base font-bold font-devanagari transition-all shadow-md flex items-center space-x-2 ${
              activeId === item.id
                ? "bg-temple-maroon text-amber-100 border-2 border-temple-gold"
                : "bg-white text-gray-700 hover:bg-amber-100 border border-amber-300"
            }`}
          >
            <Music className="w-4 h-4 text-temple-gold" />
            <span>{item.title[language]}</span>
          </button>
        ))}
      </div>

      {/* Lyrics Display Box */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border-4 border-temple-gold space-y-6 text-center">
        <div className="space-y-1">
          <div className="inline-block px-3 py-1 bg-amber-100 text-temple-saffron rounded-full text-xs font-bold font-mono">
            {activeItem.category[language]}
          </div>
          <h2 className="text-3xl font-black text-temple-maroon font-devanagari">
            {activeItem.title[language]}
          </h2>
          {activeItem.author && (
            <p className="text-sm font-semibold text-amber-700 font-devanagari">
              रचना: {activeItem.author[language]}
            </p>
          )}
        </div>

        <div className="py-6 space-y-6 text-lg sm:text-xl font-medium text-gray-800 font-devanagari leading-loose whitespace-pre-line border-y-2 border-amber-100">
          {activeItem.verses.map((verse, vIdx) => (
            <div key={vIdx} className="p-3 hover:bg-amber-50 rounded-xl transition-colors">
              {verse}
            </div>
          ))}
        </div>

        <div className="text-xs text-amber-800 font-devanagari">
          ॥ श्री वासुदेव प्रसन्न ॥ • वाटेगाव (सांगली)
        </div>
      </div>
    </div>
  );
}


