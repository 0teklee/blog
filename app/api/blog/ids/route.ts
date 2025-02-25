import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/db";
import { post } from "@/db/migrations/schema";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // get paths 동적 id 생성 시 사용
  try {
    const postIds = await db.select({ id: post.id }).from(post).execute();

    const resData = (postIds || []).map((item) => ({ id: String(item.id) }));

    return NextResponse.json(resData, { status: 200 });
  } catch (err) {
    console.error("[SERVER]: Error fetching blog detail IDs:", err);
    return NextResponse.json(
      { error: "[SERVER]: Method not allowed" },
      { status: 405 },
    );
  }
}
