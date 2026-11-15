export interface PinnedRepoNode {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
}

export interface PinnedProject {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  topics: string[];
  category: "Embedded Systems" | "Backend & Realtime" | "Web Applications" | "Product Engineering";
  localSlug?: string;
  isLive: boolean;
}
