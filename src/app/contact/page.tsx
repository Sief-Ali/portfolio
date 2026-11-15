import React from "react";
import { MapPin, ExternalLink, Terminal, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedInIcon } from "@/components/LinkedInIcon";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Sief Ali",
  description: "Email Sief Ali or connect on GitHub and LinkedIn.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <SectionHeading
        number="// GET IN TOUCH"
        title="Contact & Online Presence"
        subtitle="Connect regarding embedded systems, backend architecture, open-source projects, or collaboration opportunities."
      />

      <div className="space-y-6">
        <a
          href="mailto:sief4136@gmail.com"
          aria-label="Email Sief Ali at sief4136@gmail.com"
          className="p-6 sm:p-8 rounded-xl border border-emerald-700/50 bg-gradient-to-r from-emerald-950/50 to-zinc-900/80 hover:border-emerald-500/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-100">Email me</h3>
              <p className="text-sm text-emerald-300 mt-1">sief4136@gmail.com</p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400">Primary contact</span>
        </a>

        {/* Verified Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-100 text-sm">GitHub</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Explore source code, repositories, commits, and project discussions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>github.com/Sief-Ali</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#0A66C2] mb-4 group-hover:text-blue-400 transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-100 text-sm">LinkedIn</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Connect with me professionally.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-blue-400">
              <span>linkedin.com/in/sief-ali-480968254</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href="https://www.npmjs.com/package/taskwarrior-adapter"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-400 mb-4 font-mono font-bold text-sm">
                npm
              </div>
              <h3 className="font-semibold text-zinc-100 text-sm">npm Package Registry</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Published packages including the typed `taskwarrior-adapter` Node.js library.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-red-400">
              <span>taskwarrior-adapter</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Location & Context */}
        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 flex items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm text-zinc-200">Location</h4>
            <p className="text-xs text-zinc-400">
              Based in Egypt. Open to technical collaborations, embedded engineering discussions,
              and software development initiatives.
            </p>
          </div>
        </div>

        {/* Information Notice */}
        <div className="p-5 rounded-xl border border-zinc-850 bg-zinc-950/60 text-xs text-zinc-400 space-y-1">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Direct Outreach Notice</span>
          </div>
          <p className="leading-relaxed">
            You can reach me by email or open an issue or start a repository discussion directly on
            GitHub at{" "}
            <a
              href="https://github.com/Sief-Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-mono"
            >
              github.com/Sief-Ali
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
