import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const {
      category: p_category,
      title: p_title,
      content: p_content,
    } = req.body;

    try {
      // Get or create category
      let categoryId = await db
        .select({ id: category.id })
        .from(category)
        .where(sql`${category.name} = ${p_category}`)
        .execute()
        .then((result) => result[0]?.id);

      if (!categoryId) {
        categoryId = await db
          .insert(category)
          .values({ name: p_category })
          .returning({ id: category.id })
          .execute()
          .then((result) => result[0].id);
      }

      // Get next ID for post using raw SQL
      const nextIdResult = await db.execute<{ next_id: number }>(
        sql`SELECT coalesce(max(id), 0) + 1 as next_id FROM "Post"`,
      );
      const nextId = nextIdResult[0].next_id;

      // Create post with explicit ID
      const newPost = await db
        .insert(post)
        .values({
          id: nextId,
          title: p_title,
          content: p_content,
          postId: categoryId,
        })
        .returning({
          id: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          postId: post.postId,
        })
        .execute()
        .then((result) => result[0]);

      res.status(201).json(newPost);
    } catch (err) {
      console.error("Error creating post:", err);
      res.status(500).json({ error: "Failed to create post" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
