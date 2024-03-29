import prisma from "libs/prisma";
import { NextApiRequest } from "next";

const getBlogEditPost = async (req: NextApiRequest) => {
  const query = req.query;
  const id = Number(query);
  try {
    const postsDB = await prisma.post.findUnique({
      where: {
        id,
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
