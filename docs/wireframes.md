# Wireframes (Low Fidelity)

These wireframes define structure and content priority, not visual polish.

## Home
Goal: quickly explain who you are and route readers into articles.

```text
[Header]
  Name/Wordmark                    Articles  About  RSS

[Hero Intro]
  Pedro Pinto
  Engineering Manager who likes to code.
  I write about engineering, coding, people, processes, and leadership.

  [View articles]

[Latest Articles]
  Latest writing

  [Post Card]
    Title
    Short description
    Date  Reading time  Tags

  [Post Card]
    Title
    Short description
    Date  Reading time  Tags

  [Post Card]
    Title
    Short description
    Date  Reading time  Tags

  [All articles ->]

[About Teaser]
  Short 1-2 line summary + [About me ->]

[Footer]
  RSS  GitHub  LinkedIn/Email
```

## Articles Index
Goal: support scanning and discovery with minimal friction.

```text
[Header]
  Name/Wordmark                    Home  About  RSS

[Page Intro]
  Articles
  Notes on engineering, leadership, and software.

[Optional Tag Filter Row]
  All  Engineering  Leadership  Process  Coding

[Article List]
  [List Item]
    Title
    Description
    Date  Reading time  Tags

  [List Item]
    Title
    Description
    Date  Reading time  Tags

  ...

[Footer]
  RSS  GitHub  LinkedIn/Email
```

## Article Page
Goal: maximize readability and completion.

```text
[Header]
  Name/Wordmark                    Articles  About

[Article Header]
  Title
  Description
  Date  Reading time  Tags

[Article Body]
  Clean prose, strong line length, clear heading rhythm

[End Section]
  [Back to articles]
  [Next article] (optional)

[Footer]
  RSS  GitHub  LinkedIn/Email
```

## About
Goal: establish credibility and context behind the writing.

```text
[Header]
  Name/Wordmark                    Home  Articles  RSS

[Intro]
  Short bio (Engineering Manager + builder mindset)

[What I write about]
  Engineering
  People & process
  Leadership
  Practical lessons from projects

[How I work]
  Brief principles / operating style

[Contact]
  GitHub
  LinkedIn
  Email

[Footer]
  RSS  GitHub  LinkedIn/Email
```

## Layout Rules
- Max content width: readable column (target ~65-75 characters for body text).
- Keep one primary action per section.
- Avoid decorative elements that compete with reading.
- Reuse the same spacing rhythm across all pages.

## Content Rules
- Titles should be clear, not clever.
- Descriptions should explain reader value in one sentence.
- Metadata order is consistent: date, reading time, tags.
- Hide `draft` posts in production lists.
