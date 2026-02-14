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

## Definition of Done (per change)
- Matches project intent and minimalist scope
- Type-safe and understandable
- Works on mobile and desktop
- No unnecessary dependencies or complexity
