import prisma from "libs/prisma";
import { IBlogGetListItem } from "@/components/blog/types";

const getBlogList = async (
  page: string | string[],
): Promise<IBlogGetListItem[]> => {
  try {
    const postsDB = await prisma.post.findMany({
      orderBy: { id: "desc" },
      take: 5,
      skip: Number(page) === 1 || !page ? 0 : (Number(page) - 1) * 5,
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
      where: {
        categories: {
          name: {
            not: "daily",
          },
        },
      },
    });
    const posts = JSON.parse(JSON.stringify(postsDB));
    return posts;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getBlogList;
