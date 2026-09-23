"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { deepotsavInfo } from "@/data/deepotsav";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import { ArrowLeft, Calendar, Clock, Camera, Maximize2, Flame } from "lucide-react";

export default function DeepotsavPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const deepotsavGallery = [
    { src: "/images/IMG-20241107-WA0001.jpg" },
    { src: "/images/IMG_20241016_222228.jpg" },
    { src: "/images/IMG-20241106-WA0009.jpg" },
    { src: "/images/IMG-20241106-WA0011.jpg" },
    { src: "/images/IMG_20241016_222505-1.jpg" },
    { src: "/images/IMG_20241109_223537.jpg" },
    { src: "/images/IMG_20241016_221218.jpg" },
    { src: "/images/IMG_20241016_221143.jpg" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        altText=""
        caption=""
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
          {deepotsavInfo.title[language]}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {deepotsavInfo.subtitle[language]}
        </p>
      </div>

      {/* Period Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-temple-saffron to-amber-800 text-white p-6 rounded-3xl shadow-xl flex items-center space-x-4 border-2 border-temple-gold">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
          <Calendar className="w-8 h-8 text-amber-100" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-amber-200 font-bold">
            {language === "mr" ? "दीपोत्सव कालावधी" : "Festival Period"}
          </div>
          <div className="text-xl sm:text-2xl font-bold font-devanagari">
            {deepotsavInfo.period[language]}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deepotsavInfo.highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-amber-200 space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-temple-saffron flex items-center justify-center text-xl font-bold">
              🪔
            </div>
            <h2 className="text-xl font-bold text-temple-maroon font-devanagari">
              {item.title[language]}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-devanagari">
              {item.description[language]}
            </p>
          </div>
        ))}
      </div>

      {/* Deepotsav Photo Gallery */}
      <div className="bg-gradient-to-br from-amber-950 via-temple-maroon to-amber-900 text-white p-6 sm:p-10 rounded-3xl shadow-xl border-4 border-temple-gold space-y-6">
        <div className="flex items-center justify-between border-b border-amber-500/40 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-temple-gold">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-devanagari text-amber-100">
                {language === "mr" ? "दीपोत्सव छायाचित्रे" : "Deepotsav Photo Gallery"}
              </h2>
              <p className="text-xs text-amber-200/80 font-devanagari">
                {language === "mr" ? "पाहण्यासाठी कोणत्याही फोटोवर टॅप करा 🔍" : "Tap any photo for full view 🔍"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deepotsavGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage({ src: item.src, alt: "", caption: "" })}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-amber-500/50 bg-amber-950 shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-amber-100 opacity-80 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-temple-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Ritual Timetable */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200 space-y-6">
        <h2 className="text-2xl font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
          <Clock className="w-6 h-6 text-temple-saffron" />
          <span>{language === "mr" ? "दीपोत्सवाचे नित्य वेळापत्रक" : "Daily Ritual Schedule"}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deepotsavInfo.schedule.map((slot, sIdx) => (
            <div
              key={sIdx}
              className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 flex space-x-4 items-start"
            >
              <div className="px-3 py-1 bg-temple-maroon text-amber-100 rounded-lg text-xs font-bold font-mono shrink-0">
                {slot.time[language]}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-temple-maroon font-devanagari">
                  {slot.event[language]}
                </h3>
                <p className="text-xs text-gray-600 font-devanagari leading-relaxed">
                  {slot.details[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
