import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

interface IData {
  detail: {
    id: number;
    createdAt: string;
    title: string;
    content: string;
  };
}

const getGalleryList = async (query: string | string[]): Promise<IData> => {
  const category = query && typeof query === "string" ? query : "~2022";
  try {
    if (query) {
      const postsDB = await prisma.galleyPost.findMany({
        where: {
          galleryCategory: {
            name: category,
          },
        },
        orderBy: {
          id: "desc",
        },
        select: {
          id: true,
          createdAt: true,
          title: true,
          imgUrl: true,
        },
      });
      const posts = JSON.parse(JSON.stringify(postsDB));
      return posts;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getGalleryList;
