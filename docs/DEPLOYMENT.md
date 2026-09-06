# Deployment Guide

## Build locally

```bash
pnpm install
pnpm check
pnpm build
```

The build must complete without TypeScript errors. The output should be tested at both `/` and `/playtest/` before publication.

## Public asset rules

Large images, videos, audio, and archives must use the project’s managed web asset workflow. Keep only small configuration files such as `robots.txt`, `sitemap.xml`, and a favicon in `client/public/`. Use the managed asset URL exactly as returned by the project’s asset workflow.

## Pre-deployment checks

Confirm that the homepage title and meta description are present, the canonical URL is correct, navigation reaches the intended sections, `/playtest/` loads directly, all GitHub download links are public, PDFs return `application/pdf`, forms have an accessible status path, and the site has no private-lore or internal-file references.

## Deployment target

The project is designed for the built-in public web hosting workflow. Do not commit hosting credentials or attempt to store secrets in the repository. Configure deployment settings through the project management interface or the approved hosting integration.

## Rollback

If a public release introduces broken navigation, leaked material, or unreadable content, revert to the last approved checkpoint or public release. Do not rewrite public history to hide a mistake; preserve an internal incident note in the private operations repository and rotate any exposed secret immediately.
