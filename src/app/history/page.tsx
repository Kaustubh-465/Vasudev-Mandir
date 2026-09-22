"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { templeHistory } from "@/data/history";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import {
  ScrollText,
  ArrowLeft,
  Clock,
  Camera,
  Maximize2,
} from "lucide-react";

export default function HistoryPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const architecturePhotos = [
    {
      src: "/images/1000183552.jpg",
      alt: "६०×३० फूट सागवानी लाकडी मंडप",
      caption:
        language === "mr"
          ? "सुमारे २०० वर्षांपूर्वी उभारलेला ६० फूट लांब व ३० फूट रुंद ऐतिहासिक सागवानी लाकडी मंडप"
          : "Historic 200-year-old Teakwood Mandap Architecture (60ft x 30ft)",
    },
    {
      src: "/images/IMG-20241103-WA0002.jpg",
      alt: "मंदिर लाकडी नक्षीकाम प्रवेशद्वार",
      caption:
        language === "mr"
          ? "मंदिराचे सुबक लाकडी नक्षीकाम प्रवेशद्वार व कमानी"
          : "Ornate Hand-Carved Teakwood Arches & Temple Entrance",
    },
    {
      src: "/images/IMG-20241103-WA0021.jpg",
      alt: "दीपोत्सवातील लाकडी मंडप रोषणाई",
      caption:
        language === "mr"
          ? "दीपोत्सवात दिव्यांच्या रोषणाईने उजळणारा सागवानी मंडप"
          : "Teakwood Mandap Illuminated during Deepotsav Festival",
    },
  ];

  const utsavPhotos = [
    {
      src: "/images/IMG-20241107-WA0001.jpg",
      alt: "स्थापना उत्सव रोषणाई",
      caption:
        language === "mr"
          ? "मंदिर स्थापना उत्सवातील दिव्यांचा लखलखाट व रांगोळी"
          : "Temple Sthapana Utsav Illumination & Rangoli",
    },
    {
      src: "/images/IMG_20241016_222202.jpg",
      alt: "उत्सव भव्य रोषणाई दृश्य",
      caption:
        language === "mr"
          ? "वार्षिक उत्सवातील मंदिर परिसराचे भव्य दृश्य"
          : "Grand Illumination View during Temple Annual Utsav",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        altText={selectedImage?.alt || ""}
        caption={selectedImage?.caption}
      />

      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors font-devanagari"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

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

      {/* Architecture Photos Showcase */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100/90 p-6 sm:p-8 rounded-3xl border-2 border-amber-300 space-y-6">
        <div className="flex items-center justify-between border-b border-amber-300 pb-3">
          <div className="flex items-center space-x-2 text-temple-maroon">
            <Camera className="w-5 h-5 text-temple-saffron" />
            <h3 className="text-xl font-bold font-devanagari">
              {language === "mr" ? "सागवानी लाकडी स्थापत्य कला छायाचित्रे" : "Teakwood Architecture Showcase"}
            </h3>
          </div>
          <span className="text-xs font-bold text-temple-saffron font-devanagari">
            {language === "mr" ? "१८१४ ची वास्तू 🏛️" : "1814 Architecture 🏛️"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {architecturePhotos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-amber-300 bg-white shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-3 bg-white border-t border-amber-200 flex items-center justify-between">
                <p className="text-xs font-bold text-temple-maroon font-devanagari line-clamp-1">
                  {item.alt}
                </p>
                <Maximize2 className="w-3.5 h-3.5 text-temple-saffron shrink-0 ml-1" />
              </div>
            </div>
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
      <div className="bg-gradient-to-br from-amber-950 via-temple-maroon to-amber-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl border-4 border-temple-gold space-y-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-500/40 pb-4 gap-2">
          <div className="space-y-1">
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

        {/* Utsav Photos Showcase */}
        <div className="pt-4 border-t border-amber-800/80 space-y-4">
          <div className="flex items-center space-x-2 text-amber-200 text-sm font-bold font-devanagari">
            <Camera className="w-4 h-4 text-temple-gold" />
            <span>{language === "mr" ? "स्थापना उत्सवातील विलोभनीय छायाचित्रे" : "Sthapana Utsav Celebration Photos"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {utsavPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-amber-500/50 bg-amber-950 shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-amber-100 text-xs font-bold font-devanagari justify-between">
                  <span>{item.alt}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-temple-gold shrink-0 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-amber-300/80 font-devanagari">
          <span>॥ श्री वासुदेव प्रसन्न ॥</span>
        </div>
      </div>
    </div>
  );
}
