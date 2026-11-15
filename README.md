# Sief Ali — Personal Developer Portfolio

Engineering portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically around the intersection of **embedded systems, backend architecture, and full-stack software products**.

---

## Architecture Overview

```
src/
├── app/
│   ├── page.tsx               # Homepage: Hero, specializations, pinned repos, honors & certs
│   ├── projects/
│   │   ├── page.tsx           # Categorized portfolio with interactive filters
│   │   ├── madarek/
│   │   │   └── page.tsx       # Dedicated Madarek product case study with RTL Arabic support
│   │   └── [slug]/
│   │       └── page.tsx       # In-depth architectural case studies (SPST, MetroExpress, etc.)
│   ├── about/
│   │   └── page.tsx           # Background, engineering philosophy, and cross-disciplinary skills
│   ├── experience/
│   │   └── page.tsx           # DECI Level 4 & 5 milestones, Ministerial Recognition, TOFAS certs
│   ├── contact/
│   │   └── page.tsx           # Verified GitHub and npm channels
│   ├── sitemap.ts             # Dynamic search engine sitemap
│   └── robots.ts              # Robots configuration
├── components/
│   ├── Header.tsx             # Responsive sticky navigation with mobile drawer
│   ├── Footer.tsx             # Semantic engineering footer
│   ├── ProjectCard.tsx        # Differentiates embedded firmware (MCAL/HAL) vs web/backend
│   ├── ProjectList.tsx        # Client-side category filtering
│   ├── CertificateCard.tsx    # Verified credential card with modal inspection & official verify link
│   └── MadarekGallery.tsx     # Fullscreen screenshot gallery with RTL captions
├── content/                   # Centralized data files for easily maintaining info
│   ├── profile.ts             # Bio, headline, focus areas
│   ├── projects.ts            # Detailed project technical highlights & decisions
│   └── experience.ts          # DECI achievements and verified TOFAS certificates
└── lib/
    └── github.ts              # Server-side Octokit & GraphQL pinned repository fetcher with fallbacks
```

---

## Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Environment Variables (Optional)
```bash
cp .env.example .env.local
```
Add your `GITHUB_TOKEN` to `.env.local` to query GitHub's GraphQL API for live pinned repositories. If omitted, the server automatically uses public REST calls and verified fallback data.

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000).

### 4. Build for Production
```bash
pnpm build
pnpm start
```
