import prisma from "libs/prisma";
import { IBlogMainItem } from "types/IBlogItem";

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
  }
};

export default getMainPosts;
