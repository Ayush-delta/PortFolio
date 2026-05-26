# Ayush Ratna • Creative Developer Portfolio

A premium, highly interactive portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and a custom-crafted CSS design system. Designed with Awwwards-grade kinetic layouts, responsive micro-animations, physical hover constraints, and a global difference-blending magnifying cursor. Inspired by the sleek aesthetics of [iayush.com](https://www.iayush.com/).

---

## ✨ Premium Creative Features

### 1. Physics-Driven Magnetic Hovers (GSAP)
* All primary CTA buttons, navigation headers, and project action triggers are wrapped in our custom `<Magnetic>` hover physics container.
* When the cursor gets close, the element translates in X/Y coordinates toward the cursor, snapping back dynamically with a custom elastic spring equation on mouse exit:
  ```javascript
  gsap.to(element, {
    x: 0, y: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 0.7
  })
  ```

### 2. Global Magnifying Difference Cursor
* A custom trailing cursor system consisting of a precise coordinate dot and a smooth easing outer ring that follows the mouse path with customized interpolation trail easing (`0.16`).
* **Text Focus Magnification:** Hovering over *any* readable typography element (`h1-h5`, `p`, `span`, `strong`, `li`, `label`, `.logo`) triggers an active state scaling the ring and transforming it into a solid white circle with `mix-blend-mode: difference` for high-contrast inverted text magnification.
* **Touchscreen Visibility Fix:** Powered by `@media (any-pointer: fine)`, ensuring the custom cursor renders correctly on touchscreen-enabled laptops that register both mouse and touch inputs.

### 3. Widescreen Project Showcase (16:10 Ratio)
* Alternating projects card grid (`flex-direction: index % 2 === 0 ? "row" : "row-reverse"`) displaying high-resolution web application screenshots.
* Styled as fluid full-bleed cards with a widescreen `aspect-ratio: 16 / 10`, allowing landing page screenshot frames to display cleanly without any side clipping or squishing.
* Hovering over the glassmorphic card boundaries smoothly zooms the screenshot image (`transform: scale(1.04)`) using an active cubic-bezier ease.

### 4. Continuous Viewport Runner
* A highly optimized infinite runner animates dynamically across `bottom: 5vh` of the viewport.
* Combines joint-animated SVG paths tilting and deforming dynamically using keyframe coordinates, complete with scroll-reactive tracking.

### 5. Type-Safe Resend Mail Handler
* Fully isolated Serverless route handler (`/api/contact`) integrating form validations, robust error fallbacks, and premium HTML-based mailing templates.
* Features a grace-fallback printing contact telemetry directly to the server console if active Resend credentials are not configured.

---

## 🛠️ Tech Stack & Design System

| Layer | Technology | Description |
|---|---|---|
| **Core Framework** | Next.js 14 (App Router) | Optimised React framework with full static page generation. |
| **Language** | TypeScript | Strictly type-safe page and hook definitions. |
| **Styling** | Custom Vanilla CSS | Fast, lightweight design tokens and responsive queries. |
| **Animations** | GSAP | Easing springs and custom physical pulls. |
| **Email Pipeline** | Resend | High-deliverability transactional emailing API. |
| **Typography** | Fontshare & Google Fonts | **Open Sans** (Display/Bold) and **General Sans** (Body). |
| **Host / Deploy** | Vercel | Global edge routing with CI/CD GitHub triggers. |

---

## 📁 Workspace Folder Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Global Shell & Layout (Custom Cursor, Header, Runner)
│   ├── page.tsx            # Main Landing Page / Route
│   ├── loading.tsx         # Awwwards-grade loading spinner sequence
│   ├── error.tsx           # Global error boundaries
│   ├── not-found.tsx       # Creative 404 handler
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts    # Contact form Resend handler -> /api/contact
│   │   └── users/
│   │       └── route.ts    # Users handler -> /api/users
│   └── dashboard/
│       ├── layout.tsx      # Dashboard inner wrapper
│       ├── page.tsx        # Dashboard root -> /dashboard
│       └── settings/
│           └── page.tsx    # Dashboard settings -> /dashboard/settings
├── _components/
│   ├── header.tsx          # Dynamic fixed blur header with mobile burger trigger
│   ├── footer.tsx          # Bottom social node layout
│   ├── fixed-runner.tsx    # Joint-animated infinite SVG viewport runner
│   ├── marquee-divider.tsx # Rolling kinetic typography text loop
│   ├── magnetic-cursor.tsx # Trailing custom cursor ring and dot positioning
│   ├── magnetic-hover.tsx  # Springy GSAP translate hover wrapper
│   └── sections/           # Modular section components
│       ├── hero.tsx        # Title space with floating green Status Card
│       ├── about.tsx       # Text summary grid
│       ├── skills.tsx      # Multi-categorized responsive tags
│       ├── projects.tsx    # Widescreen screenshots and live action tags
│       ├── experience.tsx  # Timeline timeline-role meta grids
│       ├── testimonials.tsx# Grid-deck containing Alan Turing's movie quote card
│       └── contact.tsx     # Animated submission form and status alerts
├── _lib/
│   └── utils.ts            # Class merging and formatting helpers
├── _styles/
│   └── globals.css         # Styling directives, design system tokens, responsive queries
├── public/                 # Static assets
│   └── projects/           # Widescreen mockups (nyayasetu.png, sniply.png, etc.)
└── tsconfig.json           # Module mappings (@/* -> ./*)
```

---

## 🚀 Getting Started

Follow these steps to run a local development instance of the portfolio:

```bash
# 1. Clone your repository
git clone https://github.com/YOUR_USERNAME/PortFolio.git
cd PortFolio

# 2. Install package dependencies
npm install

# 3. Spin up the local hot-reloading dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The custom cursor will automatically track your mouse, and responsive changes will hot-reload dynamically.

---

## 🎨 Customizing Content & Layouts

* **Personal Details / Biography**: Open [_components/sections/hero.tsx](file:///c:/Projects/Portfolio/_components/sections/hero.tsx) and [about.tsx](file:///c:/Projects/Portfolio/_components/sections/about.tsx) to modify your name, role, tags, and summary.
* **Featured Projects**: Edit the project details inside the `PROJECTS` array in [projects.tsx](file:///c:/Projects/Portfolio/_components/sections/projects.tsx). To swap screenshots, simply overwrite files in [public/projects/](file:///c:/Projects/Portfolio/public/projects/) (`nyayasetu.png`, `sniply.png`, etc.).
* **Marquee Slider Text**: Open [marquee-divider.tsx](file:///c:/Projects/Portfolio/_components/marquee-divider.tsx) and customize words inside the `skills` string array on line 6.
* **Testimonials / Quotes**: Modify or add quotes inside `TESTIMONIALS` in [testimonials.tsx](file:///c:/Projects/Portfolio/_components/sections/testimonials.tsx).
* **Color Schemes / Variable Tokens**: Adjust electric lime variables (`--accent`), card colors, and border widths inside the `:root` variables block at the top of [globals.css](file:///c:/Projects/Portfolio/_styles/globals.css).

---

## 📦 Deployment (Vercel)

1. Push your latest code changes to your GitHub branch:
   ```bash
   git add .
   git commit -m "docs: complete readme custom asset and responsive guides"
   git push origin main
   ```
2. Open your [Vercel Dashboard](https://vercel.com/) and import the repository.
3. Add environment variables for contact form integration (Optional):
   * `RESEND_API_KEY`: Your transactional Resend API key.
   * `CONTACT_EMAIL`: The recipient inbox where you'd like to receive contact messages.
4. Click **Deploy**. Vercel will bundle static page caches, optimize images, and host your creative developer portfolio globally!
