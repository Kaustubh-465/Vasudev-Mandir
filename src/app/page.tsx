"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { templeData } from "@/data/templeInfo";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import {
  Flame,
  ScrollText,
  BookOpen,
  MapPin,
  ChevronRight,
  Sparkles,
  Maximize2,
  Camera,
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const galleryPreview = [
    {
      src: "/images/PXL_20260904_121625931.PORTRAIT.jpg",
      alt: "श्री वासुदेव पंचधातू मूर्ती",
      caption: language === "mr" ? "श्री वासुदेव (श्रीकृष्ण) प्रसन्न पंचधातू मूर्ती" : "Shree Vasudev (Shri Krishna) Divine Panchadhatu Idol",
    },
    {
      src: "/images/1000183951.jpg",
      alt: "मंदिर गाभारा व समई प्रकाश",
      caption: language === "mr" ? "मंदिर गाभारा आणि उजळलेला समई प्रकाश" : "Temple Sanctum Altar illuminated with lamps",
    },
    {
      src: "/images/1000183552.jpg",
      alt: "६०×३० फूट सागवानी लाकडी मंडप",
      caption: language === "mr" ? "१८१४ मधील ऐतिहासिक सागवानी लाकडी मंडप" : "Historic 1814 Teakwood Mandap Architecture",
    },
    {
      src: "/images/IMG-20241107-WA0001.jpg",
      alt: "दीपोत्सव सोहळा रोषणाई",
      caption: language === "mr" ? "कोजागिरी ते त्रिपुरारी पौर्णिमा दरम्यानचा भव्य दीपोत्सव सोहळा" : "Grand Deepotsav Festival Oil Lamps Lighting",
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 pb-12 sm:pb-16">
      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        altText={selectedImage?.alt || ""}
        caption={selectedImage?.caption}
      />

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-b from-temple-maroon via-temple-deepMaroon to-amber-950 text-white pt-10 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-temple-gold overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-100 font-devanagari tracking-tight leading-tight drop-shadow-lg">
            {templeData.title[language]}
          </h1>

          {/* Subtitle & Description */}
          <p className="text-lg sm:text-2xl font-bold text-temple-gold font-devanagari max-w-2xl mx-auto drop-shadow">
            {templeData.subtitle[language]}
          </p>

          <p className="text-sm sm:text-lg text-amber-200/90 font-devanagari max-w-xl mx-auto leading-relaxed">
            {language === "mr"
              ? "भोगावती नदीच्या तीरावर स्थित वाटेगावचे श्री वासुदेव मंदिर."
              : "Shree Vasudev Mandir situated on the banks of Bhogawati river in Wategaon (Sangli)."}
          </p>
        </div>
      </section>

      {/* Feature Section with Idol Photo & Vasudev Identity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-temple-gold/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Idol Photo Preview */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: "/images/PXL_20260904_121625931.PORTRAIT.jpg",
                    alt: "श्री वासुदेव पंचधातू मूर्ती",
                    caption:
                      language === "mr"
                        ? "श्री वासुदेव (भगवान श्रीकृष्ण) पंचधातू मूर्ती - वाटेगाव"
                        : "Shree Vasudev (Bhagwan Shri Krishna) Panchadhatu Idol - Wategaon",
                  })
                }
                className="group relative cursor-pointer overflow-hidden rounded-2xl border-4 border-amber-300 shadow-xl transition-all hover:scale-102 hover:shadow-2xl max-w-xs sm:max-w-sm w-full"
              >
                <img
                  src="/images/PXL_20260904_121625931.PORTRAIT.jpg"
                  alt="श्री वासुदेव प्रसन्न पंचधातू मूर्ती"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-200 font-devanagari">
                      {language === "mr" ? "पहाण्यासाठी टॅप करा 🔍" : "Tap to expand 🔍"}
                    </span>
                    <Maximize2 className="w-4 h-4 text-temple-gold" />
                  </div>
                  <p className="text-sm font-bold text-amber-100 font-devanagari">
                    {language === "mr" ? "श्री वासुदेव (श्रीकृष्ण) पंचधातू मूर्ती" : "Shree Vasudev Panchadhatu Idol"}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block bg-amber-100 text-temple-maroon px-3.5 py-1 rounded-full text-xs font-bold border border-amber-300 font-devanagari">
                {language === "mr" ? "॥ ॐ नमो भगवते वासुदेवाय ॥" : "Om Namo Bhagavate Vasudevaya"}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-temple-maroon font-devanagari">
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
                  className="inline-flex items-center space-x-2 text-temple-saffron hover:text-temple-darkSaffron font-bold text-sm sm:text-base group font-devanagari active:scale-95 transition-transform"
                >
                  <span>{language === "mr" ? "सविस्तर माहिती व संदर्भ वाचा" : "Read Complete Details"}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 text-temple-saffron font-bold text-sm">
            <Camera className="w-4 h-4" />
            <span>{language === "mr" ? "छायाचित्रे" : "Photo Gallery"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-temple-maroon font-devanagari">
            {language === "mr" ? "श्री वासुदेव मंदिर छायाचित्र झलक" : "Temple Photo Showcase"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-devanagari max-w-xl mx-auto">
            {language === "mr"
              ? "मूर्ती, सागवानी लाकडी स्थापत्य व दीपोत्सव सोहळ्याची अस्सल छायाचित्रे"
              : "Authentic photographs of the deity, teakwood architecture, and Deepotsav"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryPreview.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border-2 border-amber-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-amber-50/80 border-t border-amber-200 flex items-center justify-between">
                <p className="text-xs font-bold text-temple-maroon font-devanagari line-clamp-1">
                  {item.alt}
                </p>
                <Maximize2 className="w-3.5 h-3.5 text-temple-saffron shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-temple-maroon font-devanagari">
            {language === "mr" ? "मंदिराची प्रमुख वैशिष्ट्ये" : "Temple Highlights"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-devanagari max-w-xl mx-auto">
            {language === "mr"
              ? "भोगावती नदीच्या तीरावर वसलेल्या या देवस्थानाची प्रमुख वैशिष्ट्ये"
              : "Key highlights of the shrine situated on the banks of Bhogawati river"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {templeData.keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-amber-200 space-y-2.5 hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-temple-saffron flex items-center justify-center font-bold text-lg">
                ✨
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-temple-maroon font-devanagari">
                {item.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-devanagari">
                {item.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portal Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-temple-maroon font-devanagari">
            {language === "mr" ? "माहिती दालने" : "Temple Portal"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Link
            href="/history"
            className="group bg-gradient-to-br from-amber-900 via-temple-maroon to-amber-950 text-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl active:scale-98 transition-all space-y-2.5 border border-amber-600/40 touch-manipulation"
          >
            <ScrollText className="w-6 h-6 sm:w-7 sm:h-7 text-temple-gold" />
            <h3 className="text-lg sm:text-xl font-bold font-devanagari group-hover:text-temple-gold transition-colors">
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
            className="group bg-gradient-to-br from-amber-800 to-amber-950 text-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl active:scale-98 transition-all space-y-2.5 border border-amber-500/40 touch-manipulation"
          >
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-temple-gold" />
            <h3 className="text-lg sm:text-xl font-bold font-devanagari group-hover:text-temple-gold transition-colors">
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
            className="group bg-gradient-to-br from-amber-600 to-temple-saffron text-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl active:scale-98 transition-all space-y-2.5 border border-amber-400/40 touch-manipulation"
          >
            <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-amber-200" />
            <h3 className="text-lg sm:text-xl font-bold font-devanagari group-hover:text-amber-100 transition-colors">
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
            className="group bg-gradient-to-br from-white to-amber-50 text-temple-maroon p-5 sm:p-6 rounded-2xl shadow-lg border-2 border-amber-300 hover:shadow-2xl active:scale-98 transition-all space-y-2.5 touch-manipulation"
          >
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-temple-saffron" />
            <h3 className="text-lg sm:text-xl font-bold font-devanagari group-hover:text-temple-saffron transition-colors">
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
