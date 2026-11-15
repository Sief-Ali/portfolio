import { Octokit } from "octokit";
import type { PinnedProject, PinnedRepoNode } from "@/types/github";

const GITHUB_USERNAME = "Sief-Ali";

// Curated verified fallback data matching your active pinned GitHub repositories
const CURATED_FALLBACK_PINNED: PinnedProject[] = [
  {
    name: "spst",
    description:
      "A FreeRTOS-based solar panel sun tracker for ATmega32 with LDR tracking, night parking, cloud detection, and fault handling.",
    url: "https://github.com/Sief-Ali/spst",
    stargazerCount: 1,
    forkCount: 0,
    updatedAt: "2026-08-31T02:08:54Z",
    primaryLanguage: { name: "C", color: "#555555" },
    topics: [
      "atmega328p",
      "avr",
      "avr-gcc",
      "embedded-c",
      "embedded-systems",
      "freertos",
      "microcontroller",
      "robotics",
      "rtos",
      "simulide",
      "solar-tracker",
    ],
    category: "Embedded Systems",
    localSlug: "spst",
    isLive: false,
  },
  {
    name: "taskwarrior-web",
    description:
      "A Web UI for Taskwarrior built with Next.js and TypeScript, integrating directly with the taskwarrior-api service.",
    url: "https://github.com/Sief-Ali/taskwarrior-web",
    stargazerCount: 1,
    forkCount: 0,
    updatedAt: "2026-10-31T16:24:09Z",
    primaryLanguage: { name: "TypeScript", color: "#3178c6" },
    topics: ["nextjs", "typescript", "taskwarrior", "web-ui"],
    category: "Web Applications",
    localSlug: "taskwarrior-web",
    isLive: false,
  },
  {
    name: "metro-express",
    description:
      "MetroExpress is a modular embedded ticket machine simulation for the ATmega32, built in Embedded C with a layered architecture, finite state machine (FSM), and SimulIDE support.",
    url: "https://github.com/Sief-Ali/metro-express",
    stargazerCount: 2,
    forkCount: 0,
    updatedAt: "2026-07-25T12:00:42Z",
    primaryLanguage: { name: "C", color: "#555555" },
    topics: [
      "adc",
      "atmega32",
      "avr",
      "avr-gcc",
      "cmake",
      "embedded",
      "embedded-c",
      "finite-state-machine",
      "fsm",
      "uart",
    ],
    category: "Embedded Systems",
    localSlug: "metro-express",
    isLive: false,
  },
  {
    name: "sensor-robot",
    description:
      "Simple Sensor Robot project running on ESP32 using MicroPython with ultrasonic distance sensing and stepper motor actuation.",
    url: "https://github.com/Sief-Ali/sensor-robot",
    stargazerCount: 1,
    forkCount: 0,
    updatedAt: "2025-04-28T22:14:19Z",
    primaryLanguage: { name: "Python", color: "#3572A5" },
    topics: ["embedded-systems", "micropython", "esp32", "robotics"],
    category: "Embedded Systems",
    localSlug: "sensor-robot",
    isLive: false,
  },
];

function assignCategory(
  name: string,
  topics: string[],
  primaryLang: string | null
): "Embedded Systems" | "Backend & Realtime" | "Web Applications" | "Product Engineering" {
  const lowerName = name.toLowerCase();
  const lowerTopics = topics.map((t) => t.toLowerCase());

  if (
    lowerName === "spst" ||
    lowerName === "metro-express" ||
    lowerName === "sensor-robot" ||
    lowerTopics.includes("embedded-systems") ||
    lowerTopics.includes("avr") ||
    lowerTopics.includes("microcontroller")
  ) {
    return "Embedded Systems";
  }

  if (
    lowerName === "taskwarrior-api" ||
    lowerName === "taskwarrior-adapter" ||
    lowerTopics.includes("backend") ||
    lowerTopics.includes("npm-package")
  ) {
    return "Backend & Realtime";
  }

  if (lowerName.includes("web") || lowerTopics.includes("nextjs") || lowerTopics.includes("react")) {
    return "Web Applications";
  }

  if (primaryLang === "C" || primaryLang === "C++") {
    return "Embedded Systems";
  }

  return "Product Engineering";
}

