"use client";

import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "@/context/LanguageContext";
import { Download, Printer, QrCode, Globe, Check, Sparkles } from "lucide-react";

export function PrintableQRCard() {
  const { language } = useLanguage();
  const [targetUrl, setTargetUrl] = useState("https://vasudev-mandir-wategaon.vercel.app");
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSVG = () => {
    const svgElement = document.getElementById("temple-qr-code");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "vasudev-mandir-wategaon-qr.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="space-y-8">
      {/* Controls Box (Hidden during print) */}
      <div className="print:hidden bg-white p-6 rounded-2xl shadow-md border-2 border-temple-gold/40 space-y-4">
        <div className="flex items-center space-x-2 text-temple-maroon font-bold text-lg border-b pb-3">
          <Globe className="w-5 h-5 text-temple-saffron" />
          <span>
            {language === "mr"
              ? "क्यूआर कोडसाठी संकेतस्थळ लिंक (URL)"
              : "Website Target URL for QR Code"}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            placeholder="https://vasudev-mandir-wategaon.vercel.app"
            className="flex-1 px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-temple-saffron focus:outline-none text-gray-800 font-mono text-sm bg-amber-50/50"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-3 bg-amber-100 hover:bg-amber-200 text-temple-maroon font-semibold rounded-lg text-sm transition-all flex items-center justify-center space-x-2 border border-amber-300"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Globe className="w-4 h-4" />}
            <span>{copied ? (language === "mr" ? "कॉपी झाले!" : "Copied!") : (language === "mr" ? "लिंक कॉपी करा" : "Copy Link")}</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-initial px-6 py-3 bg-temple-saffron hover:bg-temple-darkSaffron text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <Printer className="w-5 h-5" />
            <span>{language === "mr" ? "बोर्ड प्रिंट करा (A4 Print)" : "Print Temple Board (A4)"}</span>
          </button>
          <button
            onClick={handleDownloadSVG}
            className="flex-1 sm:flex-initial px-6 py-3 bg-temple-maroon hover:bg-amber-900 text-amber-100 font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 border border-amber-500/40"
          >
            <Download className="w-5 h-5 text-temple-gold" />
            <span>{language === "mr" ? "SVG डाउनलोड करा" : "Download Vector SVG"}</span>
          </button>
        </div>
      </div>

      {/* Printable Temple Board Card */}
      <div className="flex justify-center">
        <div
          ref={cardRef}
          className="print-card w-full max-w-lg bg-gradient-to-b from-amber-50 via-white to-amber-50 p-8 rounded-3xl border-8 border-temple-gold shadow-2xl text-center space-y-6 relative overflow-hidden"
        >
          {/* Decorative Corner Embellishments */}
          <div className="absolute top-2 left-2 text-temple-saffron text-2xl font-bold">⚜</div>
          <div className="absolute top-2 right-2 text-temple-saffron text-2xl font-bold">⚜</div>
          <div className="absolute bottom-2 left-2 text-temple-saffron text-2xl font-bold">⚜</div>
          <div className="absolute bottom-2 right-2 text-temple-saffron text-2xl font-bold">⚜</div>

          {/* Header Badge */}
          <div className="inline-block bg-gradient-to-r from-temple-maroon to-temple-deepRed text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider shadow-md border-2 border-temple-gold font-devanagari">
            ॥ एका जनार्दनी ॥
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black text-temple-maroon font-devanagari tracking-wide">
              श्री वासुदेव मंदिर
            </h2>
            <p className="text-lg font-bold text-temple-saffron font-devanagari">
              वाटेगाव, ता. वाळवा, जि. सांगली
            </p>
            <p className="text-xs text-amber-800 font-medium font-devanagari pt-1">
              भारतातील एकमेव वासुदेव मंदिर • एकनाथी भागवत संप्रदाय
            </p>
          </div>

          {/* QR Code Container */}
          <div className="flex flex-col items-center justify-center my-4">
            <div className="p-5 bg-white rounded-2xl shadow-xl border-4 border-temple-gold relative group">
              <QRCodeSVG
                id="temple-qr-code"
                value={targetUrl}
                size={220}
                level="H"
                includeMargin={true}
                fgColor="#78350F"
                bgColor="#FFFFFF"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-2xl pointer-events-none">
                <span className="text-xs font-bold text-temple-maroon">स्कॅन करा</span>
              </div>
            </div>
          </div>

          {/* Call To Action Banner */}
          <div className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 p-4 rounded-xl border border-amber-400/60 shadow-sm space-y-1">
            <p className="text-base sm:text-lg font-bold text-temple-maroon font-devanagari flex items-center justify-center space-x-1">
              <Sparkles className="w-5 h-5 text-temple-saffron inline" />
              <span>माहिती, इतिहास व आरतीसाठी मोबाईलवर स्कॅन करा</span>
            </p>
            <p className="text-xs text-amber-950 font-mono tracking-tight break-all">
              {targetUrl}
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-xs text-gray-600 font-devanagari pt-2 border-t border-amber-300/50">
            दिवेकर घराण्याचे कुलदैवत • २०० वर्षांचा ऐतिहासिक वारसा • भोगावती नदीकाठ
          </div>
        </div>
      </div>
    </div>
  );
}

