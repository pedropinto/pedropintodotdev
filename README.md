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
