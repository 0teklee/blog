import { PrismaClient } from "@prisma/client";

interface IData {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
  };
  nav: { id: number; createdAt: string; title: string }[];
}

const getBlogList = async (page = 1): Promise<IData> => {
  const prisma = new PrismaClient();
  const postsDB = await prisma.post.findMany({
    take: 5,
    skip: Number(page) === 1 ? 0 : 5,
    orderBy: { id: "desc" },
  });
  const posts = JSON.parse(JSON.stringify(postsDB));

  return posts;
};

export default getBlogList;
