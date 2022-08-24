import { PrismaClient } from "@prisma/client";

interface IData {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
  };
  nav: { id: number; createdAt: string; title: string }[];

  // category: string;
}

const getBlogDetail = async (query: string | string[]): Promise<IData> => {
  const prisma = new PrismaClient();
  const postsDB = await prisma.post.findUnique({
    where: {
      id: Number(query),
    },
    select: {
      id: true,
      createdAt: true,
      title: true,
      content: true,
      // category: true
    },
  });
  const postPrevNextDB = await prisma.post.findMany({
    where: {
      OR: [{ id: Number(query) + 1 }, { id: Number(query) - 1 }],
    },
    select: {
      id: true,
      createdAt: true,
      title: true,
    },
  });

  const postDetail = JSON.parse(JSON.stringify(postsDB));
  const postPrevNext = JSON.parse(JSON.stringify(postPrevNextDB));
  return { detail: postDetail, nav: postPrevNext };
};

export default getBlogDetail;
