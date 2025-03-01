import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { desc, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 블로그 사이드바 리스트 10개씩 모음.
    const categories = await db
      .select()
      .from(category)
      .where(sql`${category.name} != ${"daily"}`)
      .orderBy(category.name)
      .execute();

    if (!categories) {
      throw new Error("No categories returned from the database");
    }

    const results = await Promise.all(
      categories.map(async (cat) => {
        const posts = await db
          .select()
          .from(post)
          .where(sql`${post.postId} = ${cat.id}`)
          .orderBy(desc(post.createdAt))
          .limit(10)
          .execute();
        return {
          name: cat.name,
          posts: posts || [],
        };
      }),
    );

    return NextResponse.json(results);
  } catch (err) {
    console.error("[SERVER]: Failed to fetch blog categories:", err);
    return NextResponse.json({
      status: 500,
      error: `Blog Sidebar GET error: ${err}`,
    });
  }
}
