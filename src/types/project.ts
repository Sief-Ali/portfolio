export type ProjectCategory =
  | "Embedded Systems & Robotics"
  | "Backend & Systems"
  | "Web Applications"
  | "Product Engineering";

export type ProjectStatus =
  | "Completed"
  | "In Active Development"
  | "Architectural Design";

export interface Project {
  slug: string;
  title: string;
  repoName: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  githubUrl: string;
  demoUrl?: string;
  npmUrl?: string;
  featured: boolean;
  pinned: boolean;
  order: number;
  status: ProjectStatus;
  technologies: string[];
  highlights: string[];
  hardware?: {
    mcu: string;
    peripherals: string[];
    simulation?: string;
    architectureType?: string;
  };
  backend?: {
    runtime: string;
    framework: string;
    database?: string;
    protocols?: string[];
  };
  image?: string;
  circuitImage?: string;
  detailedOverview: string;
  engineeringDecisions: {
    title: string;
    rationale: string;
  }[];
}
