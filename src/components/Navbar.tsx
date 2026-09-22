"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Flame, Landmark, BookOpen, MapPin, QrCode, ScrollText, Music } from "lucide-react";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: { mr: "मुख्य पृष्ठ", en: "Home" },
      icon: Landmark,
    },
    {
      href: "/history",
      label: { mr: "इतिहास", en: "History" },
      icon: ScrollText,
    },
    {
      href: "/who-is-vasudev",
      label: { mr: "वासुदेव कोण आहेत?", en: "Who is Vasudev?" },
      icon: BookOpen,
    },
    {
      href: "/deepotsav",
      label: { mr: "दीपोत्सव सोहळा", en: "Deepotsav" },
      icon: Flame,
    },
    {
      href: "/aarti-abhang",
      label: { mr: "आरती व अभंग", en: "Aarti & Hymns" },
      icon: Music,
    },
    {
      href: "/location",
      label: { mr: "कसे पोहोचावे", en: "Location" },
      icon: MapPin,
    },
    {
      href: "/qr-code",
      label: { mr: "QR कोड", en: "Temple QR" },
      icon: QrCode,
      highlight: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-temple-maroon via-temple-deepRed to-temple-maroon text-white shadow-lg border-b-2 border-temple-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-temple-gold text-temple-maroon flex items-center justify-center font-bold text-2xl shadow-md border-2 border-amber-200 group-hover:scale-105 transition-transform">
              🛕
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-amber-100 font-devanagari">
                {language === "mr" ? "श्री वासुदेव मंदिर" : "Shree Vasudev Mandir"}
              </h1>
              <p className="text-xs text-amber-300/90 font-medium">
                {language === "mr" ? "वाटेगाव (सांगली) • २०० वर्षांची परंपरा" : "Wategaon, Sangli • 200 Year Heritage"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
                    link.highlight
                      ? "bg-temple-gold text-temple-maroon font-semibold hover:bg-amber-400 shadow-sm"
                      : isActive
                      ? "bg-amber-950/60 text-amber-200 border border-amber-500/40"
                      : "text-amber-100 hover:bg-amber-900/40 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label[language]}</span>
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Toggle & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-amber-950/80 hover:bg-amber-900 text-amber-200 text-xs font-semibold border border-amber-500/40 transition-all flex items-center space-x-1 shadow-sm"
              title="भाषा बदला / Change Language"
            >
              <span className="text-base">🌐</span>
              <span>{language === "mr" ? "English" : "मराठी"}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-amber-200 hover:text-white hover:bg-amber-900/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-temple-maroon border-t border-amber-500/30 px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-all ${
                  link.highlight
                    ? "bg-temple-gold text-temple-maroon font-bold"
                    : isActive
                    ? "bg-amber-950/80 text-amber-200 border-l-4 border-temple-gold"
                    : "text-amber-100 hover:bg-amber-900/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label[language]}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

