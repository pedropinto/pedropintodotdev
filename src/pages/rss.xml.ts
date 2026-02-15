import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getVisibleArticles } from "../lib/articles";

export const GET: APIRoute = async (context) => {
  const articles = await getVisibleArticles();

  return rss({
    title: "pedropintodotdev",
    description: "Engineering, software development, people, process, and leadership.",
    site: context.site ?? new URL("https://pedropintodotdev.com"),
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/articles/${article.slug}/`,
    })),
  });
};
