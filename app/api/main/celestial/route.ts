// @/app/api/main/celestial/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db"; // Drizzle ORM 인스턴스
import { eq } from "drizzle-orm";
import { category, post, postToTag, tag } from "@/db/migrations/schema";

export async function GET() {
  try {
    // Posts 데이터 가져오기
    const postData = await db
      .select({
        id: post.id,
        title: post.title,
        createdAt: post.createdAt,
        categoryId: post.postId, // categoryId는 postId 필드에서 참조됨
      })
      .from(post);

    // Tags 데이터 가져오기 (Post - Tag 다대다 관계 처리)
    const postTagsData = await db
      .select({
        postId: postToTag.a, // _PostToTag 테이블에서 A가 postId
        tag: tag.tag,
      })
      .from(postToTag)
      .leftJoin(tag, eq(postToTag.b, tag.id));

    const categoryData = await db
      .select({
        id: category.id,
        name: category.name,
      })
      .from(category);

    // 각 포스트에 태그 추가
    const postsWithTagsAndCategory = postData.map((p) => ({
      ...p,
      tags: postTagsData.filter((t) => t.postId === p.id).map((t) => t.tag),
      category: categoryData.find((c) => c.id === p.categoryId) || null, // 카테고리 매칭
    }));

    return NextResponse.json({
      posts: postsWithTagsAndCategory,
      categories: categoryData,
    });
  } catch (error) {
    console.error("Error fetching celestial data:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
