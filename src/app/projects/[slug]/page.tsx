import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Server,
  CheckCircle2,
  FileCode2,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { projects } from "@/content/projects";
import { CategoryBadge } from "@/components/CategoryBadge";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug !== "madarek")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Technical Architecture`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Madarek has its own dedicated rich case study route at /projects/madarek
  if (slug === "madarek") {
    // handled by /projects/madarek
  }

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const isEmbedded = project.category.includes("Embedded");
  const isBackend = project.category.includes("Backend");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={project.category} />
          <span
            className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${
              project.status === "Completed"
                ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/40"
                : project.status === "Architectural Design"
                ? "bg-cyan-950/40 text-cyan-300 border-cyan-800/40"
                : "bg-amber-950/40 text-amber-300 border-amber-800/40"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-mono text-xs sm:text-sm">
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-750 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-800/50 transition-colors"
            >
              <span>View npm Package</span>
              <ExternalLink className="w-3.5 h-3.5 text-red-400" />
            </a>
          )}
        </div>
      </section>

      {/* Circuit or Architectural Diagram if available */}
      {project.circuitImage && (
        <section className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="font-semibold text-zinc-200">
              SimulIDE Circuit & Peripheral Schematic
            </span>
            <span>ATmega32 Wiring</span>
          </div>

          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
            <Image
              src={project.circuitImage}
              alt={`${project.title} Circuit Diagram`}
              fill
              className="object-contain p-2"
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </section>
      )}

      {/* Hardware / Systems Specifications Card */}
      {isEmbedded && project.hardware && (
        <section className="p-6 rounded-xl border border-amber-950/60 bg-zinc-900/50 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
            <Cpu className="w-4 h-4" />
            <span>Hardware & Peripheral Allocation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-zinc-500 font-mono block">Microcontroller:</span>
              <span className="text-zinc-200 font-medium font-mono">
                {project.hardware.mcu}
              </span>
            </div>

            {project.hardware.architectureType && (
              <div>
                <span className="text-zinc-500 font-mono block">Architecture Pattern:</span>
                <span className="text-zinc-200 font-medium font-mono">
                  {project.hardware.architectureType}
                </span>
              </div>
            )}

            {project.hardware.simulation && (
              <div className="sm:col-span-2">
                <span className="text-zinc-500 font-mono block">Simulation Environment:</span>
                <span className="text-zinc-300 font-mono">
                  {project.hardware.simulation}
                </span>
              </div>
            )}

            <div className="sm:col-span-2">
              <span className="text-zinc-500 font-mono block mb-1">
                Peripheral & Pin Allocation:
              </span>
              <ul className="space-y-1 text-zinc-300 font-mono text-[11px]">
                {project.hardware.peripherals.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-amber-400">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Backend & Systems Specifications Card */}
      {isBackend && project.backend && (
        <section className="p-6 rounded-xl border border-cyan-950/60 bg-zinc-900/50 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
            <Server className="w-4 h-4" />
            <span>Backend & Systems Stack</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block">Runtime:</span>
              <span className="text-zinc-200">{project.backend.runtime}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Framework:</span>
              <span className="text-zinc-200">{project.backend.framework}</span>
            </div>
            {project.backend.database && (
              <div>
                <span className="text-zinc-500 block">Database:</span>
                <span className="text-zinc-200">{project.backend.database}</span>
              </div>
            )}
            {project.backend.protocols && (
              <div>
                <span className="text-zinc-500 block">Protocols:</span>
                <span className="text-zinc-200">{project.backend.protocols.join(", ")}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Detailed Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
          <FileCode2 className="w-5 h-5 text-emerald-400" />
          Technical Overview
        </h2>

        <div className="prose prose-invert max-w-none text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line">
          {project.detailedOverview}
        </div>
      </section>

      {/* Architectural Decisions & Rationale */}
      {project.engineeringDecisions.length > 0 && (
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-zinc-100">
              Engineering Decisions & Rationale
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Why the system is structured this way rather than standard simplifications.
            </p>
          </div>

          <div className="space-y-4">
            {project.engineeringDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2"
              >
                <h3 className="font-semibold text-sm text-zinc-200 flex items-center gap-2">
                  <span className="text-emerald-400 font-mono text-xs">{idx + 1}.</span>
                  {decision.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {decision.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Highlights list */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-zinc-100">
          Key Technical Highlights
        </h2>

        <ul className="grid grid-cols-1 gap-2.5">
          {project.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="p-3.5 rounded-lg border border-zinc-850 bg-zinc-950/60 flex items-start gap-3 text-xs text-zinc-300"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack Pills */}
      <section className="pt-6 border-t border-zinc-800/80 space-y-3">
        <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block">
          Technologies Used
        </span>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="pt-8 border-t border-zinc-800 flex items-center justify-between text-xs">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Projects</span>
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>View on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
