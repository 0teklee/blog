import { PrismaClient } from "@prisma/client";

// TODO 이전 ID 없는 데이터 고치기
interface IData {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
    category: string;
  };
  nav: { id: number; createdAt: string; title: string }[];
}

const getBlogDetail = async (query: string | string[]): Promise<IData> => {
  const prisma = new PrismaClient();

  const postsDB = await prisma.post.findMany({
    take: 3,
    cursor: { id: Number(query) - 1 },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      category: true,
    },
  });

  const postDetail = JSON.parse(
    JSON.stringify(postsDB.find((item) => item.id === Number(query)))
  );

  const postPrevNext = JSON.parse(
    JSON.stringify(postsDB.filter((item) => item.id !== Number(query)))
  );

  return { detail: postDetail, nav: postPrevNext };
};

export default getBlogDetail;
