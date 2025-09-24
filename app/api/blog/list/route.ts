// app/api/blog/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const page = searchParams.get("page") || "1";
  const categoryFilter = searchParams.get("category");

  const pageNumber = Number(page);
  // TODO 변경 + 필터링 로직 추가
  const itemsPerPage = 5;

  try {
    const postsResponse = await db
      .select({
        id: post.id,
        title: post.title,
        content: post.content,
        createdAt: post.createdAt,
        categories: {
          name: category.name,
        },
      })
      .from(post)
      .leftJoin(category, sql`${category.id} = ${post.postId}`)
      .where(
        categoryFilter ? sql`${category.name} = ${categoryFilter}` : sql`true`,
      )
      .orderBy(sql`${post.id} DESC`)
      .limit(itemsPerPage)
      .offset((pageNumber - 1) * itemsPerPage)
      .execute();

    const hasNextPage = postsResponse.length === itemsPerPage;

    return NextResponse.json({
      posts: postsResponse,
      has_next_page: hasNextPage,
    });
  } catch (err) {
    console.error("Error fetching blog list:", err);
    return NextResponse.json(
      { error: "Failed to fetch blog list" },
      { status: 500 },
    );
  }
}
