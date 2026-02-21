# 0006 - Article Card Interaction Pattern
- Status: Accepted
- Date: 2026-02-21

## Context
Card interaction should be intuitive without sacrificing tag filtering.

## Decision
Make the full article card clickable to the article route, while tag pills remain independent links to tag-filter routes.

## Consequences
- Faster navigation and better click affordance.
- Preserves filtering behavior from tags.
- Requires z-index/interaction care to avoid accidental overrides.
