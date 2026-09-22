"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { templeData } from "@/data/templeInfo";
import { vasudevCitations } from "@/data/citations";
import {
  Flame,
  ScrollText,
  BookOpen,
  MapPin,
  QrCode,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Crown,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-temple-maroon via-temple-deepRed to-amber-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-temple-gold overflow-hidden">
        {/* Background Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          {/* Sacred Mantra Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-md px-5 py-2 rounded-full border border-temple-gold/60 text-amber-200 text-sm font-semibold tracking-wider shadow-inner">
            <Sparkles className="w-4 h-4 text-temple-gold animate-pulse" />
            <span>॥ एका जनार्दनी ॥ • एकनाथी भागवत संप्रदाय</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-amber-100 font-devanagari tracking-tight leading-tight drop-shadow-md">
            {templeData.title[language]}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-bold text-temple-gold font-devanagari max-w-3xl mx-auto">
            {templeData.subtitle[language]}
          </p>

          <p className="text-base sm:text-lg text-amber-200/90 font-devanagari max-w-2xl mx-auto leading-relaxed">
            {templeData.tagline[language]}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto">
            {templeData.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-amber-950/70 backdrop-blur-sm p-4 rounded-xl border border-amber-500/30 text-center space-y-1 shadow-md"
              >
                <div className="text-xs text-amber-300/80 font-medium">
                  {stat.label[language]}
                </div>
                <div className="text-base sm:text-lg font-bold text-amber-100 font-devanagari">
                  {stat.value[language]}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/who-is-vasudev"
              className="px-6 py-3.5 bg-temple-gold hover:bg-amber-400 text-temple-maroon font-extrabold rounded-xl shadow-xl transition-all flex items-center space-x-2 text-base"
            >
              <BookOpen className="w-5 h-5" />
              <span>{language === "mr" ? "वासुदेव कोण आहेत? (संदर्भ)" : "Who is Vasudev? (Citations)"}</span>
            </Link>

            <Link
              href="/deepotsav"
              className="px-6 py-3.5 bg-amber-900/80 hover:bg-amber-900 text-amber-100 font-bold rounded-xl border border-amber-500/50 shadow-lg transition-all flex items-center space-x-2 text-base"
            >
              <Flame className="w-5 h-5 text-temple-gold" />
              <span>{language === "mr" ? "दीविोत्सव माहिती" : "Deepotsav Details"}</span>
            </Link>

            <Link
              href="/qr-code"
              className="px-6 py-3.5 bg-temple-saffron hover:bg-temple-darkSaffron text-white font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2 text-base"
            >
              <QrCode className="w-5 h-5" />
              <span>{language === "mr" ? "मंदिराचा QR कोड" : "Temple QR Code"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section: Eknathi Bhagwat Sampradaya & Lord Krishna Identity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-temple-gold/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-temple-maroon px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300">
                <Crown className="w-4 h-4 text-temple-saffron" />
                <span>{language === "mr" ? "विशेष धार्मिक संदर्भ (Citations)" : "Spiritual Citations"}</span>
              </div>

              <h2 className="text-3xl font-black text-temple-maroon font-devanagari">
                {language === "mr"
                  ? "एकनाथी भागवत संप्रदाय व साक्षात श्रीकृष्ण रूप"
                  : "Eknathi Bhagwat Sampradaya & Lord Krishna Identity"}
              </h2>

              <p className="text-gray-700 leading-relaxed font-devanagari text-base sm:text-lg">
                {language === "mr"
                  ? "हे मंदिर संत एकनाथ महाराजांच्या 'एकनाथी भागवत संप्रदायानुसार' चालते. गाभाऱ्यातील पंचधातूची मूर्ती ही एकनाथी भागवतातील श्रीकृष्णाच्या वर्णनानुसार घडवण्यात आलेली आहे. भागवत संप्रदायात वासुदेव म्हणजेच साक्षात देवकी-वसुदेवांचा पुत्र भगवान श्रीकृष्ण!"
                  : "This sacred mandir follows the Eknathi Bhagwat Sampradaya traditions. The Panchadhatu idol's posture reflects Bhagwan Shri Krishna's divine form as extolled in Sant Eknath's scriptures."}
              </p>

              <div className="pt-2">
                <Link
                  href="/who-is-vasudev"
                  className="inline-flex items-center space-x-2 text-temple-saffron hover:text-temple-darkSaffron font-bold text-base group"
                >
                  <span>{language === "mr" ? "सविस्तर संदर्भ व अभंग वाचा" : "Read Complete Citations & Abhangs"}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-300/80 text-center space-y-3">
              <div className="text-4xl">🪈</div>
              <h3 className="text-xl font-bold text-temple-maroon font-devanagari">
                {language === "mr" ? "॥ वासुदेव सर्वमिति ॥" : "Vasudev Sarvamiti"}
              </h3>
              <p className="text-xs text-amber-900 font-devanagari leading-relaxed">
                {language === "mr"
                  ? "मस्तकी मोरपिसांची टोपी, हाती टाळ-चिपळ्या आणि 'दान पावलं!' असा गजर करत हरिनाम सांगणारा वासुदेव ही महाराष्ट्राची संत परंपरा आहे."
                  : "The iconic Maharashtrian Varkari Vasudev carrying peacock plume cap and cymbals spreading divine Harinam."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-temple-maroon font-devanagari">
            {language === "mr" ? "मंदिराची प्रमुख वैशिष्ट्ये" : "Temple Highlights"}
          </h2>
          <p className="text-gray-600 font-devanagari max-w-xl mx-auto">
            {language === "mr"
              ? "भोगावती नदीच्या तीरावर वसलेल्या या ऐतिहासिक देवस्थानाची काही प्रमुख वैशिष्ट्ये"
              : "Key features of this historic shrine on the banks of Bhogawati river"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templeData.keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg border border-amber-200 hover:border-temple-gold hover:shadow-xl transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-temple-saffron flex items-center justify-center font-bold text-xl">
                ✨
              </div>
              <h3 className="text-xl font-bold text-temple-maroon font-devanagari">
                {item.title[language]}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-devanagari">
                {item.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Quick Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-temple-maroon font-devanagari">
            {language === "mr" ? "माहिती दालने" : "Explore Temple Portal"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/history"
            className="group bg-gradient-to-br from-amber-900 to-temple-maroon text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all space-y-3 relative overflow-hidden border border-amber-600/40"
          >
            <ScrollText className="w-8 h-8 text-temple-gold" />
            <h3 className="text-2xl font-bold font-devanagari group-hover:text-temple-gold transition-colors">
              {language === "mr" ? "मंदिराचा इतिहास" : "Temple History"}
            </h3>
            <p className="text-sm text-amber-200/80 font-devanagari leading-relaxed">
              {language === "mr"
                ? "भोगावती नदीकाठी २०० वर्षांपूर्वी झालेली मंदिर स्थापना, सागवानी लाकडी मंडप व स्थापत्य."
                : "200-year historical journey, teakwood mandap construction, and Divekar heritage."}
            </p>
            <div className="flex items-center space-x-1 text-temple-gold font-semibold text-sm pt-2">
              <span>{language === "mr" ? "पुढे वाचा" : "Read More"}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/deepotsav"
            className="group bg-gradient-to-br from-amber-600 to-temple-saffron text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all space-y-3 relative overflow-hidden border border-amber-400/40"
          >
            <Flame className="w-8 h-8 text-amber-200" />
            <h3 className="text-2xl font-bold font-devanagari group-hover:text-amber-100 transition-colors">
              {language === "mr" ? "महिन्याचा दीपोत्सव" : "Deepotsav Festival"}
            </h3>
            <p className="text-sm text-amber-100/90 font-devanagari leading-relaxed">
              {language === "mr"
                ? "कोजागिरी पौर्णिमा ते त्रिपुरारी पौर्णिमा दरम्यान हजारो पणत्यांच्या लखलखाटातील सोहळा."
                : "Month-long festival of traditional oil lamps and evening Aarti programs."}
            </p>
            <div className="flex items-center space-x-1 text-white font-semibold text-sm pt-2">
              <span>{language === "mr" ? "सोहळा वेळापत्रक" : "View Schedule"}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/qr-code"
            className="group bg-gradient-to-br from-amber-100 via-white to-amber-50 text-temple-maroon p-6 rounded-2xl shadow-lg border-2 border-temple-gold hover:shadow-2xl transition-all space-y-3 relative overflow-hidden"
          >
            <QrCode className="w-8 h-8 text-temple-saffron" />
            <h3 className="text-2xl font-bold font-devanagari group-hover:text-temple-saffron transition-colors">
              {language === "mr" ? "मंदिराचा QR कोड" : "Temple QR Code"}
            </h3>
            <p className="text-sm text-gray-700 font-devanagari leading-relaxed">
              {language === "mr"
                ? "मंदिरात लावण्यासाठी उच्च दर्जाचा QR कोड बोर्ड प्रिंट व डाऊनलोड करा."
                : "Print-ready QR board card generator to place at temple entry."}
            </p>
            <div className="flex items-center space-x-1 text-temple-saffron font-semibold text-sm pt-2">
              <span>{language === "mr" ? "प्रिंट तयार करा" : "Generate Print"}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

