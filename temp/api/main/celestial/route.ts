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
        categoryId: post.postId,
      })
      .from(post);

    // Tags 데이터 가져오기 (Post - Tag 다대다 관계 처리)
    const postTagsData = await db
      .select({
        postId: postToTag.a,
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

    // 각 포스트에 태그와 카테고리 정보 추가
    const postsWithTagsAndCategory = postData.map((p) => ({
      ...p,
      tags: postTagsData.filter((t) => t.postId === p.id).map((t) => t.tag),
      category: categoryData.find((c) => c.id === p.categoryId) || null,
      isCenter: p.id === 1, // id가 5인 포스트를 중앙에 배치
    }));

    // 각 카테고리별 포스트 수 계산
    const postCountByCategory = postsWithTagsAndCategory.reduce(
      (acc, post) => {
        if (post.categoryId) {
          acc[post.categoryId] = (acc[post.categoryId] || 0) + 1;
        }
        return acc;
      },
      {} as Record<number, number>,
    );

    // 카테고리를 posts 배열에 추가 (조건에 맞는 카테고리만)
    const categoriesAsPoints = categoryData
      .filter((c) => {
        // .etc 카테고리 제외 및 포스트가 2개 이상인 카테고리만 포함
        return (
          c.name !== ".etc" &&
          (postCountByCategory[c.id] || 0) > 1 &&
          c.id !== 13
        );
      })
      .map((c) => ({
        id: `category-${c.id}`,
        title: c.name,
        createdAt: new Date(),
        categoryId: c.id,
        tags: [],
        category: c,
        isCategory: true,
        postCount: postCountByCategory[c.id],
      }));

    // 포스트와 카테고리를 합친 배열 반환
    return NextResponse.json({
      posts: [...categoriesAsPoints, ...postsWithTagsAndCategory],
      categories: categoryData,
    });
  } catch (error) {
    console.error("Error fetching celestial data:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
