"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ExternalLink, ShieldCheck, X } from "lucide-react";
import type { VerifiedCertificate } from "@/types/experience";

interface CertificateCardProps {
  cert: VerifiedCertificate;
}

export function CertificateCard({ cert }: CertificateCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-zinc-700">
        <div>
          {/* Badge & Status */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded-full font-medium">
              <CheckCircle2 className="w-3 h-3" />
              Verified Certificate
            </span>
            <span className="text-xs font-mono text-zinc-500">{cert.issueDate}</span>
          </div>

          {/* Certificate Title */}
          <h3 className="text-lg font-semibold text-zinc-100">{cert.title}</h3>

          <p className="mt-1 text-xs text-zinc-400">
            <span className="text-zinc-300 font-medium">{cert.issuer}</span>
            {cert.collaborationWith && (
              <span className="block text-zinc-500 text-[11px] mt-0.5">
                In collaboration with {cert.collaborationWith}
              </span>
            )}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-zinc-300">
            {cert.description}
          </p>

          {/* Certificate Thumbnail Preview */}
          <div
            onClick={() => setModalOpen(true)}
            className="mt-4 relative aspect-[16/11] w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 group cursor-pointer hover:border-emerald-500/50 transition-colors"
          >
            <Image
              src={cert.imagePath}
              alt={cert.title}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-xs font-mono bg-zinc-900/90 text-zinc-200 border border-zinc-700 px-3 py-1 rounded shadow-lg">
                Click to inspect certificate
              </span>
            </div>
          </div>

          {/* Cert ID & verification */}
          <div className="mt-3 pt-3 border-t border-zinc-800/70 text-[11px] font-mono space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-zinc-500">ID:</span>
              <span className="truncate max-w-[200px] text-zinc-300">{cert.certificateId}</span>
            </div>
          </div>
        </div>

        {/* Verification Link */}
        <div className="mt-4 pt-3 flex items-center justify-between text-xs">
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verify Official Record</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="text-zinc-400 hover:text-zinc-200 text-xs"
          >
            View Document
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div>
                <h4 className="font-semibold text-sm text-zinc-100">{cert.title}</h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">ID: {cert.certificateId}</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/11] w-full my-4 bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src={cert.imagePath}
                alt={cert.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 900px"
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">
              <span>{cert.issuer} • {cert.issueDate}</span>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
              >
                <span>Open Verification Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
