import prisma from "libs/prisma";

interface IData {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
  };
  nav: { id: number; createdAt: string; title: string }[];
}

const getDailyList = async (page: string | string[]): Promise<IData> => {
  try {
    const postsDB = await prisma.post.findMany({
      orderBy: { id: "desc" },
      take: 20,
      skip: Number(page) === 1 ? 0 : (Number(page) - 1) * 5,
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
          name: "daily",
        },
      },
    });
    const posts = JSON.parse(JSON.stringify(postsDB));
    return posts;
  } catch (err) {
    console.log(err);
  }
};

export default getDailyList;
