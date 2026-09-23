"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Flame, Landmark, BookOpen, MapPin, ScrollText } from "lucide-react";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
      label: { mr: "वासुदेव स्वरूप", en: "Who is Vasudev?" },
      icon: BookOpen,
    },
    {
      href: "/deepotsav",
      label: { mr: "दीपोत्सव सोहळा", en: "Deepotsav" },
      icon: Flame,
    },
    {
      href: "/location",
      label: { mr: "कसे पोहोचावे", en: "Location" },
      icon: MapPin,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-temple-maroon via-temple-deepRed to-temple-maroon text-white shadow-lg border-b-2 border-temple-gold/40 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group touch-manipulation">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-temple-gold text-temple-maroon flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md border-2 border-amber-200 group-hover:scale-105 transition-transform shrink-0">
              🛕
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold tracking-wide text-amber-100 font-devanagari leading-tight">
                {language === "mr" ? "श्री वासुदेव मंदिर" : "Shree Vasudev Mandir"}
              </h1>
              <p className="text-[10px] sm:text-xs text-amber-300/90 font-medium font-devanagari">
                {language === "mr" ? "वाटेगाव (सांगली) • भोगावती नदीतीरावर" : "Wategaon, Sangli • On Bhogawati River"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (PC) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? "bg-amber-950/80 text-amber-200 border border-amber-500/50 font-bold shadow-inner"
                      : "text-amber-100 hover:bg-amber-900/40 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 text-temple-gold" />
                  <span>{link.label[language]}</span>
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Switcher & Mobile Drawer Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-amber-950/80 hover:bg-amber-900 active:scale-95 text-amber-200 text-xs font-bold border border-amber-500/40 transition-all flex items-center space-x-1 shadow-sm min-h-[36px] touch-manipulation"
              aria-label="Toggle language"
            >
              <span className="text-sm">🌐</span>
              <span>{language === "mr" ? "English" : "मराठी"}</span>
            </button>

            {/* Mobile Menu Button (Android/iPhone) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-amber-200 hover:text-white hover:bg-amber-900/50 active:bg-amber-900 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Android Optimized) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-temple-maroon border-t border-amber-500/30 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all touch-manipulation min-h-[48px] ${
                  isActive
                    ? "bg-amber-950/90 text-amber-200 border-l-4 border-temple-gold font-bold shadow-sm"
                    : "text-amber-100 hover:bg-amber-900/50 active:bg-amber-900/70 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 text-temple-gold shrink-0" />
                <span>{link.label[language]}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
