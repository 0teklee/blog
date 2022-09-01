import prisma from "libs/prisma";

const getBlogTagPost = async (tag: string | string[]) => {
  try {
    if (typeof tag === "string") {
      const tagsDB = await prisma.tag.findMany({
        where: {
          tag: tag,
        },
        orderBy: { id: "desc" },
        include: {
          posts: {
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
              tags: {
                select: {
                  tag: true,
                },
              },
            },
          },
        },
      });

      const tagPosts = JSON.parse(JSON.stringify(tagsDB));
      return tagPosts;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getBlogTagPost;
