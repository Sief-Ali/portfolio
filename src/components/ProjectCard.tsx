import React from "react";
import Link from "next/link";
import { ExternalLink, Star, Cpu, Server, ArrowRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { CategoryBadge } from "./CategoryBadge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  liveStars?: number;
}

export function ProjectCard({ project, liveStars }: ProjectCardProps) {
  const isEmbedded = project.category.includes("Embedded");
  const isBackend = project.category.includes("Backend");
  const isProduct = project.category.includes("Product") || project.slug === "madarek";

  const starsCount = liveStars !== undefined ? liveStars : undefined;

  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/90">
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <CategoryBadge category={project.category} />

          <div className="flex items-center gap-2">
            {starsCount !== undefined && starsCount > 0 && (
              <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700/60">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
                {starsCount}
              </span>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-zinc-400 hover:text-white transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
          <Link href={isProduct ? "/projects/madarek" : `/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="mt-1 text-xs font-mono text-zinc-400">
          {project.tagline}
        </p>

        {/* Embedded or Backend Specific Callout */}
        {isEmbedded && project.hardware && (
          <div className="mt-3 p-2.5 rounded-lg bg-zinc-950/80 border border-amber-950/40 text-[11px] font-mono text-amber-300/90 flex items-start gap-2">
            <Cpu className="w-3.5 h-3.5 mt-0.5 text-amber-400 shrink-0" />
            <div>
              <span className="font-semibold">{project.hardware.mcu}</span>
              <span className="text-zinc-500"> • </span>
              <span className="text-zinc-400">
                {project.hardware.architectureType || "MCAL / HAL Drivers"}
              </span>
            </div>
          </div>
        )}

        {isBackend && project.backend && (
          <div className="mt-3 p-2.5 rounded-lg bg-zinc-950/80 border border-cyan-950/40 text-[11px] font-mono text-cyan-300/90 flex items-start gap-2">
            <Server className="w-3.5 h-3.5 mt-0.5 text-cyan-400 shrink-0" />
            <div>
              <span className="font-semibold">{project.backend.framework}</span>
              {project.backend.database && (
                <>
                  <span className="text-zinc-500"> • </span>
                  <span className="text-zinc-400">{project.backend.database}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-zinc-300">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-1.5 text-xs text-zinc-400">
          {project.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400/80 font-mono text-[11px] mt-0.5">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Details */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono bg-zinc-950 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800/90"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono text-zinc-500 px-1 py-0.5">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-medium">
          <Link
            href={isProduct ? "/projects/madarek" : `/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>{isProduct ? "View Product Case Study" : "View Architecture & Code"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-red-400 transition-colors"
            >
              <span>npm</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
