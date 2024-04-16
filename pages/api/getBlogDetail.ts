import prisma from "libs/prisma";
import { IBlogGetDetail } from "@/components/blog/types";

const getBlogDetail = async (
  params: string | string[],
): Promise<IBlogGetDetail> => {
  const query = Number(params);

  try {
    const mainPost = await prisma.post.findUnique({
      where: {
        id: query,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        categories: {
          select: {
            name: true,
          },
        },
      },
    });

    const navPosts = await Promise.all([
      prisma.post.findFirst({
        where: {
          AND: [
            { id: { lt: query } },
            { categories: { name: { not: "daily" } } },
          ],
        },
        orderBy: { id: "desc" },
        take: 1,
        select: {
          id: true,
          title: true,
          content: true,
          createdAt: true,
          categories: true,
        },
      }),
      prisma.post.findFirst({
        where: {
          AND: [
            { id: { gt: query } },
            { categories: { name: { not: "daily" } } },
          ],
        },
        orderBy: { id: "asc" }, // 오름차순 정렬하여 가장 가까운 다음 ID 선택
        take: 1,
        select: {
          id: true,
          title: true,
          content: true,
          createdAt: true,
          categories: true,
        },
      }),
    ]);

    const nav = navPosts.filter((post) => post !== null);

    return {
      detail: mainPost || null,
      nav,
    };
  } catch (err) {
    console.error("Error fetching blog detail", err);
    return { detail: null, nav: [] };
  }
};

export default getBlogDetail;
