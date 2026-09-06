# Iron Veil Press — Public Website

This repository contains the public Iron Veil Press website. Everything committed here may be inspected by anyone on the internet, built by automated deployment, and linked from public pages. Treat every file as publishable.

## Public repository boundary

This repository is **not** a canon vault, production archive, private project workspace, or secret-lore repository. Do not commit internal audits, private Warden material, Frey Wars history, unresolved canon decisions, unreleased manuscripts, production masters, personal information, credentials, or absolute local filesystem paths.

The current public website presents Iron Veil Press, The Threl, the module catalogue, licensing principles, community destinations, the newsletter, and the public playtest landing page. The public playtest’s downloadable files are maintained in the separate `threl-public-playtest` repository and are linked from the site.

## Repository map

```text
ironveilpress-site/
├── README.md
├── CONTRIBUTING.md
├── LICENSE.md
├── .gitignore
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug-report.md
│   │   └── accessibility-report.md
│   └── workflows/
│       ├── deploy.yml
│       └── link-check.yml
├── client/
│   ├── index.html
│   ├── public/
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── App.tsx
│       ├── index.css
│       └── pages/
│           ├── Home.tsx
│           └── Playtest.tsx
├── docs/
│   ├── DEPLOYMENT.md
│   ├── PUBLIC_CONTENT_POLICY.md
│   ├── LICENSING_GUIDELINES.md
│   └── WEBSITE_CONTENT_GUIDE.md
└── package.json
```

## Local development

The site is a static React application. Install dependencies, start the development server, and run the checks with:

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

The development server is normally available at `http://localhost:3000/`. The public site includes `/` and `/playtest/` routes.

## Content principles

Iron Veil Press uses a dark editorial voice: direct, weathered, invitational, and grounded in consequence. Public copy may describe Christian themes, moral tensions, spiritual struggles, redemption, Scripture-rooted worldbuilding, Dabar, Ashenfold, and the public playtest. It must not disclose private Warden history, secret Frey Wars material, internal canon disputes, or unreleased mechanics.

Public rules copy must follow the current Threl Master Reference. In particular, public MVP material should describe prepared Phrase cards with printed DCs and Strain costs, one roll, Failure Echoes, named Conditions, Force It at 6 Strain, Short and Long Rest recovery, and module-end Campaign Ripple Drift. World Drift scores, glyph arithmetic, Backlash tables, and stacked environmental modifiers must be labeled as advanced or design-layer material when mentioned.

## Contribution workflow

Contributors should open an issue before making substantial content or structural changes. Keep pull requests focused, explain the user-facing purpose, identify affected routes, and include screenshots or link checks when navigation or layout changes.

A contribution is ready to merge when it has passed TypeScript checks and a production build, uses accessible link text, preserves mobile behavior, does not introduce private material, and has reviewed licensing status for every new asset. Maintainers may request a public-content review before merging copy that touches canon, rules, theology, or the public/private lore boundary.

## Related public repository

The public playtest materials live in:

`https://github.com/ironveilpress/threl-public-playtest`

The website should link to the playtest landing page rather than exposing an anonymous PDF as the only entry point. Replace the placeholder organization/repository URL if the final GitHub owner or repository name differs.

## Reporting problems

Use the public issue templates for visible website bugs, broken links, accessibility failures, or misleading public copy. Do not post private lore, personal information, credentials, security vulnerabilities, or unreleased canon in a public issue. For sensitive matters, contact the project owner through the private operations channel.

## License summary

The repository’s source code and public website implementation are released under the license in `LICENSE.md`. Website content, setting text, artwork, logos, and Iron Veil Press branding may have separate rights. Read `docs/LICENSING_GUIDELINES.md` before copying, adapting, or redistributing any public material.
