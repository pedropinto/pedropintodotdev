# 0007 - Image Optimization Strategy
- Status: Accepted
- Date: 2026-02-21

## Context
Profile image quality is needed, but unoptimized assets can hurt page load.

## Decision
Use Astro `Image` component with local assets under `src/assets` for optimized output.

## Consequences
- Smaller generated images and faster pages.
- Better control over dimensions/loading behavior.
- Keep source assets organized in app code, not only in `public/`.
