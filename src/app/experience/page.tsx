import React from "react";
import { Award, CheckCircle2, HelpCircle } from "lucide-react";
import { recognitions, certificates } from "@/content/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { CertificateCard } from "@/components/CertificateCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education, Experience & Recognition",
  description:
    "Honors, track progression, and verified certifications of Sief Ali: DECI Level 5, First Rank Nationwide Level 4, Ministerial Recognition, and TOFAS.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <SectionHeading
        number="// HONORS & CREDENTIALS"
        title="Education, Experience & Recognition"
        subtitle="National competition rankings, engineering track milestones in DECI, and verified academic programming certifications."
      />

      {/* Ministerial Recognition Feature Banner */}
      <section className="relative rounded-2xl border border-amber-800/50 bg-gradient-to-b from-amber-950/30 via-zinc-900/60 to-zinc-900/40 p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-wider">
              DECI Level 4 — Nationwide Recognition
            </span>
          </div>
          <span className="font-mono text-xs bg-amber-500 text-zinc-950 px-3 py-0.5 rounded-full font-bold">
            1st Rank Nationwide — DECI Level 4
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
          Honored by Egypt&apos;s Minister of Communications and Information Technology
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
          Personally honored and officially recognized by Egypt&apos;s Minister of Communications and Information
          Technology (MCIT) for securing the <strong>First Rank Nationwide</strong> in DECI Level 4 within the
          specialized Robotics & Embedded Systems track.
        </p>

        <div className="pt-3 border-t border-amber-900/40 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Top ranking among competitive national cohort</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Comprehensive firmware & robotics evaluation</span>
          </div>
        </div>
      </section>

      {/* DECI Track Milestones Timeline */}
      <section className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-100">
            Digital Egypt Cubs Initiative (DECI) Timeline
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Track progression through Egypt&apos;s leading national initiative for young engineers.
          </p>
        </div>

        <div className="relative pl-6 border-l-2 border-zinc-800 space-y-8">
          {recognitions.map((item) => (
            <div key={item.id} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-950 bg-emerald-400 ring-4 ring-zinc-900" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    {item.period}
                  </span>
                  {item.highlightBadge && (
                    <span className="font-mono text-xs text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded">
                      {item.highlightBadge}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-semibold text-zinc-100">
                  {item.title}
                </h4>

                <p className="text-xs font-mono text-zinc-400">
                  {item.organization} • {item.location}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  {item.summary}
                </p>

                <ul className="pt-2 space-y-1.5 text-xs text-zinc-400">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Certificates */}
      <section className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-100">
            Verified Certifications
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Third-party academic credentials authenticated via official verification portals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>

      {/* Transparency Note regarding Certificate Documents */}
      <section className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/60 text-xs text-zinc-400 space-y-2">
        <div className="flex items-center gap-2 text-zinc-300 font-semibold">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          <span>Documentation & Verification Policy</span>
        </div>
        <p className="leading-relaxed">
          In alignment with strict content accuracy rules, only certificates with verified issuing
          authority IDs and official digital verification links are rendered as verified credentials.
          The ministerial honor is cited directly from official DECI competition records.
        </p>
      </section>
    </div>
  );
}
