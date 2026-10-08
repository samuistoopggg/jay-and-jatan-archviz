# Jay & Jatan — Architectural Visualization

A React portfolio for two brothers working in archviz. The design follows the supplied warm ivory, sculptural, frosted-glass reference. Includes responsive layouts, interior/exterior project filters, accessible project dialogs, and reduced-motion support.

The renders are AI-generated demonstration images, clearly labeled on the website. Replace them with your own work before presenting them as completed projects. Contact information has not been supplied; contact buttons open an honest placeholder and do not collect information.

## Run locally

Requires Node.js 24 and pnpm 11.19.0.

```sh
npm install --global pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

Build with `pnpm build` and inspect that build with `pnpm preview`.

## Publish on GitHub Pages

1. Create a new repository and upload this project's contents, including `.github/workflows/deploy.yml`, `pnpm-lock.yaml`, `src`, and `public`. Do not upload `node_modules` or `dist`.
2. In the repository's Settings → Pages, choose **GitHub Actions** as the source.
3. Push to `main`, or select **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
4. Wait for the workflow to succeed. GitHub shows the published URL in the Pages settings and deployment environment.

The workflow reads the Pages address and builds the correct base path for a project repository, account site, or configured custom domain.

Publishing has not been performed merely by creating these files. Check for a successful GitHub deployment before sharing a public URL.

## Customize

- Copy, project information, image descriptions, and contact dialog: `src/main.jsx`
- Colors, typography, responsive layout, and glass treatments: `src/styles.css`
- Hero and portfolio renders: `public/`
- Page title, description, and favicon: `index.html` and `public/favicon.svg`

Typography uses Google Fonts with local fallback fonts. The website has no analytics, database, or contact submission service.

References: [Vite deployment guide](https://vite.dev/guide/static-deploy.html#github-pages), [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
