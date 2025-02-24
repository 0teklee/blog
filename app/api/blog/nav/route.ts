// app/api/blog/nav/route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.query;
  const id = Number(query.id);

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

    res.status(200).json({
      prevPost: prevPost[0] || null,
      nextPost: nextPost[0] || null,
    });
  } catch (err) {
    console.error("Error fetching blog navigation posts:", err);
    res.status(500).json({ error: "Failed to fetch blog navigation posts" });
  }
}
