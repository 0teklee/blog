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
      // 블로그 사이드바 리스트 10개씩 모음.
      const categories = await db
        .select()
        .from(category)
        .where(sql`${category.name} != ${"daily"}`)
        .orderBy(category.name)
        .execute();

      if (!categories) {
        return res.status(404).json({ error: "No categories found" });
      }

      const results = await Promise.all(
        categories.map(async (cat) => {
          const posts = await db
            .select()
            .from(post)
            .where(sql`${post.postId} = ${cat.id}`)
            .limit(10)
            .execute();
          return {
            name: cat.name,
            posts: posts || [],
          };
        }),
      );

      res.status(200).json(results);
    } catch (err) {
      console.error("Failed to fetch blog categories:", err);
      res.status(500).json({ error: "Failed to fetch blog categories" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
