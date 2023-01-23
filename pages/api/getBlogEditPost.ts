import prisma from "libs/prisma";
import { IBlogItemNoDate } from "types/IBlogItem";

const getBlogEditPost = async (
  params: string | string[]
): Promise<IBlogItemNoDate> => {
  const query = Number(params);
  try {
    const postsDB = await prisma.post.findUnique({
      where: {
        id: query,
      },
      include: {
        categories: {
          select: {
            name: true,
          },
        },
        // tags: {
        //   select: {
        //     tag: true,
        //   },
        // },
      },
    });
    const posts = JSON.parse(JSON.stringify(postsDB));

    return posts;
  } catch (err) {
    console.log(err);
  }
};

export default getBlogEditPost;
