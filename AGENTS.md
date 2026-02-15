# AGENTS.md

This file defines how coding agents should build and maintain this project.

## Project Intent
Build a minimalist personal blog for publishing work and articles.

Author profile and topics:
- Engineering Manager
- enjoys coding
- writes about engineering, software development, people, processes, and leadership

## Product Goals
- Content-first experience
- Fast loading and lightweight pages
- Strong readability on desktop and mobile
- Low-maintenance codebase and publishing workflow

## MVP Scope
- Home page (short intro + latest posts)
- Articles index
- Individual article page
- About page
- RSS feed

## Non-Goals (v1)
- Comments system
- User accounts
- Heavy animations
- Complex app-like interactions
- Custom CMS

## Stack Decisions
- Framework: Astro (static-first)
- Language: TypeScript whenever possible
- Styling: Tailwind CSS

## TypeScript Rules
- Use TypeScript for config, utilities, components, and content typing.
- Prefer strict typing (`strict: true`) and avoid `any` unless justified.
- Keep runtime logic small and explicit.

## Styling Rules (Tailwind)
- Keep visual design minimal and tidy.
- Use a small, consistent token system (spacing, type scale, colors).
- Prefer semantic HTML and simple utility composition.
- Avoid decorative complexity unless it improves readability.

Color tokens to use:
- `navy`: `#2F4156`
- `teal`: `#567C8D`
- `sky`: `#C8D9E6`
- `beige`: `#F5EFEB`
- `white`: `#FFFFFF`

Default color role mapping:
- background: `beige` (fallback `white`)
- primary text: `navy`
- muted text and borders: `teal`
- accent links/highlights: `teal`
- surfaces/cards: `sky`

Alternative palette (Palette B, optional future switch):
- `deep-navy`: `#243754`
- `warm-stone`: `#C7C1B5`
- `sand`: `#C8B094`
- `slate-navy`: `#334764`

Palette B role mapping:
- background: `beige` or `white`
- primary text: `deep-navy`
- muted text and borders: `warm-stone`
- accent links/highlights: `slate-navy`
- surfaces/cards: `sand`

Note: Palette B values are approximate visual picks and may be refined during implementation.

## Content and Structure
- Keep content in Markdown/MDX files in-repo.
- Favor clear frontmatter and typed content collections.
- Optimize for easy, repeatable publishing.

## Analytics Requirements
Track lightweight signals only:
- `article_click` from internal listing links/cards
- `article_view` on article page load
- `article_engaged` when both are true:
  - minimum dwell time threshold reached
  - minimum scroll-depth threshold reached

Important:
- Treat engaged read as a proxy, not guaranteed reading.
- Keep analytics privacy-conscious and implementation-light.

## Engineering Principles
- Every feature must justify its maintenance cost.
- Prefer simple, explicit implementations over clever abstractions.
- Keep dependencies minimal.
- Ship small increments and iterate from real usage.

## Decision Documentation Rule
- For design-system, UX, architecture, or tooling decisions, always document:
  - what we are optimizing for
  - why this option was chosen
  - key tradeoffs and what we are intentionally not optimizing for
- Do not add tokens, components, or patterns without a short rationale.

## Definition of Done (per change)
- Matches project intent and minimalist scope
- Type-safe and understandable
- Works on mobile and desktop
- No unnecessary dependencies or complexity