function resolveLocalSlug(repoName: string): string | undefined {
  const map: Record<string, string> = {
    spst: "spst",
    "metro-express": "metro-express",
    "taskwarrior-web": "taskwarrior-web",
    "sensor-robot": "sensor-robot",
  };
  return map[repoName.toLowerCase()];
}

const PINNED_GRAPHQL_QUERY = `
query getPinnedRepos($login: String!) {
  user(login: $login) {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          updatedAt
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 8) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

interface GraphQLResponse {
  user: {
    pinnedItems: {
      nodes: PinnedRepoNode[];
    };
  } | null;
}

/**
 * Fetches the user's pinned repositories using Octokit and GitHub GraphQL API.
 * Gracefully handles missing tokens, network failures, and rate limits with curated fallbacks.
 */
export async function getPinnedProjects(): Promise<PinnedProject[]> {
  const token = process.env.GITHUB_TOKEN?.trim();

  // If token is present, execute authenticated GraphQL query
  if (token) {
    try {
      const octokit = new Octokit({ auth: token });
      const response = await octokit.graphql<GraphQLResponse>(PINNED_GRAPHQL_QUERY, {
        login: GITHUB_USERNAME,
      });

      const nodes = response?.user?.pinnedItems?.nodes;
      if (nodes && nodes.length > 0) {
        return nodes.map((node) => {
          const topics = node.repositoryTopics?.nodes?.map((t) => t.topic.name) || [];
          return {
            name: node.name,
            description: node.description || "",
            url: node.url,
            stargazerCount: node.stargazerCount,
            forkCount: node.forkCount,
            updatedAt: node.updatedAt,
            primaryLanguage: node.primaryLanguage,
            topics,
            category: assignCategory(node.name, topics, node.primaryLanguage?.name || null),
            localSlug: resolveLocalSlug(node.name),
            isLive: true,
          };
        });
      }
    } catch (err) {
      console.warn("GitHub GraphQL query failed, attempting public REST fallback:", err);
    }
  }

  // Fallback 1: Attempt unauthenticated REST calls for active pinned repositories
  try {
    const knownPinnedNames = ["spst", "taskwarrior-web", "metro-express", "sensor-robot"];

    const results = await Promise.allSettled(
      knownPinnedNames.map(async (repoName) => {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
          next: { revalidate: 3600 },
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Sief-Ali-Portfolio",
          },
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
    );

    const liveRepos: PinnedProject[] = [];

    results.forEach((result, idx) => {
      const defaultData = CURATED_FALLBACK_PINNED[idx];
      if (result.status === "fulfilled") {
        const d = result.value;
        const topics = Array.isArray(d.topics) ? d.topics : defaultData.topics;
        liveRepos.push({
          name: d.name || defaultData.name,
          description: d.description || defaultData.description,
          url: d.html_url || defaultData.url,
          stargazerCount: typeof d.stargazers_count === "number" ? d.stargazers_count : defaultData.stargazerCount,
          forkCount: typeof d.forks_count === "number" ? d.forks_count : defaultData.forkCount,
          updatedAt: d.updated_at || defaultData.updatedAt,
          primaryLanguage: d.language
            ? {
                name: d.language,
                color: d.language === "C" ? "#555555" : d.language === "TypeScript" ? "#3178c6" : "#3572A5",
              }
            : defaultData.primaryLanguage,
          topics,
          category: defaultData.category,
          localSlug: defaultData.localSlug,
          isLive: true,
        });
      } else {
        liveRepos.push(defaultData);
      }
    });

    if (liveRepos.length > 0) {
      return liveRepos;
    }
  } catch (restErr) {
    console.warn("Public GitHub REST fallback failed, using curated data:", restErr);
  }

  // Fallback 2: Guaranteed zero-failure curated list
  return CURATED_FALLBACK_PINNED;
}
