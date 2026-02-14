# pedropintodotdev

A minimalist personal blog focused on work and writing.

## Purpose
This website exists to publish my work and articles in a clean, distraction-free format.

I am an Engineering Manager who likes to code and write about:
- engineering and software development
- people and processes
- leadership and management
- practical lessons from real projects

## Product Direction
Keep the site intentionally simple:
- fast loading pages
- strong typography
- minimal visual noise
- easy publishing workflow
- content-first structure

Avoid building “fancy” features unless they clearly improve the writing or reading experience.

## Initial Scope (MVP)
- Home page with short intro and latest posts
- Articles index
- Individual article pages
- About page
- Basic RSS feed

## Technical Direction
- Use Tailwind CSS for styling.
- Keep styling tidy with a small design token set (spacing, typography scale, colors).
- Avoid UI complexity: minimal custom components, mostly semantic HTML + utility classes.
- Keep dependencies lean and easy to maintain.

## Color Palette
Use this palette from the selected reference image:
- `#2F4156` (Navy)
- `#567C8D` (Teal)
- `#C8D9E6` (Sky Blue)
- `#F5EFEB` (Beige)
- `#FFFFFF` (White)

Suggested role mapping:
- background: `#F5EFEB` (or `#FFFFFF`)
- primary text: `#2F4156`
- muted text/borders: `#567C8D`
- accent links/highlights: `#567C8D`
- soft surfaces/cards: `#C8D9E6`

Alternative palette (Palette B, kept for future option):
- `#243754` (Deep Navy)
- `#C7C1B5` (Warm Stone)
- `#C8B094` (Sand)
- `#334764` (Slate Navy)

Suggested role mapping for Palette B:
- background: `#F5EFEB` or `#FFFFFF`
- primary text: `#243754`
- muted text/borders: `#C7C1B5`
- accent links/highlights: `#334764`
- soft surfaces/cards: `#C8B094`

Note: Palette B hex values are approximate visual picks from the reference image and can be fine-tuned later.

## Non-Goals (for now)
- comments system
- user accounts
- complex animations
- heavy frontend frameworks unless necessary
- custom CMS

## Minimalist Principles
- Every page answers one question clearly.
- Every UI element must justify its existence.
- Prefer readability over decoration.
- Prefer maintainability over cleverness.
- Ship small, iterate from real usage.

## Success Criteria
A successful v1 is:
- easy for me to publish consistently
- pleasant to read on mobile and desktop
- technically simple to maintain long-term

## Analytics (Minimal and Useful)
Track meaningful behavior without adding heavy tooling:
- Article click events (from home/index cards and links)
- Article page views
- Engaged read proxy: user stays for a minimum time and reaches a scroll threshold

This gives a practical signal for "clicked" vs "likely read", while keeping implementation simple and privacy-conscious.

## Next Step
Before coding, define the stack and content workflow that best supports this scope.

## Implementation Plan (Pending)
- [x] Define content model (`title`, `description`, `date`, `tags`, `draft`, `readingTime`)
- [ ] Create low-fidelity wireframes for Home, Articles, Article, and About
- [ ] Define typography and spacing system (font choices, scale, line length, spacing)
- [ ] Scaffold Astro + Tailwind + strict TypeScript project
- [ ] Implement core pages (Home, Articles, Article template, About)
- [ ] Add analytics events (`article_click`, `article_view`, `article_engaged`)
