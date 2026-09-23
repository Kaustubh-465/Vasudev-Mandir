"use client";

import React, { useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  caption?: string;
}

export default function ImageLightboxModal({
  isOpen,
  onClose,
  imageSrc,
  altText,
  caption,
}: ImageLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-10 p-2.5 rounded-full bg-amber-500/30 hover:bg-amber-500/60 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 active:scale-95"
          aria-label="Close photo preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* High Resolution Image Container */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-amber-400/50 shadow-2xl bg-amber-950/40 max-h-[75vh] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={altText}
            className="max-h-[75vh] w-auto object-contain rounded-xl select-none"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="text-center bg-amber-950/80 border border-amber-500/40 px-5 py-2.5 rounded-xl max-w-2xl">
            <p className="text-sm sm:text-base text-amber-100 font-devanagari font-medium">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

