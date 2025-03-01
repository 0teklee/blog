import { db } from "@/db";
import { post } from "@/db/migrations/schema";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

async function PATCH(req: NextRequest) {
  const {
    id: p_id,
    title: p_title,
    content: p_content,
    postId: p_postId,
  } = await req.json();

  try {
    const existingPost = await db
      .select({ id: post.id })
      .from(post)
      .where(eq(post.id, p_id))
      .execute()
      .then((result) => result[0]);

    console.log("existingPost", existingPost);

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
}

export { PATCH };
