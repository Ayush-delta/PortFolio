# My Portfolio — Next.js 14 App Router

A modern, dark-themed portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and a hand-crafted CSS design system. Inspired by iayush.com.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Custom CSS (globals.css) |
| Animations | CSS / GSAP (add if needed) |
| Email | Resend (via /api/contact) |
| Deployment | Vercel |

---

## Folder Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout — wraps all pages
│   ├── page.tsx            # Home page → /
│   ├── loading.tsx         # Loading UI for route segments
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── (auth)/             # Route group — does NOT affect URL
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── dashboard/          # Nested route → /dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── settings/
│   │       └── page.tsx    # → /dashboard/settings
│   └── api/
│       └── users/
│           └── route.ts    # API Route Handler → /api/users
├── _components/
│   ├── header.tsx
│   ├── footer.tsx
│   └── sections/           # One component per portfolio section
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── projects.tsx
│       ├── experience.tsx
│       ├── testimonials.tsx
│       └── contact.tsx
├── _lib/
│   ├── db.ts               # DB connection (Prisma / Drizzle)
│   └── utils.ts            # Shared helpers (cn, formatDate…)
├── _styles/
│   └── globals.css         # Design system + global styles
├── public/                 # Static assets (served from /)
│   └── favicon.ico
├── .env.local              # Environment variables (git-ignored)
├── .gitignore
├── next.config.mjs
├── tsconfig.json           # Path aliases: @/* → ./*
└── package.json
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in your values
cp .env.local .env.local   # already done — just edit

# 3. Run the dev server
npm run dev

# Open http://localhost:3000
```

---

## Customising

| What | Where |
|---|---|
| Your name, bio, role | `_components/sections/hero.tsx`, `about.tsx` |
| Projects | `_components/sections/projects.tsx` — edit the `PROJECTS` array |
| Experience | `_components/sections/experience.tsx` — edit the `EXPERIENCE` array |
| Skills | `_components/sections/skills.tsx` — edit the `SKILLS` object |
| Colors / fonts | `_styles/globals.css` — CSS variables at the top |
| Social links | `_components/footer.tsx` |
| Nav links | `_components/header.tsx` |

---

## Deployment

Push to GitHub then import into **Vercel**. Add your `.env.local` vars in the Vercel dashboard. That's it.

---

## Adding GSAP Scroll Animations

```bash
npm install gsap
```

In any `"use client"` section component:

```ts
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.fromTo(ref.current, { opacity: 0, y: 40 }, {
    opacity: 1, y: 0, duration: 0.8,
    scrollTrigger: { trigger: ref.current, start: "top 85%" },
  });
}, []);
```
