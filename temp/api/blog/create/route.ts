import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.json();

    const { category: p_category, title: p_title, content: p_content } = body;
    try {
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
        sql`SELECT coalesce(max(id), 0) + 1 as next_id FROM "Post";`,
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

      return NextResponse.json(newPost, { status: 201 });
    } catch (err) {
      console.error("[SERVER]:Error creating post:", err);
      return NextResponse.json("Failed to create post", { status: 500 });
    }
  } else {
    console.error("[SERVER]:Method not allowed");
    return NextResponse.json("Method not allowed", { status: 405 });
  }
}

export { handler as POST };
