# 0004 - Markdown Content Model
- Status: Accepted
- Date: 2026-02-21

## Context
Publishing should be simple and repo-native without a CMS.

## Decision
Store articles as Markdown in-repo with typed frontmatter fields:
`title`, `description`, `date`, `tags`, `draft`, `readingTime`.

## Consequences
- Easy Git-based writing workflow.
- Content validation at build time.
- Non-technical editing is less convenient than a CMS.
