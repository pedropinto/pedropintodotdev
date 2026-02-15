import { getCollection, type CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;

export const ARTICLES_PER_PAGE = 10;

export async function getVisibleArticles(): Promise<ArticleEntry[]> {
  const entries = await getCollection("articles", ({ data }) => {
    if (import.meta.env.DEV) return true;
    return !data.draft;
  });

  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

export function toTagSlug(tag: string): string {
  const slug = normalizeTag(tag)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "tag";
}

export function getAllTagsByFrequency(articles: ArticleEntry[]): string[] {
  const tagCounts = new Map<string, number>();

  for (const article of articles) {
    for (const rawTag of article.data.tags) {
      const tag = rawTag.trim();
      if (!tag) continue;
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(tagCounts.entries())
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    })
    .map(([tag]) => tag);
}

export function filterArticlesByTag(
  allArticles: ArticleEntry[],
  tagSlug: string,
): { tagLabel: string | null; items: ArticleEntry[] } {
  const tagBySlug = new Map<string, string>();

  for (const article of allArticles) {
    for (const rawTag of article.data.tags) {
      const tag = rawTag.trim();
      if (!tag) continue;
      const slug = toTagSlug(tag);
      if (!tagBySlug.has(slug)) tagBySlug.set(slug, tag);
    }
  }

  const tagLabel = tagBySlug.get(tagSlug) ?? null;
  if (!tagLabel) return { tagLabel: null, items: [] };

  const items = allArticles.filter((article) =>
    article.data.tags.some((tag) => toTagSlug(tag) === tagSlug),
  );

  return { tagLabel, items };
}

export function getPaginatedArticles(
  allArticles: ArticleEntry[],
  page: number,
  perPage = ARTICLES_PER_PAGE,
) {
  const totalPages = Math.max(1, Math.ceil(allArticles.length / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;
  const items = allArticles.slice(start, start + perPage);

  return {
    currentPage,
    totalPages,
    items,
  };
}

export function getArticlesPageUrl(page: number, tagSlug?: string): string {
  if (tagSlug) {
    if (page <= 1) return `/articles/tag/${tagSlug}/`;
    return `/articles/tag/${tagSlug}/page/${page}/`;
  }

  if (page <= 1) return "/articles/";
  return `/articles/page/${page}/`;
}
