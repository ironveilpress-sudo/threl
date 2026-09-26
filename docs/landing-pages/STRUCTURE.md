# Iron Veil Press landing-page structure

This directory records the planned public landing-page structure for downloadable Iron Veil Press products.

## Planned tree

```text
publications/
├── _templates/
│   ├── product-landing-page.html
│   └── product-landing-page.md
├── the-prodigal-dungeon/
│   ├── index.html
│   └── README.md
└── welcome-to-threl/
    ├── index.html
    ├── README.md
    ├── structured-data.json
    ├── WelcometoThrel.pdf
    └── welcome_to_threl_cover.webp

docs/
└── landing-pages/
    ├── PRODUCT_CREATIVEWORK_JSONLD.md
    └── STRUCTURE.md
```

## Current implementation status

- `publications/welcome-to-threl/index.html`: complete static landing-page draft.
- `publications/welcome-to-threl/README.md`: complete Markdown content draft for editorial review, CMS migration, or future reuse.
- `publications/welcome-to-threl/structured-data.json`: valid page-specific JSON-LD graph used by the HTML draft.
- `publications/the-prodigal-dungeon/`: reserved for the future product landing page. Do not publish a thin placeholder page until the public product description, purchase URL, cover image, and release details are approved.
- `playtest/`: already implemented through the React route at `/playtest/`; it should remain the public playtest landing page rather than being replaced by a direct ZIP link.

## Static deployment convention

Each completed product page uses a directory `index.html` so the public URL is clean:

```text
/publications/welcome-to-threl/
/publications/the-prodigal-dungeon/
```

The direct PDF or ZIP remains available as a download, but the landing page is the page that should be linked from navigation, product cards, social posts, and the sitemap.

## Publishing checklist

Before publishing a new product page:

- Use one clear H1.
- Add a unique title, meta description, canonical URL, Open Graph tags, and Twitter card tags.
- Embed valid Product and CreativeWork JSON-LD.
- Use only approved public copy and public artwork.
- Identify the current download or purchase action without inventing price, edition, or release claims.
- Add explicit image dimensions and meaningful alt text.
- Test the clean URL, direct download URL, mobile layout, keyboard focus, and HTTP content types.
- Add the landing-page URL to the authoritative sitemap only after the page is ready for public indexing.
