# Design Tokens (v1)

This document defines typography, spacing, and color usage for implementation.
It also captures the reasoning behind each decision so future changes stay intentional.

## Optimization Goals
These tokens optimize for:
- Reading depth: make long-form articles easy to finish.
- Clarity: reduce visual noise and cognitive load.
- Consistency: keep layouts predictable across pages.
- Maintainability: keep a small system that is easy to evolve.
- Performance: avoid heavy design patterns or animation overhead.

## Typography
Goal: strong readability for long-form articles with clean UI chrome.

Primary pairing:
- Heading/display: `Fraunces` (serif, variable)
- Body/UI text: `Source Sans 3` (sans, variable)

Fallback stacks:
- Heading: `"Fraunces", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif`
- Body: `"Source Sans 3", "Avenir Next", "Segoe UI", sans-serif`

Type scale:
- `text-xs`: 0.75rem
- `text-sm`: 0.875rem
- `text-base`: 1rem
- `text-lg`: 1.125rem
- `text-xl`: 1.25rem
- `text-2xl`: 1.5rem
- `text-3xl`: 1.875rem
- `text-4xl`: 2.25rem

Reading defaults:
- Body size: `text-lg` on article pages, `text-base` elsewhere
- Body line-height: `1.75`
- Heading line-height: `1.2-1.3`
- Target line length: `65-75` characters

Reasoning:
- Serif headings + sans body creates hierarchy without extra decoration.
- `text-lg` for article body improves sustained reading comfort.
- `1.75` line-height lowers fatigue on dense paragraphs.
- `65-75` character measure avoids both cramped and overly wide lines.

## Spacing
Use a 4px base unit with a restrained rhythm.

Scale:
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `10`: 2.5rem (40px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)

Layout spacing rules:
- Section vertical gap: `py-12` desktop, `py-8` mobile
- Card/list item gap: `gap-4` or `gap-6`
- Metadata gap: `gap-2`
- Avoid one-off spacing values

Reasoning:
- 4px rhythm keeps spacing decisions simple and predictable.
- Larger section gaps separate content blocks clearly without heavy visuals.
- Limited gap options reduce inconsistency and decision overhead.
- No one-off values keeps the UI tidy and easier to refactor.

## Width and Layout
- Article content max width: `max-w-3xl`
- General page content max width: `max-w-5xl`
- Horizontal page padding: `px-4` mobile, `px-6` tablet, `px-8` desktop

Reasoning:
- `max-w-3xl` protects reading measure for article pages.
- Wider `max-w-5xl` for index/layout pages improves scanning density.
- Progressive horizontal padding improves mobile comfort and desktop balance.

## Color Tokens (Palette A - Default)
- `navy`: `#2F4156`
- `teal`: `#567C8D`
- `sky`: `#C8D9E6`
- `beige`: `#F5EFEB`
- `white`: `#FFFFFF`

Role mapping:
- Page background: `beige` (fallback `white`)
- Primary text: `navy`
- Muted text/borders: `teal`
- Accent links/highlights: `teal`
- Soft surfaces/cards: `sky`

Reasoning:
- Warm light background reduces harsh contrast compared to pure white.
- Navy gives stable, high-legibility text color.
- Teal handles accent and metadata to keep palette compact.
- Sky surfaces separate grouped content without adding visual clutter.

## Color Tokens (Palette B - Alternative)
- `deep-navy`: `#243754`
- `warm-stone`: `#C7C1B5`
- `sand`: `#C8B094`
- `slate-navy`: `#334764`

## Interaction and Motion
- Keep motion minimal and functional.
- Link transition: color fade only (`150-200ms`).
- Avoid decorative animations in v1.

Reasoning:
- Motion should communicate state, not distract from reading.
- Short color transitions add responsiveness with minimal performance cost.
- Avoiding decorative motion keeps the interface calm and content-first.

## Accessibility Baseline
- Keep text/background contrast at WCAG AA minimum.
- Never encode meaning by color alone.
- Keep tap targets and link spacing comfortable on mobile.

Reasoning:
- Accessibility constraints protect readability and usability for all users.
- These rules reduce rework later and keep quality consistent by default.
