# Rogan Portfolio

Modern, responsive personal portfolio built with **Vue 3**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed as a single-page resume site you can deploy to GitHub Pages and share with recruiters.

## Sections

- Home
- About
- Experience
- Projects
- Skills
- Achievements
- Certifications
- Hobbies
- Contact

## Project structure

```text
src/
├── components/
│   ├── layout/          # Header, footer, mobile nav
│   ├── sections/        # Page sections (Home, About, etc.)
│   └── ui/              # Reusable UI primitives
├── composables/         # Shared Vue composables
├── data/portfolio.ts    # Edit your content here
├── types/portfolio.ts   # TypeScript content models
├── App.vue
├── main.ts
└── style.css
```

## Customize content

Update your personal details in:

`src/data/portfolio.ts`

This file drives every section. Replace placeholder text, links, experience, projects, and skills with your own information.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to GitHub (for example, repository name `Rogan-portfolio`).
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to the `main` branch. The workflow builds and deploys automatically.

The workflow sets:

```bash
VITE_BASE_PATH=/<repository-name>/
```

For a user site (`username.github.io`), change `.env.production` to:

```bash
VITE_BASE_PATH=/
```

## Resume sharing tips

- Replace `contact.resumeUrl` with a link to your PDF resume.
- Use browser print (`Cmd/Ctrl + P`) — print styles hide navigation and contact form UI.
- Keep content concise and scannable for hiring managers.

## Tech stack

- Vue 3 (Composition API + `<script setup>`)
- TypeScript
- Vite
- Tailwind CSS v4
- Component-based architecture
