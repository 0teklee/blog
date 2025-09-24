import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

interface CategoryWithPosts {
  name: string;
  posts: { id: number; title: string }[];
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const categoriesData = (await db
      .select({
        name: category.name,
        posts: sql`array_agg(json_build_object('id', ${post.id}, 'title', ${post.title})) as posts`,
      })
      .from(category)
      .leftJoin(post, sql`${post.postId} = ${category.id}`)
      .where(sql`${category.name} != ${"daily"}`)
      .groupBy(category.name)
      .execute()) as CategoryWithPosts[];

    if (!categoriesData) {
      return NextResponse.json({
        status: 404,
        error: `No categories returned from the database`,
      });
    }

    const categories = categoriesData.map((category) => ({
      name: category.name,
      posts: (category.posts || []).slice(0, 10),
    }));

    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.error("[SERVER] : Error fetching blog categories:", err);
    return NextResponse.json({
      status: 500,
      error: `Blog Sidebar GET error: ${err}`,
    });
  }
}
