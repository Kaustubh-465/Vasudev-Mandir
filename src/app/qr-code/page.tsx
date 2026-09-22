"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PrintableQRCard } from "@/components/PrintableQRCard";
import { QrCode, ArrowLeft, Printer, Sparkles, ShieldCheck } from "lucide-react";

export default function QRCodePage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header (Hidden when printing) */}
      <div className="print:hidden space-y-4 text-center sm:text-left border-b border-amber-300/60 pb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-temple-saffron hover:text-temple-darkSaffron transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "mr" ? "मुख्य पृष्ठावर परत जा" : "Back to Home"}</span>
        </Link>

        <div className="inline-block bg-amber-100 text-temple-maroon px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300 font-devanagari">
          मंदिरात लावण्यासाठी डिजिटल QR बोर्ड
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-temple-maroon font-devanagari">
          {language === "mr" ? "मंदिरासाठी Printable QR कोड बोर्ड" : "Printable QR Code Banner for Temple"}
        </h1>

        <p className="text-lg text-gray-700 font-devanagari leading-relaxed max-w-3xl">
          {language === "mr"
            ? "खालील बोर्ड प्रिंट करून मंदिराच्या प्रवेशद्वारावर किंवा परिसरात लावा. भाविक मोबाईलने हा QR कोड स्कॅन करून मंदिराचा इतिहास, एकनाथी भागवत संदर्भ व आरत्या थेट वाचू शकतात."
            : "Print and place this QR Code board at the temple entrance. Visiting devotees can scan with smartphones to read history, citations, and daily Aarti lyrics."}
        </p>
      </div>

      {/* Instructions Box (Hidden when printing) */}
      <div className="print:hidden bg-amber-100/80 p-6 rounded-2xl border-2 border-amber-300 space-y-3">
        <h2 className="text-lg font-bold text-temple-maroon font-devanagari flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-temple-saffron" />
          <span>{language === "mr" ? "प्रिंट व बोर्ड लावण्याच्या सूचना:" : "Printing & Placement Instructions:"}</span>
        </h2>
        <ul className="text-sm text-gray-800 font-devanagari space-y-1.5 list-disc list-inside">
          <li>
            {language === "mr"
              ? "खाली दिलेल्या 'बोर्ड प्रिंट करा (A4 Print)' बटणावर क्लिक करून थेट A4 कागदावर प्रिंट काढा."
              : "Click 'Print Temple Board (A4)' to generate a crisp A4 paper printout."}
          </li>
          <li>
            {language === "mr"
              ? "तुम्ही Vercel वर डिप्लॉय केलेल्या संकेतस्थळाची लिंक (उदा. https://vasudev-mandir-wategaon.vercel.app) बदलू शकता."
              : "You can customize the target URL field above with your deployed Vercel domain."}
          </li>
          <li>
            {language === "mr"
              ? "हा प्रिंट काढलेला बोर्ड लॅमिनेट (Laminate) करून किंवा ॲक्रेलिक बोर्डवर बसवून मंदिराच्या मुख्यद्वाराजवळ लावा."
              : "Laminate or frame the print on acrylic/sunboard for mounting at the temple gate."}
          </li>
        </ul>
      </div>

      {/* Interactive Printable QR Component */}
      <PrintableQRCard />
    </div>
  );
}

