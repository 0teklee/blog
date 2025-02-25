import { NextApiRequest } from "next";
import { db } from "@/db";
import { post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

async function handler(req: NextApiRequest) {
  if (req.method === "PATCH") {
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
      return NextResponse.json({
        message: "Post upserted successfully",
        status: 200,
      });
    } catch (err) {
      console.error("[SERVER]:Error upserting post:", err);
      return NextResponse.json(
        { error: "Failed to upsert post" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json(
      { error: "[SERVER]:Method not allowed" },
      { status: 405 },
    );
  }
}

export { handler as PATCH };
