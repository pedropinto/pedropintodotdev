# 0005 - Article Routing and Tag Pagination
- Status: Accepted
- Date: 2026-02-21

## Context
Article discovery must scale while keeping URLs shareable and behavior correct.

## Decision
Use static routes for all articles and tag-filtered pagination:
- `/articles/`, `/articles/page/{n}/`
- `/articles/tag/{tag}/`, `/articles/tag/{tag}/page/{n}/`

## Consequences
- Correct filtering across full dataset.
- Better SEO/shareability than client-only filters.
- More generated routes as tags/posts grow.
