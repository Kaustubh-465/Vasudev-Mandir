"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { vasudevCitations } from "@/data/citations";
import { BookOpen, ScrollText, Sparkles, CheckCircle, Quote, ArrowLeft } from "lucide-react";

export default function WhoIsVasudevPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Breadcrumb & Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

        <div className="inline-block bg-amber-100 text-temple-maroon px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300 font-devanagari">
          एकनाथी भागवत संप्रदाय • पौराणिक व सांस्कृतिक संदर्भ (Citations)
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {language === "mr" ? "वासुदेव कोण आहेत?" : "Who is Vasudev? (Citations & Identity)"}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {language === "mr"
            ? "वाटेगाव येथील मंदिरातील वासुदेवाची संकल्पना, एकनाथी भागवत संप्रदायातील स्थान, साक्षात श्रीकृष्ण रूप आणि महाराष्ट्रातील वासुदेव परंपरेचे सविस्तर संदर्भ."
            : "Detailed citations explaining Vasudev in Eknathi Bhagwat Sampradaya, Bhagwan Shri Krishna's divine incarnation, and Maharashtrian Varkari heritage."}
        </p>
      </div>

      {/* Main Highlights Card: Shri Krishna Identity */}
      <div className="bg-gradient-to-br from-amber-900 via-temple-maroon to-amber-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl border-4 border-temple-gold space-y-6 relative overflow-hidden">
        <div className="flex items-center space-x-3 text-temple-gold">
          <Sparkles className="w-8 h-8" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-devanagari">
            {language === "mr" ? "वासुदेव म्हणजेच साक्षात श्रीकृष्ण!" : "Vasudev is Bhagwan Shri Krishna Himself!"}
          </h2>
        </div>

        <div className="space-y-4 text-amber-100 font-devanagari text-base sm:text-lg leading-relaxed">
          <p>
            {language === "mr"
              ? "वाटेगाव येथील श्री वासुदेव मंदिर हे एकनाथी भागवत संप्रदायानुसार चालते. भागवत धर्मात वसुदेव आणि देवकीच्या पुत्राला 'वासुदेव' संबोधले जाते. त्यामुळे येथील वासुदेव म्हणजे दुसरे कोणी नसून साक्षात श्रीकृष्णच आहेत."
              : "The temple follows Eknathi Bhagwat Sampradaya. In Bhagwat tradition, the son of Vasudeva & Devaki is revered as 'Vasudev', confirming Him as Bhagwan Shri Krishna Himself."}
          </p>

          <p className="p-4 bg-amber-950/80 rounded-xl border border-amber-500/40 italic text-amber-200 text-sm sm:text-base">
            {language === "mr"
              ? "॥ गाभाऱ्यातील मूर्तीची ठेवण ही संत एकनाथ महाराजांनी 'एकनाथी भागवत' ग्रंथात वर्णन केलेल्या बालकृष्ण व वासुदेव श्रीकृष्णाच्या शांत, मंदस्मित आणि प्रसन्न भावमुद्रेनुसार आहे. ॥"
              : "The idol's serene posture (Murti Thevan) is crafted following Sant Eknath Maharaj's description of Lord Krishna in the sacred Eknathi Bhagwat."}
          </p>
        </div>
      </div>

      {/* Detailed Citations Sections */}
      <div className="space-y-10">
        {vasudevCitations.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200 hover:border-temple-gold transition-all space-y-6"
          >
            <div className="border-b border-amber-200 pb-4 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-temple-maroon font-devanagari">
                {section.title[language]}
              </h2>
              <p className="text-sm font-medium text-temple-saffron font-devanagari">
                {section.subtitle[language]}
              </p>
            </div>

            <div className="space-y-4 text-gray-700 font-devanagari leading-relaxed text-base">
              {section.content.map((para, idx) => (
                <p key={idx}>{para[language]}</p>
              ))}
            </div>

            {section.citationsList && (
              <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-300 space-y-3">
                <h3 className="text-base font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
                  <Quote className="w-4 h-4 text-temple-saffron" />
                  <span>{language === "mr" ? "उद्धृत संदर्भ व पुरावे (Citations)" : "Reference Citations"}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.citationsList.map((cite, cIdx) => (
                    <div key={cIdx} className="bg-white p-4 rounded-xl shadow-sm border border-amber-200 space-y-1">
                      <div className="text-xs font-bold text-temple-saffron font-mono">
                        {cite.source[language]}
                      </div>
                      <div className="text-sm text-gray-800 font-devanagari">
                        {cite.detail[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

