import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const {
      id: p_id,
      title: p_title,
      content: p_content,
      postId: p_postId,
    } = req.body;

    try {
      const existingPost = await db
        .select({ id: post.id })
        .from(post)
        .where(sql`${post.id} = ${p_id}`)
        .execute()
        .then((result) => result[0]);

      if (existingPost) {
        await db
          .update(post)
          .set({
            title: p_title,
            content: p_content,
          })
          .where(sql`${post.id} = ${p_id}`)
          .execute();
      } else {
        // Insert a new post
        await db
          .insert(post)
          .values({
            id: p_id,
            title: p_title,
            content: p_content,
            postId: p_postId,
          })
          .execute();
      }
      res.status(200).json({ message: "Post upserted successfully" });
    } catch (err) {
      console.error("Error upserting post:", err);
      res.status(500).json({ error: "Failed to upsert post" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
