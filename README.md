# Muhammad Sufian Cybersecurity Portfolio

Static personal portfolio website for Muhammad Sufian Bin Che Saad, positioned for SOC Analyst and entry-level cybersecurity roles.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Static typed content in `data/portfolio.ts`
- No backend, database, authentication, or CMS

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The static site is exported to `out/`.

## Content Updates

Most portfolio copy, links, skills, projects, certifications, education, and contact details live in:

```text
data/portfolio.ts
```

The current resume PDF is stored at `public/SOC_muhd_sufian_resume.pdf`. Update `profile.resumeUrl` in `data/portfolio.ts` if the filename changes.

## Deploy To GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push to the `main` branch on GitHub.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set **Build and deployment** source to **GitHub Actions**.
5. The workflow builds the static Next.js export and publishes `out/`.

No environment variables are required.
