import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    try {
      const postId = Number(id);
      const postData = await db
        .select({
          id: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          categories: sql`array_agg(${category.name}) as categories`,
        })
        .from(post)
        .leftJoin(category, sql`${category.id} = ${post.postId}`)
        .where(sql`${post.id} = ${postId}`)
        .groupBy(post.id)
        .execute();

      if (!postData || postData.length === 0) {
        return res.status(404).json({ error: "Post not found" });
      }

      const mainPost = postData[0];
      res.status(200).json(mainPost);
    } catch (err) {
      console.error("Error fetching blog detail:", err);
      res.status(500).json({ error: "Failed to fetch blog detail" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
