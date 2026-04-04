# 🚀 Portfolio — Angular 17

A clean, dark-themed, fully data-driven portfolio website built with **Angular 17 standalone components**.

---

## ⚡ Quick Start

```bash
npm install
ng serve
```

Open **http://localhost:4200**

---

## 📁 Project Structure

```
src/
├── assets/
│   └── data/
│       └── portfolio.json        ← ✏️  EDIT THIS FILE to update all content
├── app/
│   ├── models/
│   │   └── portfolio.model.ts    ← TypeScript interfaces
│   ├── services/
│   │   └── portfolio.service.ts  ← Loads & caches portfolio.json
│   └── components/
│       ├── navbar/               ← Sticky responsive nav
│       ├── hero/                 ← Landing section with avatar
│       ├── about/                ← Bio + quick facts
│       ├── skills/               ← Skill bars by category
│       ├── journey/              ← Alternating timeline
│       ├── experience/           ← Work experience cards
│       ├── projects/             ← Project cards with links
│       ├── achievements/         ← Stats grid
│       ├── contact/              ← Contact form + links
│       └── footer/               ← Footer with nav + social
├── styles.css                    ← Global design tokens & utilities
└── index.html
```

---

## ✏️ How to Update Content (No HTML needed!)

**All content lives in one file:** `src/assets/data/portfolio.json`

| What you want to do | What to edit |
|---|---|
| Change your name / bio / email | `personal` object |
| Add a new project | Add an item to `projects` array |
| Add a new job | Add an item to `experience` array |
| Add a skill | Add to `skills.frontend`, `skills.backend`, or `skills.tools` |
| Add a journey milestone | Add an item to `journey` array |
| Update your stats | Edit items in `achievements` array |

### Example: Adding a new project

```json
{
  "title": "My New App",
  "description": "A brief description of what it does and what you learned.",
  "tech": ["Angular", "Flask", "PostgreSQL"],
  "github": "https://github.com/yourusername/my-new-app",
  "live": "https://my-new-app.vercel.app",
  "status": "live",
  "featured": true
}
```

> **status** can be: `"live"` | `"in-progress"` | `"archived"`  
> **featured: true** means it shows on the homepage without clicking "View All"

---

## 🎨 Theming

Edit CSS custom properties in `src/styles.css` under `:root` to retheme the entire site:

```css
:root {
  --accent-primary:   #6c63ff;   /* Main purple accent */
  --accent-secondary: #ff6b9d;   /* Pink accent */
  --accent-tertiary:  #00d4aa;   /* Teal accent */
  --bg-primary:       #0a0a0f;   /* Page background */
  /* ... */
}
```

---

## 🔌 Wiring Up the Contact Form

The contact form in `contact.component.ts` has a placeholder `onSubmit()`.
To make it functional, replace the `setTimeout` mock with either:

**Option A — Your own Flask API:**
```typescript
this.http.post('http://localhost:5000/api/contact', this.form).subscribe(...)
```

**Option B — EmailJS (free, no backend):**
```typescript
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', this.form)
```

---

## 🏗️ Adding New Sections

1. Generate: `ng generate component components/my-section`
2. Add the data shape to `portfolio.model.ts`
3. Add the data to `portfolio.json`
4. Read it in your component via `PortfolioService`
5. Add `<app-my-section>` to `app.component.html`

---

## 📦 Build for Production

```bash
ng build
```

Output goes to `dist/portfolio/browser/` — deploy this folder to Netlify, Vercel, GitHub Pages, or your own server.

---

## 🛠️ Tech Stack

- **Angular 17** — Standalone components, no NgModule
- **TypeScript** — Strict mode
- **CSS** — Custom properties, no framework (pure CSS)
- **Google Fonts** — Syne (headings) + DM Sans (body)
