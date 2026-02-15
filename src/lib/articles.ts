import { getCollection, type CollectionEntry } from "astro:content";

export async function getVisibleArticles(): Promise<CollectionEntry<"articles">[]> {
  const entries = await getCollection("articles", ({ data }) => {
    if (import.meta.env.DEV) return true;
    return !data.draft;
  });

  return entries.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}
