"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { locationInfo } from "@/data/location";
import { MapPin, ArrowLeft, Bus, Train, ExternalLink, Navigation, Landmark } from "lucide-react";

export default function LocationPage() {
  const { language } = useLanguage();

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
          स्थान व प्रवास मार्गदर्शन
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {language === "mr" ? "वाटेगाव वासुदेव मंदिराकडे कसे पोहोचावे?" : "How to Reach Wategaon Vasudev Mandir"}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {language === "mr"
            ? "वाटेगाव (ता. वाळवा, जि. सांगली) येथील मंदिराचा सविस्तर पत्ता, बस व रेल्वे मार्ग आणि नकाशे."
            : "Detailed address, road, bus and train routes to visit Wategaon Vasudev Mandir."}
        </p>
      </div>

      {/* Address & Google Maps Banner */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-temple-gold grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 text-temple-saffron font-bold text-sm">
            <MapPin className="w-5 h-5" />
            <span>{language === "mr" ? "संपूर्ण पत्ता" : "Complete Address"}</span>
          </div>

          <h2 className="text-2xl font-bold text-temple-maroon font-devanagari">
            {locationInfo.address.name[language]}
          </h2>

          <p className="text-gray-800 font-devanagari text-base sm:text-lg leading-relaxed">
            {locationInfo.address.street[language]}, {locationInfo.address.village[language]},{" "}
            {language === "mr" ? "तालुका" : "Taluka"} {locationInfo.address.taluka[language]},{" "}
            {language === "mr" ? "जिल्हा" : "District"} {locationInfo.address.district[language]} - {locationInfo.address.pincode},{" "}
            {locationInfo.address.state[language]}.
          </p>

          <div className="pt-2">
            <a
              href={locationInfo.address.directMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-temple-saffron hover:bg-temple-darkSaffron text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>{language === "mr" ? "गूगल मॅप्सवर नेव्हिगेट करा" : "Open in Google Maps"}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-amber-100 p-6 rounded-2xl text-center space-y-3 border border-amber-300">
          <div className="text-4xl">📍</div>
          <h3 className="text-lg font-bold text-temple-maroon font-devanagari">
            {language === "mr" ? "महत्त्वाची अंतरे" : "Key Distances"}
          </h3>
          <ul className="text-xs sm:text-sm text-gray-800 font-devanagari space-y-1.5 text-left">
            <li className="flex justify-between border-b border-amber-200 pb-1">
              <span>पेठ नाका (NH48 Highway):</span>
              <span className="font-bold font-mono">१२ किमी</span>
            </li>
            <li className="flex justify-between border-b border-amber-200 pb-1">
              <span>कराड (Karad):</span>
              <span className="font-bold font-mono">२५ किमी</span>
            </li>
            <li className="flex justify-between border-b border-amber-200 pb-1">
              <span>इस्लामपूर (Islampur):</span>
              <span className="font-bold font-mono">१५ किमी</span>
            </li>
            <li className="flex justify-between">
              <span>सांगली (Sangli):</span>
              <span className="font-bold font-mono">४५ किमी</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Transport Options Grid */}
      <div className="space-y-8">
        {locationInfo.routes.map((cat, cIdx) => (
          <div
            key={cIdx}
            className="bg-white p-8 rounded-3xl shadow-lg border-2 border-amber-200 space-y-6"
          >
            <h2 className="text-2xl font-bold text-temple-maroon font-devanagari flex items-center space-x-3">
              {cIdx === 0 ? <Bus className="w-6 h-6 text-temple-saffron" /> : <Train className="w-6 h-6 text-temple-saffron" />}
              <span>{cat.mode[language]}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.details.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 space-y-2"
                >
                  <div className="text-xs font-bold text-temple-saffron font-mono">
                    {item.distance[language]}
                  </div>
                  <h3 className="text-lg font-bold text-temple-maroon font-devanagari">
                    {item.route[language]}
                  </h3>
                  <p className="text-xs text-gray-600 font-devanagari leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

