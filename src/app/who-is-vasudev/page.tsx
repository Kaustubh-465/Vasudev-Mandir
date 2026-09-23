"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { vasudevCitations } from "@/data/citations";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import { ArrowLeft, Maximize2, Camera } from "lucide-react";

export default function WhoIsVasudevPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const idolPhotos = [
    {
      src: "/images/PXL_20260904_121625931.PORTRAIT.jpg",
      alt: "श्री वासुदेव पंचधातू मूर्ती",
      caption:
        language === "mr"
          ? "श्री वासुदेव पंचधातू मूर्ती - वाटेगाव"
          : "Shree Vasudev Panchadhatu Idol - Wategaon",
    },
    {
      src: "/images/IMG-20240617-WA0005.jpg",
      alt: "श्री वासुदेव मुखकमल",
      caption:
        language === "mr"
          ? "श्री वासुदेवांचे सुहास्यवदन मुखकमल"
          : "Serene Facial Expression of Lord Shree Vasudev",
    },
    {
      src: "/images/IMG-20241012-WA0028.jpg",
      alt: "श्री वासुदेव शृंगार रूप",
      caption:
        language === "mr"
          ? "श्री वासुदेव मूर्तीचा वस्त्र व अलंकृत शृंगार"
          : "Adornment of Shree Vasudev Idol",
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

      {/* Page Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors font-devanagari"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {language === "mr" ? "श्री वासुदेव स्वरूप व महत्त्व" : "Form & Significance of Shri Vasudev"}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {language === "mr"
            ? "श्रीमद्भागवत एकादश स्कंध १४ अध्यायानुसार वासुदेवांचे ध्यानरूप व भक्त ध्रुवाला मिळालेले प्रसन्न दर्शन."
            : "Form of Lord Vasudev as described in Srimad Bhagavat 11th Canto Chapter 14."}
        </p>
      </div>

      {/* Idol Photo Gallery Showcase */}
      <div className="bg-gradient-to-br from-amber-950 via-temple-maroon to-amber-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border-4 border-temple-gold space-y-6">
        <div className="flex items-center justify-between border-b border-amber-500/40 pb-3">
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-temple-gold" />
            <h2 className="text-xl sm:text-2xl font-black font-devanagari text-amber-100">
              {language === "mr" ? "श्री वासुदेव पंचधातू मूर्ती स्वरूप" : "Panchadhatu Idol Photographs"}
            </h2>
          </div>
          <span className="text-xs font-bold text-amber-300 font-devanagari">
            {language === "mr" ? "मूर्ती दर्शन 🪔" : "Deity View 🪔"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {idolPhotos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-amber-400/60 bg-amber-950 shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-amber-100">
                <div className="flex items-center justify-between text-xs font-bold font-devanagari">
                  <span className="line-clamp-1">{item.alt}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-temple-gold shrink-0 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
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
