import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const postsWithExtra = await db
        .select({
          id: post.id,
          title: post.title,
          createdAt: post.createdAt,
          categoryName: category.name,
        })
        .from(post)
        .leftJoin(category, sql`${category.id} = ${post.postId}`)
        .orderBy(sql`${post.id} DESC`)
        .execute();

      const result = postsWithExtra.map((post) => ({
        id: post.id,
        title: post.title,
        createdAt: post.createdAt,
        categories: { name: post.categoryName },
      }));

      res.status(200).json(result);
    } catch (err) {
      console.error("Error fetching editing posts:", err);
      res.status(500).json({ error: "Failed to fetch editing posts" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
