import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
  Award,
  Star,
  GitFork,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { profile } from "@/content/profile";
import { certificates } from "@/content/experience";
import { projects } from "@/content/projects";
import { getPinnedProjects } from "@/lib/github";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryBadge } from "@/components/CategoryBadge";
import { CertificateCard } from "@/components/CertificateCard";
import "@vercel/analytics"
import { Analytics } from "@vercel/analytics/next";

export const revalidate = 3600; // revalidate GitHub integration every hour

export default async function HomePage() {
  const pinnedRepos = await getPinnedProjects();
  const madarekProject = projects.find((p) => p.slug === "madarek");
  const homeCertificates = certificates.filter((cert) =>
    ["deci-level-3-cert", "tofas-js-3"].includes(cert.id)
  );

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24">
        {/* HERO SECTION */}
        <section className="relative pt-4 sm:pt-10">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 sm:gap-12">
            <div className="space-y-6 max-w-2xl">
              {/* Status Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  DECI Level 5 Candidate
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {profile.location}
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
                  {profile.headline}
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                  {profile.subheadline}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold transition-colors shadow-sm"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                </a>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 transition-colors"
                >
                  <span>Awards & Recognition</span>
                </Link>
              </div>

              {/* Quick Tech Snapshot */}
              <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-zinc-500">
                <span className="text-zinc-400 font-semibold">Core Stack:</span>
                <span>Embedded C</span>
                <span>•</span>
                <span>ATmega32 / FreeRTOS</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>Next.js / Node.js</span>
                <span>•</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            {/* Avatar and Terminal Identity Card */}
            <div className="shrink-0 flex flex-col items-center sm:items-start">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-xl">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <div className="mt-3 text-center sm:text-left">
                <span className="block font-semibold text-sm text-zinc-200">
                  {profile.name}
                </span>
                <span className="block font-mono text-xs text-zinc-400">
                  @{profile.githubUsername}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I WORK ON */}
        <section>
          <SectionHeading
            number="// 01. SPECIALIZATIONS"
            title="What I Work On"
            subtitle="Engineering across the entire computing stack, connecting deterministic microcontrollers with modern web systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.focusAreas.map((area) => (
              <div
                key={area.id}
                className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4">
                    {area.id === "embedded" && <Cpu className="w-5 h-5 text-amber-400" />}
                    {area.id === "backend" && <Terminal className="w-5 h-5 text-cyan-400" />}
                    {area.id === "fullstack" && <Layers className="w-5 h-5 text-emerald-400" />}
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                  {area.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-850"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED GITHUB PROJECTS (LIVE OCTOKIT INTEGRATION) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <SectionHeading
                number="// 02. GITHUB REPOSITORIES"
                title="Pinned Projects"
                subtitle="Live repositories retrieved directly from my GitHub profile. Pinned projects reflect active engineering across firmware, CLI tooling, and web architecture."
                className="mb-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                <span
                  className={`w-2 h-2 rounded-full ${
                    pinnedRepos.some((p) => p.isLive) ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                {pinnedRepos.some((p) => p.isLive) ? "Live GitHub Synced" : "Curated Baseline"}
              </span>
              <Link
                href="/projects"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 ml-2"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedRepos.map((repo) => (
              <div
                key={repo.name}
                className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <CategoryBadge category={repo.category} size="sm" />
                    <div className="flex items-center gap-2">
                      {repo.stargazerCount > 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
                          {repo.stargazerCount}
                        </span>
                      )}
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-200 transition-colors p-1"
                        aria-label={`View ${repo.name} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors text-base">
                    {repo.localSlug ? (
                      <Link href={`/projects/${repo.localSlug}`}>{repo.name}</Link>
                    ) : (
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    )}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-3">
                  {/* Language & Topics */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    {repo.primaryLanguage && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: repo.primaryLanguage.color }}
                        />
                        <span>{repo.primaryLanguage.name}</span>
                      </span>
                    )}
                    {repo.forkCount > 0 && (
                      <span className="inline-flex items-center gap-1 text-zinc-500">
                        <GitFork className="w-3 h-3" />
                        {repo.forkCount}
                      </span>
                    )}
                  </div>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-850"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Detail link */}
                  <div className="pt-1 flex items-center justify-between text-xs font-medium">
                    {repo.localSlug ? (
                      <Link
                        href={`/projects/${repo.localSlug}`}
                        className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                      >
                        <span>Project Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200"
                      >
                        <span>GitHub Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPECIAL PRODUCT SHOWCASE: MADAREK مدارِك */}
        {madarekProject && (
          <section className="relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 sm:p-10 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                    {"// 03. PRODUCT CASE STUDY"}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-mono bg-violet-950/60 text-violet-300 px-2.5 py-0.5 rounded-full border border-violet-800/50">
                    Product Engineering
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 flex items-center gap-3">
                    <span>Madarek</span>
                    <span className="text-emerald-400 font-arabic text-2xl" dir="rtl">
                      مدارِك
                    </span>
                  </h3>
                  <p className="text-sm font-mono text-zinc-400">
                    Student Management Software for Teachers & Educational Centers
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  An Arabic desktop & web application designed to solve student records,
                  class attendance, exam grading, and notification review workflows for educators.
                  Built with React, TypeScript, and native RTL typography.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Student Group Placements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Class Attendance Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Exam Results & Scores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Operator Review Workflow</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/projects/madarek"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors shadow-sm"
                  >
                    <span>Explore Madarek Case Study & UI Previews</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Thumbnail */}
              <div className="w-full lg:w-96 shrink-0 relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <Image
                  src="/madarek/1.png"
                  alt="Madarek Dashboard Preview"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-zinc-300 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                  Live App Preview
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EDUCATION, EXPERIENCE & RECOGNITION */}
        <section>
          <SectionHeading
            number="// 04. EDUCATION & HONORS"
            title="Recognition & Certifications"
            subtitle="Distinctions achieved through competitive engineering assessments, national initiatives, and fundamental academic testing."
          />

          <div className="space-y-6">
            {/* Ministerial Recognition Highlight Banner */}
            <div className="rounded-xl border border-amber-800/40 bg-gradient-to-r from-amber-950/30 via-zinc-900/60 to-zinc-900/40 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                    National Ministerial Recognition
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-300/80 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/50">
                  First Rank Nationwide — DECI Level 4
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                Honored by Egypt&apos;s Minister of Communications and Information Technology
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
                Recognized for achieving <strong>First Rank Nationwide</strong> in DECI Level 4 —
                Robotics & Embedded Systems.
                Distinguished among thousands of student applicants and evaluated on embedded firmware design,
                microcontroller peripherals, and problem-solving.
              </p>

              <div className="mt-4 pt-4 border-t border-amber-950/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-zinc-400">
                  Organization: Digital Egypt Cubs Initiative (DECI) & MCIT Egypt
                </span>
                <Link
                  href="/experience"
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Read Education & Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Two Verified TOFAS Certificates */}
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-200">
                  Selected Certificates
                </h4>
                <p className="text-xs text-zinc-400">
                  One DECI graduation certificate and one SPRIX programming certificate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {homeCertificates.map((cert) => (
                  <CertificateCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block">
                {"// 05. BACKGROUND & MINDSET"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                Engineering Across Hardware & Software
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {profile.about.lead}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Whether debugging a Timer interrupt on an ATmega32 in SimulIDE or designing
                a type-safe Express & Next.js monorepo for Taskwarrior, I value understanding
                how the underlying system functions rather than copy-pasting black-box abstractions.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-100 hover:bg-white text-zinc-950 transition-colors"
              >
                <span>Full Biography & Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850 transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Analytics />
    </>
  );
}
