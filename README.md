# Sief Ali — Developer Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/7444aa26-de9d-4178-8b49-1cb5630e27e6/deploy-status)](https://app.netlify.com/projects/sief-ali/deploys)

A personal portfolio showcasing my work across embedded systems, robotics, backend engineering, and full-stack applications.

**Live site:** [sief.is-a.dev](https://sief.is-a.dev) · **GitHub:** [Sief-Ali](https://github.com/Sief-Ali) · **LinkedIn:** [sief-ali](https://www.linkedin.com/in/sief-ali-480968254/)

## About

This portfolio brings together projects and milestones spanning firmware and web software. It includes detailed project pages, a dedicated case study for **Madarek — مدارِك**, DECI education and recognition, certificates, and contact links.

## Features

- **Project portfolio** with category filters and detailed project pages
- **Madarek case study** with an Arabic RTL interface gallery
- **DECI timeline** with Level 3, Level 4 completion, separate Level 4 nationwide recognition, and Level 5 progression
- **Certificates** with previews and verification links
- **GitHub pinned repositories** fetched from GitHub when the optional token is configured, with public REST and curated fallback data
- **Responsive layout** for mobile and desktop

## Tech stack

- [Next.js 15](https://nextjs.org/) App Router and [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Octokit](https://github.com/octokit/octokit.js) for GitHub repository data
- [Lucide](https://lucide.dev/) icons

## Run locally

### Requirements

- Node.js 20 or later
- pnpm

### Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available commands

```bash
pnpm dev     # start the development server
pnpm lint    # lint the project
pnpm build   # create a production build
pnpm start   # serve the production build
```

## GitHub repository integration

The homepage refreshes pinned repository data hourly. To query GitHub's pinned repositories through GraphQL, create a `.env.local` file in the project root and add a GitHub personal access token:

```env
GITHUB_TOKEN=your_github_token
```

Without the token, the app attempts public GitHub REST requests and then uses curated fallback data if the requests fail.

## Project structure

```text
src/
├── app/             # Home, projects, Madarek, about, experience, and contact pages
├── components/      # Shared navigation, project cards, certificate cards, and gallery
├── content/         # Profile, project, and recognition data
├── lib/             # GitHub integration and utilities
└── types/           # Shared TypeScript types
public/
├── certificates/    # DECI certificates and recognition
├── images/          # Profile, project, and certificate images
└── madarek/         # Madarek application screenshots
github-profile/
└── README.md        # Ready-to-copy GitHub profile README
```

## GitHub profile README

The separate [`github-profile/README.md`](github-profile/README.md) is designed for the `Sief-Ali/Sief-Ali` profile repository. Copy its contents into that repository's root `README.md` to show the profile page.
