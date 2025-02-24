import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { category, post } from "@/db/migrations/schema";
import { sql } from "drizzle-orm";

interface CategoryWithPosts {
  name: string;
  posts: { id: number; title: string }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
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
        return res.status(404).json({ error: "No categories found" });
      }

      const categories = categoriesData.map((category) => ({
        name: category.name,
        posts: (category.posts || []).slice(0, 10),
      }));

      res.status(200).json(categories);
    } catch (err) {
      console.error("Error fetching blog categories:", err);
      res.status(500).json({ error: "Failed to fetch blog categories" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
