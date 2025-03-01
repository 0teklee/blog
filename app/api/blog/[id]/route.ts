import { NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

async function GET(req: NextRequest, res: NextApiResponse) {
  const id = req.nextUrl.pathname.split("/").pop();
  if (!id || Array.isArray(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
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

    return NextResponse.json({
      ...mainPost,
      categories: (mainPost.categories as string[])[0],
    });
  } catch (err) {
    console.error("[SERVER]: Error fetching blog detail:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export { GET };
