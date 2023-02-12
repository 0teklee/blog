import prisma from "libs/prisma";

interface IData {
  id: number;
  title: string;
}

const getDailyCategoryList = async (
  page: string | string[]
): Promise<IData[]> => {
  try {
    const postsDB = await prisma.post.findMany({
      orderBy: { id: "desc" },
      take: 15,
      skip: 0,
      select: {
        id: true,
        title: true,
      },
      where: {
        categories: {
          name: "daily",
        },
      },
    });

    const categoryPosts = postsDB.map((item) => {
      return { id: item.id, category: item.title };
    });

    const posts = JSON.parse(JSON.stringify(categoryPosts));
    return posts;
  } catch (err) {
    console.log(err);
  }
};

export default getDailyCategoryList;
