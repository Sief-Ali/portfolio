import React from "react";
import { projects } from "@/content/projects";
import { getPinnedProjects } from "@/lib/github";
import { ProjectList } from "@/components/ProjectList";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Embedded Systems, Backend & Web",
  description:
    "Explore projects built by Sief Ali across embedded systems, FreeRTOS, ATmega32, Node.js backend architecture, and Next.js full-stack products.",
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  const pinnedRepos = await getPinnedProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <SectionHeading
        number="// PROJECT PORTFOLIO"
        title="Engineering Projects"
        subtitle="A collection of real embedded systems firmware, backend architectures, CLI adapters, and web applications. Each project represents hands-on system building and problem solving."
      />

      <ProjectList initialProjects={projects} pinnedRepos={pinnedRepos} />
    </div>
  );
}
