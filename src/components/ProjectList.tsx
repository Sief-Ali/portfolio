"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "@/types/project";
import type { PinnedProject } from "@/types/github";

interface ProjectListProps {
  initialProjects: Project[];
  pinnedRepos: PinnedProject[];
}

const CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "Embedded Systems & Robotics",
  "Backend & Systems",
  "Web Applications",
  "Product Engineering",
];

export function ProjectList({ initialProjects, pinnedRepos }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  // Map repo stars from pinned repos
  const starMap: Record<string, number> = {};
  pinnedRepos.forEach((r) => {
    starMap[r.name.toLowerCase()] = r.stargazerCount;
  });

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                isActive
                  ? "bg-emerald-500 text-zinc-950 font-semibold shadow-sm"
                  : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850 border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            liveStars={starMap[project.repoName.toLowerCase()]}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-zinc-500 text-xs font-mono">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
