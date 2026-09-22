"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { templeData } from "@/data/templeInfo";
import {
  Flame,
  ScrollText,
  BookOpen,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-temple-maroon via-temple-deepRed to-amber-950 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-temple-gold overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-amber-100 font-devanagari tracking-tight leading-tight drop-shadow-md">
            {templeData.title[language]}
          </h1>

          {/* Subtitle & Description */}
          <p className="text-xl sm:text-2xl font-bold text-temple-gold font-devanagari max-w-2xl mx-auto">
            {templeData.subtitle[language]}
          </p>

          <p className="text-base sm:text-lg text-amber-200/90 font-devanagari max-w-xl mx-auto leading-relaxed">
            {language === "mr"
              ? "भोगावती नदीच्या तीरावर स्थित वाटेगावचे श्री वासुदेव मंदिर."
              : "Shree Vasudev Mandir situated on the banks of Bhogawati river in Wategaon (Sangli)."}
          </p>
        </div>
      </section>

      {/* Feature Section: Vasudev Identity (Bhagwan Shri Krishna) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-temple-gold/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl font-black text-temple-maroon font-devanagari">
                {language === "mr"
                  ? "वासुदेव म्हणजेच साक्षात भगवान श्रीकृष्ण!"
                  : "Vasudev is Bhagwan Shri Krishna Himself"}
              </h2>

              <p className="text-gray-700 leading-relaxed font-devanagari text-base sm:text-lg">
                {language === "mr"
                  ? "वासुदेव म्हणजेच वसुदेव व देवकीचा पुत्र साक्षात भगवान श्रीकृष्ण! श्रीमद्भगवद्गीतेमध्ये भगवंतांनी 'वासुदेवः सर्वमिति' (सर्व जग वासुदेवमय आहे) हा विचार मांडला आहे. मंदिराच्या गाभाऱ्यातील पंचधातूची मूर्ती ही श्रीकृष्णाच्या शांत, मंदस्मित आणि प्रसन्न भावमुद्रेत प्रस्थापित आहे."
                  : "The deity at Shree Vasudev Mandir is Lord Shri Krishna Himself, named 'Vasudev' as the divine son of Vasudeva & Devaki. The Panchadhatu idol reflects Krishna's serene divine smile."}
              </p>

              <div className="pt-2">
                <Link
                  href="/who-is-vasudev"
                  className="inline-flex items-center space-x-2 text-temple-saffron hover:text-temple-darkSaffron font-bold text-base group font-devanagari"
                >
                  <span>{language === "mr" ? "सविस्तर माहिती व संदर्भ वाचा" : "Read Complete Details"}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-300/80 text-center space-y-3">
              <div className="text-4xl">🪈</div>
              <h3 className="text-xl font-bold text-temple-maroon font-devanagari">
                {language === "mr" ? "॥ ॐ नमो भगवते वासुदेवाय ॥" : "Om Namo Bhagavate Vasudevaya"}
              </h3>
              <p className="text-xs text-amber-950 font-devanagari leading-relaxed">
                {language === "mr"
                  ? "मस्तकी मोरपिसांची टोपी, हाती टाळ-चिपळ्या आणि प्रभात समयी हरिनाम सांगणारा वासुदेव ही महाराष्ट्राची लोकसंस्कृती परंपरा आहे."
                  : "The traditional Varkari Vasudev carrying peacock plume cap and cymbals spreading divine Harinam."}
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
              ? "भोगावती नदीच्या तीरावर वसलेल्या या देवस्थानाची प्रमुख वैशिष्ट्ये"
              : "Key highlights of the shrine situated on the banks of Bhogawati river"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templeData.keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg border border-amber-200 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-saffron flex items-center justify-center font-bold text-lg">
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

      {/* Portal Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-temple-maroon font-devanagari">
            {language === "mr" ? "माहिती दालने" : "Temple Portal"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/history"
            className="group bg-gradient-to-br from-amber-900 to-temple-maroon text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all space-y-3 border border-amber-600/40"
          >
            <ScrollText className="w-7 h-7 text-temple-gold" />
            <h3 className="text-xl font-bold font-devanagari group-hover:text-temple-gold transition-colors">
              {language === "mr" ? "मंदिराचा इतिहास" : "Temple History"}
            </h3>
            <p className="text-xs text-amber-200/80 font-devanagari leading-relaxed">
              {language === "mr"
                ? "भोगावती नदीच्या तीरावर मंदिर स्थापना, सागवानी लाकडी स्थापत्य."
                : "Historical background, teakwood mandap construction, and Divekar heritage."}
            </p>
          </Link>

          <Link
            href="/who-is-vasudev"
            className="group bg-gradient-to-br from-amber-800 to-amber-950 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all space-y-3 border border-amber-500/40"
          >
            <BookOpen className="w-7 h-7 text-temple-gold" />
            <h3 className="text-xl font-bold font-devanagari group-hover:text-temple-gold transition-colors">
              {language === "mr" ? "वासुदेव स्वरूप (श्रीकृष्ण)" : "Who is Vasudev?"}
            </h3>
            <p className="text-xs text-amber-200/80 font-devanagari leading-relaxed">
              {language === "mr"
                ? "साक्षात भगवान श्रीकृष्ण स्वरूप व वासुदेव परंपरेची माहिती."
                : "Bhagwan Shri Krishna's divine form and Vasudev traditions."}
            </p>
          </Link>

          <Link
            href="/deepotsav"
            className="group bg-gradient-to-br from-amber-600 to-temple-saffron text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all space-y-3 border border-amber-400/40"
          >
            <Flame className="w-7 h-7 text-amber-200" />
            <h3 className="text-xl font-bold font-devanagari group-hover:text-amber-100 transition-colors">
              {language === "mr" ? "महिन्याचा दीपोत्सव" : "Deepotsav Festival"}
            </h3>
            <p className="text-xs text-amber-100/90 font-devanagari leading-relaxed">
              {language === "mr"
                ? "कोजागिरी ते त्रिपुरारी पौर्णिमा दरम्यान हजारो पणत्यांचा सोहळा."
                : "Month-long festival of traditional oil lamps."}
            </p>
          </Link>

          <Link
            href="/location"
            className="group bg-gradient-to-br from-white to-amber-50 text-temple-maroon p-6 rounded-2xl shadow-lg border-2 border-amber-300 hover:shadow-2xl transition-all space-y-3"
          >
            <MapPin className="w-7 h-7 text-temple-saffron" />
            <h3 className="text-xl font-bold font-devanagari group-hover:text-temple-saffron transition-colors">
              {language === "mr" ? "कसे पोहोचावे" : "Location & Map"}
            </h3>
            <p className="text-xs text-gray-700 font-devanagari leading-relaxed">
              {language === "mr"
                ? "वाटेगाव (ता. वाळवा, जि. सांगली) मंदिराचा सविस्तर पत्ता व नकाशे."
                : "Detailed address, road/bus routes, and Google Maps location pin."}
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
