# Contributing to Iron Veil Press

Thank you for helping maintain the public Iron Veil Press website. This repository is a public surface: a pull request, commit, issue, or asset added here should be treated as immediately inspectable by anyone.

## Before you contribute

Read `README.md`, `docs/PUBLIC_CONTENT_POLICY.md`, and `docs/LICENSING_GUIDELINES.md`. If your change touches Threl rules, Dabar, Ashenfold, Warden material, theology, or any module-specific claim, compare the wording with the current approved public materials in the public playtest repository. Do not copy from the private canon vault into this repository.

Open an issue for substantial changes. A small typo, broken link, or accessibility repair may go directly into a focused pull request, but explain the change in the description.

## Pull-request expectations

A pull request should have one clear purpose. Its description should explain the public-facing problem, list changed routes or files, state whether new media or third-party assets were added, and identify the checks run locally.

Before requesting review, run:

```bash
pnpm check
pnpm build
```

If the change affects layout, test desktop and mobile widths. If it affects navigation or downloads, verify every destination and confirm that the response is the intended page or file. If it changes copy, read the rendered page rather than relying only on source text.

## Public-content review

Every new public statement must be classified as one of the following:

| Classification | Meaning | Suitable for this repository |
|---|---|---:|
| Public approved | Cleared for public website use | Yes |
| Public derivative | A faithful public adaptation of approved canon | Yes, with source noted in the PR |
| Private GM | Intended for private play or facilitator use | No |
| Restricted secret | Secret lore, unreleased canon, or internal production information | No |

When in doubt, do not publish the material. Ask the project owner to approve the boundary.

## Design and accessibility

Use the established Lanterns Along the March design system: charcoal and violet foundations, parchment reading surfaces, oxidized lantern gold for actions, Cinzel/Cinzel Decorative for display hierarchy, and EB Garamond for editorial copy. Avoid replacing this system with generic gradients, default interface text, or low-contrast image overlays.

All interactive elements must be keyboard reachable, have visible focus states, use descriptive link text, and remain legible at mobile widths. Images need meaningful alternative text when they convey information; decorative images use empty alt text. Do not put essential instructions only inside an image.

## Asset contributions

Before adding an image, confirm that Iron Veil Press has the right to use it on the public website. Record the creator, source, license, and any required attribution in the pull request. Do not commit high-resolution production masters, editable source files, unlicensed fonts, private commissioned drafts, or assets containing hidden metadata or private notes.

Large media should use the project’s managed asset workflow rather than being placed in the source tree. Small configuration files such as `robots.txt`, `sitemap.xml`, and a favicon may live in `client/public/`.

## Security and privacy

Never commit API keys, passwords, access tokens, customer information, private email lists, analytics exports containing personal information, internal filesystem paths, or private URLs. If a secret is accidentally committed, report it privately and rotate it; deleting the visible file is not sufficient because Git history may preserve it.

Do not include secret Warden lore, private Frey Wars history, unresolved canon disputes, internal audit reports, or private project pass-on notes in public issues or pull requests.

## Review and merge

Maintainers should review code quality, visual behavior, accessibility, public-content safety, licensing, and link integrity. Changes to licensing language or public canon should receive owner approval before merge. The default branch should remain deployable.
