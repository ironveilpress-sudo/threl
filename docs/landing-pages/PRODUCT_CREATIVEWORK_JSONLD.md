# Product and CreativeWork JSON-LD

Use this graph on a product landing page when the page describes a downloadable or purchasable tabletop RPG publication. Replace the bracketed values before reuse.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.ironveilpress.quest/publications/[slug]/#webpage",
      "url": "https://www.ironveilpress.quest/publications/[slug]/",
      "name": "[Product name] | Iron Veil Press",
      "description": "[Unique page description]",
      "isPartOf": { "@id": "https://www.ironveilpress.quest/#website" },
      "about": { "@id": "https://www.ironveilpress.quest/publications/[slug]/#product" },
      "primaryImageOfPage": { "@id": "https://www.ironveilpress.quest/publications/[slug]/#primaryimage" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.ironveilpress.quest/publications/[slug]/#primaryimage",
      "url": "https://www.ironveilpress.quest/[image-path]",
      "contentUrl": "https://www.ironveilpress.quest/[image-path]",
      "caption": "[Descriptive image caption]"
    },
    {
      "@type": "Product",
      "@id": "https://www.ironveilpress.quest/publications/[slug]/#product",
      "name": "[Product name]",
      "description": "[Factual product description]",
      "url": "https://www.ironveilpress.quest/publications/[slug]/",
      "image": { "@id": "https://www.ironveilpress.quest/publications/[slug]/#primaryimage" },
      "brand": { "@id": "https://www.ironveilpress.quest/#organization" },
      "category": "Tabletop role-playing game publication",
      "audience": {
        "@type": "Audience",
        "audienceType": "Tabletop role-playing gamers"
      },
      "subjectOf": { "@id": "https://www.ironveilpress.quest/publications/[slug]/#creativework" }
    },
    {
      "@type": "CreativeWork",
      "@id": "https://www.ironveilpress.quest/publications/[slug]/#creativework",
      "name": "[Product name]",
      "url": "https://www.ironveilpress.quest/publications/[slug]/",
      "description": "[Factual work description]",
      "image": { "@id": "https://www.ironveilpress.quest/publications/[slug]/#primaryimage" },
      "creator": { "@id": "https://www.ironveilpress.quest/#organization" },
      "publisher": { "@id": "https://www.ironveilpress.quest/#organization" },
      "genre": ["Tabletop role-playing game", "Dark fantasy", "Christian fantasy"],
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "encoding": {
        "@type": "MediaObject",
        "contentUrl": "https://www.ironveilpress.quest/[download-path]",
        "fileFormat": "application/pdf"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.ironveilpress.quest/#organization",
      "name": "Iron Veil Press",
      "url": "https://www.ironveilpress.quest/",
      "logo": "https://www.ironveilpress.quest/assets/seo/logo.webp"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ironveilpress.quest/#website",
      "url": "https://www.ironveilpress.quest/",
      "name": "Ironveil Press | Grimdark Christian TTRPG Adventures",
      "publisher": { "@id": "https://www.ironveilpress.quest/#organization" }
    }
  ]
}
```

## Notes

- Keep the Product and CreativeWork nodes distinct. The Product describes the item being discovered; the CreativeWork describes the authored publication.
- Do not add a price or `Offer` until the exact currency, price, availability, and purchase URL are confirmed.
- Use `isAccessibleForFree` only when the linked work is genuinely available without payment or account requirements.
- Keep claims consistent with visible page copy. Structured data must not contain hidden promises, private lore, or unapproved edition details.
- Validate the final JSON-LD with Google’s Rich Results Test and Schema Markup Validator before indexing.
