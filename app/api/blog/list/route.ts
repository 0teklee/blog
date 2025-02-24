import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { page, category: categoryFilter, itemsPerPage = 5 } = req.query;
    const pageNumber = Number(page) || 1;
    const offset = (pageNumber - 1) * Number(itemsPerPage);

    try {
      const postsWithExtra = await db
        .select({
          id: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          categoryName: category.name,
        })
        .from(post)
        .leftJoin(category, sql`${category.id} = ${post.postId}`)
        .where(
          categoryFilter
            ? sql`${category.name} = ${categoryFilter}`
            : sql`true`,
        )
        .orderBy(sql`${post.id} DESC`)
        .limit(Number(itemsPerPage) + 1)
        .offset(offset)
        .execute();

      const hasNextPage = postsWithExtra.length > Number(itemsPerPage);

      const posts = postsWithExtra
        .slice(0, Number(itemsPerPage))
        .map((post) => ({
          id: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          categories: { name: post.categoryName },
        }));

      res.status(200).json({ posts, has_next_page: hasNextPage });
    } catch (err) {
      console.error("Error fetching blog list:", err);
      res.status(500).json({ error: "Failed to fetch blog list" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
