import { PrismaClient } from "@prisma/client";

// TODO 이전 ID 없는 데이터 고치기
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
  let queryId = Number(query);

  const idPrevSearcher = (query: number): number => {
    if (query <= 1) {
      return 1;
    }
    // for (let i = queryId; i > 0; i--) {
    //   queryId = queryId - 1;
    // }
    console.log("queryID", query);
    return query - idPrevSearcher(query - 1);
  };

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
  // const postPrevNextDB = await prisma.post.findMany({
  //   where: {
  //     OR: [{ id: Number(query) + 1 }, { id: Number(query) - 1 }],
  //   },
  //   select: {
  //     id: true,
  //     createdAt: true,
  //     title: true,
  //   },
  // });

  const testPrisma = await prisma.post.findMany({
    orderBy: { id: "desc" },
  });
  const postPrevNextDB = [
    testPrisma[testPrisma.findIndex((item) => item.id === Number(query)) - 1],
    testPrisma[testPrisma.findIndex((item) => item.id === Number(query)) + 1],
  ];

  const postDetail = JSON.parse(JSON.stringify(postsDB));
  const postPrevNext = JSON.parse(JSON.stringify(postPrevNextDB));
  return { detail: postDetail, nav: postPrevNext };
};

export default getBlogDetail;
