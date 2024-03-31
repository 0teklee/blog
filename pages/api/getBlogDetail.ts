import prisma from "libs/prisma";
import { IBlogGetDetail } from "@/components/blog/types";
import getBlogDetailId from "./getBlogDetailId";

const getBlogDetail = async (
  params: string | string[],
): Promise<IBlogGetDetail> => {
  const query = Number(params);
  const idList = await getBlogDetailId();
  const firstId = idList[0]?.id || 0;

  try {
    const postsDB = await prisma.post.findMany({
      take: Number(query) !== firstId ? 3 : 2,
      cursor: {
        id: Number(query) !== firstId ? Number(query) - 1 : Number(query),
      },
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
    });

    const postDetail: IBlogGetDetail["detail"] = JSON.parse(
      JSON.stringify(
        postsDB.find(
          (item) =>
            item.id === Number(query) && item.categories.name !== "daily",
        ),
      ),
    );

    const postPrevNext: IBlogGetDetail["nav"] = JSON.parse(
      JSON.stringify(
        postsDB.filter(
          (item) =>
            item.id !== Number(query) && item.categories.name !== "daily",
        ),
      ),
    );

    return { detail: postDetail, nav: postPrevNext };
  } catch (err) {
    console.log(err);
    return {} as IBlogGetDetail;
  }
};

export default getBlogDetail;
