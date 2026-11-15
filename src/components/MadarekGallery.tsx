"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Maximize2, X } from "lucide-react";

interface ScreenshotItem {
  id: string;
  titleEn: string;
  titleAr: string;
  src: string;
  captionEn: string;
  captionAr: string;
}

const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: "overview",
    titleEn: "Madarek Overview",
    titleAr: "نظرة عامة على مدارك",
    src: "/madarek/1.png",
    captionEn: "A look at the Madarek student management experience.",
    captionAr: "نظرة على تجربة إدارة الطلاب في مدارك.",
  },
  {
    id: "students",
    titleEn: "Student Management",
    titleAr: "إدارة الطلاب",
    src: "/madarek/2.png",
    captionEn: "Student information organized for everyday teaching workflows.",
    captionAr: "تنظيم بيانات الطلاب لتناسب احتياجات المعلم اليومية.",
  },
  {
    id: "groups",
    titleEn: "Groups & Classes",
    titleAr: "المجموعات والحصص",
    src: "/madarek/3.png",
    captionEn: "A preview of class and group management.",
    captionAr: "معاينة لإدارة الحصص والمجموعات.",
  },
  {
    id: "records",
    titleEn: "Student Records",
    titleAr: "سجلات الطلاب",
    src: "/madarek/4.png",
    captionEn: "Student records gathered in one place.",
    captionAr: "سجلات الطلاب مجمعة في مكان واحد.",
  },
  {
    id: "madarek",
    titleEn: "Madarek Interface",
    titleAr: "واجهة مدارك",
    src: "/madarek/5.png",
    captionEn: "A closer look at the Madarek interface.",
    captionAr: "نظرة أقرب على واجهة مدارك.",
  },
];

export function MadarekGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const current = SCREENSHOTS[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % SCREENSHOTS.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Preview Container */}
      <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-zinc-400 ml-2">madarek-app / {current.id}.png</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-500">
              {selectedIndex + 1} of {SCREENSHOTS.length}
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-1 text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Fullscreen View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Screenshot Image */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative aspect-[16/10] w-full bg-zinc-950 flex items-center justify-center cursor-zoom-in"
        >
          <Image
            src={current.src}
            alt={current.titleEn}
            fill
            className="object-contain p-2 sm:p-4"
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors shadow-lg"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors shadow-lg"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Screenshot Caption Bar */}
        <div className="p-4 bg-zinc-900/60 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <h4 className="font-semibold text-zinc-200 text-sm">{current.titleEn}</h4>
            <p className="text-zinc-400 mt-0.5">{current.captionEn}</p>
          </div>
          <div className="text-right" dir="rtl">
            <h4 className="font-semibold text-emerald-400 text-sm font-arabic">{current.titleAr}</h4>
            <p className="text-zinc-400 mt-0.5 font-arabic">{current.captionAr}</p>
          </div>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {SCREENSHOTS.map((item, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                isActive
                  ? "border-emerald-500 ring-2 ring-emerald-500/20"
                  : "border-zinc-800 hover:border-zinc-700 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={item.src}
                alt={item.titleEn}
                fill
                className="object-cover"
                sizes="120px"
              />
              {isActive && (
                <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
              <div>
                <span className="font-semibold text-zinc-100">{current.titleEn}</span>
                <span className="text-zinc-500 mx-2">•</span>
                <span className="text-emerald-400 font-arabic" dir="rtl">
                  {current.titleAr}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-zinc-950">
              <Image
                src={current.src}
                alt={current.titleEn}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1400px) 100vw, 1200px"
              />
            </div>

            <div className="p-4 bg-zinc-900/80 flex items-center justify-between text-xs text-zinc-400">
              <span>{current.captionEn}</span>
              <span className="font-arabic" dir="rtl">{current.captionAr}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
