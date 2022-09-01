import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

interface IData {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
  };
  nav: { id: number; createdAt: string; title: string }[];
}

const getBlogList = async (page: string | string[]): Promise<IData> => {
  try {
    const postsDB = await prisma.post.findMany({
      orderBy: { id: "desc" },
      take: 5,
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
        tags: {
          select: {
            tag: true,
          },
        },
      },
    });
    const posts = JSON.parse(JSON.stringify(postsDB));
    return posts;
  } catch (err) {
    console.log(err);
  }
};

export default getBlogList;
