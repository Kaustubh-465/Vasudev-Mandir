"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { locationInfo } from "@/data/location";
import { MapPin, ArrowLeft, ExternalLink, Navigation, Phone } from "lucide-react";

export default function LocationPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
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
          {language === "mr" ? "वाटेगाव वासुदेव मंदिराकडे कसे पोहोचावे?" : "How to Reach Wategaon Vasudev Mandir"}
        </h1>
      </div>

      {/* Address & Google Maps Banner */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-temple-gold space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-temple-saffron font-bold text-sm">
            <MapPin className="w-5 h-5" />
            <span>{language === "mr" ? "गूगल मॅप्स लोकेशन व पत्ता" : "Google Maps Location & Address"}</span>
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
              className="inline-flex items-center space-x-2 bg-temple-saffron hover:bg-temple-darkSaffron text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-base font-devanagari active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              <span>{language === "mr" ? "गूगल मॅप्सवर नेव्हिगेट करा" : "Open in Google Maps"}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Contact Numbers Section */}
        <div className="pt-4 border-t border-amber-200/80 space-y-3">
          <div className="inline-flex items-center space-x-2 text-temple-saffron font-bold text-sm">
            <Phone className="w-4 h-4" />
            <span>{language === "mr" ? "मार्गदर्शन व संपर्कासाठी" : "Contact Numbers for Guidance"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {locationInfo.contacts.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.phone}`}
                className="group flex flex-col justify-between p-3.5 bg-amber-50/70 hover:bg-amber-100/90 rounded-2xl border border-amber-300 transition-all hover:shadow-md hover:border-amber-400"
              >
                <div className="font-bold text-temple-maroon text-sm font-devanagari">
                  {contact.name[language]}
                </div>
                <div className="mt-2 flex items-center space-x-1.5 text-temple-saffron group-hover:text-temple-darkSaffron font-mono text-sm font-semibold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{contact.phone}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="overflow-hidden rounded-2xl border-2 border-amber-200 shadow-md h-72 sm:h-96 w-full">
          <iframe
            title="Vasudev Mandir Wategaon Map"
            src={locationInfo.address.googleMapsEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Simple Directions Card */}
      <div className="bg-amber-50/90 p-8 rounded-3xl shadow-md border-2 border-amber-300 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
          <span>📍</span>
          <span>{language === "mr" ? "मार्ग दर्शन" : "Directions"}</span>
        </h2>

        <div className="space-y-3 text-gray-800 font-devanagari leading-relaxed text-base sm:text-lg">
          <p className="font-semibold text-temple-saffron">
            {language === "mr"
              ? "वाटेगाव हे कासेगावपासून सुमारे ५ किमी अंतरावर आहे."
              : "Wategaon is located about 5 km from Kasegaon."}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>{language === "mr" ? "कराडकडून येताना:" : "Coming from Karad:"}</strong>{" "}
              {language === "mr"
                ? "कराडवरून कासेगाव येथे येऊन, तेथून उपलब्ध वाहतूक साधनाने वाटेगावला यावे."
                : "Travel from Karad to Kasegaon, and take local available transport from Kasegaon to Wategaon."}
            </li>
            <li>
              <strong>{language === "mr" ? "कोल्हापूरकडून येताना:" : "Coming from Kolhapur:"}</strong>{" "}
              {language === "mr"
                ? "कोल्हापूरवरून कासेगाव येथे येऊन, तेथून उपलब्ध वाहतूक साधनाने वाटेगावला यावे."
                : "Travel from Kolhapur to Kasegaon, and proceed from Kasegaon to Wategaon via local transport."}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
