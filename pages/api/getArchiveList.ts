import prisma from "libs/prisma";

const getArchiveList = async () => {
  try {
    const postsDB = await prisma.post.findMany({
      orderBy: { id: "desc" },
      select: {
        id: true,
        title: true,
        categories: true,
        createdAt: true,
        content: true,
      },
    });
    const posts = JSON.parse(JSON.stringify(postsDB));
    return posts;
  } catch (err) {
    console.log(err);
  }
};

export default getArchiveList;
