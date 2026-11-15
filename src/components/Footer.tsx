import React from "react";
import Link from "next/link";
import { Cpu, MapPin, Terminal, Linkedin } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-zinc-100">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-sm">Sief Ali</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Student developer bridging hardware and software. Building from low-level
              firmware and microcontrollers to backend systems and web applications.
            </p>
            <div className="flex items-center gap-3 text-xs text-zinc-500 pt-1">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" /> Egypt
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-mono">
                <Terminal className="w-3 h-3 text-emerald-400" /> Octokit & Next.js 15
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/projects/madarek" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Madarek مدارِك
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Education & Honors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  About Sief
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/Sief-Ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/Sief-Ali</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sief-ali-480968254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/taskwarrior-adapter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <span className="font-mono text-[11px] text-red-400 font-bold">npm</span>
                  <span>taskwarrior-adapter</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Sief Ali. Engineered with Next.js, TypeScript & Tailwind CSS.</p>
          <p className="font-mono">DECI Level 5 Candidate • 1st Rank Nationwide Level 4</p>
        </div>
      </div>
    </footer>
  );
}
