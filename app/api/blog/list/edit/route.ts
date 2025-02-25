import { NextApiRequest } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

async function handler(req: NextApiRequest) {
  if (req.method === "GET") {
    try {
      const postsWithExtra = await db
        .select({
          id: post.id,
          title: post.title,
          createdAt: post.createdAt,
          categoryName: category.name,
        })
        .from(post)
        .leftJoin(category, sql`${category.id} = ${post.postId}`)
        .orderBy(sql`${post.id} DESC`)
        .execute();

      const result = postsWithExtra.map((post) => ({
        id: post.id,
        title: post.title,
        createdAt: post.createdAt,
        categories: { name: post.categoryName },
      }));

      return NextResponse.json(result);
    } catch (err) {
      console.error("[SERVER]:Error fetching editing posts:", err);
      NextResponse.json(
        {
          error: "Failed to fetch editing posts",
        },
        { status: 500 },
      );
    }
  } else {
    console.error("[SERVER]:Method not allowed");
    NextResponse.json(
      {
        error: "Failed to fetch editing posts",
      },
      { status: 405 },
    );
  }
}

export { handler as GET };
