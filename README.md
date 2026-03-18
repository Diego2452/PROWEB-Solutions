# PROWEB Solutions — Portfolio Website

Modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **next/font/google** (Manrope + Nunito Sans)
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your logo files

Place your logo files in the `/public` folder:
- `public/LogoWhite.png` — for the navbar (dark background)
- `public/LogoBlack.png` — reserved for any light-mode variant

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
/src
  /app
    layout.tsx          ← Root layout (fonts, metadata, Navbar + Footer)
    page.tsx            ← Home page (/)
    globals.css         ← Global styles + Tailwind base
    /projects/page.tsx  ← Projects page (/projects)
    /about/page.tsx     ← About page (/about)
    /services/page.tsx  ← Services page (/services)
    /contact/page.tsx   ← Contact page (/contact)
  /components
    Navbar.tsx          ← Sticky responsive navbar
    Footer.tsx          ← Footer with links
    Hero.tsx            ← Animated hero section
    Section.tsx         ← Scroll-triggered section wrapper
    ProjectCard.tsx     ← Project card with image + buttons
    ServiceCard.tsx     ← Service pricing card
/public
    LogoWhite.png       ← White logo (dark bg)
    LogoBlack.png       ← Black logo (light bg)
```

---

## Customization

- **Colors** — Edit `tailwind.config.ts` → `theme.extend.colors`
- **Content** — Update page files directly (projects, services, about)
- **Fonts** — Change in `src/app/layout.tsx` (next/font/google)
- **Contact form** — Currently a UI demo. Connect to an API like Resend, EmailJS, or a Next.js Server Action.

---

## Next Steps (recommended)

1. **Connect the contact form** to Resend or EmailJS
2. **Add real project images** (replace Unsplash placeholders)
3. **Deploy to Vercel** — `npx vercel` or push to GitHub and connect repo
4. **Add real pricing** and update service cards
5. **Configure domain** on Vercel dashboard

---

© 2025 PROWEB Solutions
