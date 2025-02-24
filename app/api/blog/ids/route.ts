import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { post } from "@/db/migrations/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // get paths 동적 id 생성 시 사용
  if (req.method === "GET") {
    try {
      const postIds = await db.select({ id: post.id }).from(post).execute();

      const resData = (postIds || []).map((item) => ({ id: String(item.id) }));

      res.status(200).json(resData);
    } catch (err) {
      console.error("Error fetching blog detail IDs:", err);
      res.status(500).json({ error: "Failed to fetch blog detail IDs" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
