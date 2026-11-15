import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Terminal,
  Layers,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sief Ali — Student Engineer & Developer",
  description:
    "Learn about Sief Ali's background, engineering philosophy, and cross-disciplinary journey spanning embedded firmware, backend architecture, and full-stack web development.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <SectionHeading
        number="// BIOGRAPHY & PHILOSOPHY"
        title="About Sief Ali"
        subtitle="A student developer exploring computing from microcontrollers and firmware to full-stack applications."
      />

      {/* Main Bio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <p className="text-base text-zinc-200 font-medium leading-relaxed">
            {profile.about.lead}
          </p>

          {profile.about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <p>
            I do not view myself as a senior software engineer or claim decades of commercial
            experience. Instead, I am an enthusiastic and dedicated student engineer who enjoys
            tackling challenging problems, studying foundational computer science and electrical
            engineering concepts, and applying them in actual working implementations.
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
          <div className="relative w-28 h-28 mx-auto rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-zinc-100">{profile.name}</h3>
            <p className="text-xs font-mono text-zinc-400">
              Embedded & Full-Stack Developer
            </p>
            <p className="text-[11px] font-mono text-zinc-500 mt-1 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" />
              {profile.location}
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-800 space-y-2 text-xs">
            <div className="flex justify-between text-zinc-400 font-mono">
              <span>Track:</span>
              <span className="text-zinc-200">DECI Level 5</span>
            </div>
            <div className="flex justify-between text-zinc-400 font-mono">
              <span>Nationwide:</span>
              <span className="text-amber-400 font-semibold">1st Place (L4)</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/Sief-Ali</span>
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Pillars */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
            {"// MINDSET"}
          </span>
          <h2 className="text-2xl font-bold text-zinc-100">
            How I Approach Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
            <div className="w-8 h-8 rounded-md bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 mb-3">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-zinc-200">
              Down to the Hardware
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              I appreciate understanding registers, timer clocks, ADC sampling times, and interrupt
              vectors. Writing bare-metal and FreeRTOS firmware teaches resource conservation and
              deterministic execution.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
            <div className="w-8 h-8 rounded-md bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-3">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-zinc-200">
              Disciplined Architectures
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Whether separating MCAL and HAL layers in Embedded C or decoupling database
              persistence from realtime WebSocket streams, clear abstraction boundaries keep codebases
              maintainable.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
            <div className="w-8 h-8 rounded-md bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-zinc-200">
              Product-Minded Usability
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Software only provides value when real people can use it comfortably. Projects like
              Madarek reflect my commitment to clean user flows, localized typography, and responsive
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Toolbox */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
            {"// TOOLBOX & SKILLS"}
          </span>
          <h2 className="text-2xl font-bold text-zinc-100">
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
            <h3 className="text-sm font-semibold text-amber-400 font-mono">
              Embedded Systems & Firmware
            </h3>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span>
                <span>Microcontrollers: ATmega32 (AVR), ESP32 (Xtensa)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span>
                <span>Languages: Embedded C, MicroPython</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span>
                <span>Real-Time OS: FreeRTOS (tasks, queues, semaphores)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span>
                <span>Peripherals: ADC, PWM, Timers, USART, I2C, SPI, External Interrupts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">▹</span>
                <span>Tooling: CMake, AVR-GCC, SimulIDE circuit simulation</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
            <h3 className="text-sm font-semibold text-cyan-400 font-mono">
              Backend & Systems
            </h3>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Environments: Node.js, Linux, systemd daemons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Languages: TypeScript, JavaScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Protocols: REST APIs, WebSockets (Socket.IO)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Databases: PostgreSQL (relational schemas)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Package Ecosystem: Published npm libraries, CLI integrations</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
            <h3 className="text-sm font-semibold text-emerald-400 font-mono">
              Web & Frontend Development
            </h3>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span>
                <span>Frameworks: Next.js (App Router), React, Vite</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span>
                <span>Styling: Tailwind CSS, Responsive Design, Dark Mode</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span>
                <span>Internationalization: Arabic typography, RTL-first layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▹</span>
                <span>Desktop: Tauri cross-platform packaging</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-3">
            <h3 className="text-sm font-semibold text-violet-400 font-mono">
              Engineering Practices
            </h3>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-violet-400">▹</span>
                <span>Version Control: Git, conventional branching, submodule management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-400">▹</span>
                <span>State Machines: Deterministic event-driven FSMs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-400">▹</span>
                <span>Type Safety: Strict TypeScript, parameter validation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-violet-400">▹</span>
                <span>Documentation: Comprehensive Markdown and circuit diagrams</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="pt-8 border-t border-zinc-800 flex items-center justify-between text-xs">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/experience"
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <span>View Honors & Recognition</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
