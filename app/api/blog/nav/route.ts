// app/api/blog/nav/route.ts
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest) {
  const query = req.nextUrl.pathname.split("/").pop();

  const id = Number(query);

  if (!query || isNaN(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 404 });
  }

  try {
    const [prevPost, nextPost] = await Promise.all([
      // 이전 글
      db
        .select({
          id: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          categoryName: category.name,
        })
        .from(post)
        .leftJoin(category, sql`${category.id} = ${post.postId}`)
        .where(sql`${post.id} < ? AND ${category.name} != ?`, [id, "daily"])
        .orderBy(sql`${post.id} DESC`)
        .limit(1)
        .execute(),

      // 다음 글
      db
        .select({
          id: post.id,
          title: post.title,
          content: post.content,
          createdAt: post.createdAt,
          categoryName: category.name,
        })
        .from(post)
        .leftJoin(category, sql`${category.id} = ${post.postId}`)
        .where(sql`${post.id} > ? AND ${category.name} != ?`, [id, "daily"])
        .orderBy(sql`${post.id} ASC`)
        .limit(1)
        .execute(),
    ]);

    return NextResponse.json(
      {
        prevPost: prevPost[0] || null,
        nextPost: nextPost[0] || null,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("[SERVER]: Error fetching blog navigation posts:", err);
    return NextResponse.json(
      { error: "Failed to fetch blog navigation posts" },
      { status: 500 },
    );
  }
}

export { GET };
