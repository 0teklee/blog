import prisma from "libs/prisma";
import { IBlogMainItem } from "@/components/blog/types";

const getMainPosts = async (): Promise<IBlogMainItem[]> => {
  try {
    const postsDB = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      where: {
        NOT: {
          title: "",
          content: "",
        },
        categories: {
          name: {
            not: "daily",
          },
        },
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        content: true,
      },
    });
    const posts: Promise<IBlogMainItem[]> = JSON.parse(JSON.stringify(postsDB));
    return posts;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getMainPosts;
