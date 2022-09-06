import prisma from "libs/prisma";
import { IBlogGetDetail } from "types/IBlogItem";
import getBlogDetailId from "./getBlogDetailId";

const getBlogDetail = async (
  params: string | string[]
): Promise<IBlogGetDetail | false> => {
  const query = Number(params);
  const idList = await getBlogDetailId();
  const firstId = idList[0].id;
  // if (query === idList[1].id)
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
        tags: {
          select: {
            tag: true,
          },
        },
      },
    });
    const postDetail: IBlogGetDetail["detail"] = JSON.parse(
      JSON.stringify(postsDB.find((item) => item.id === Number(query)))
    );

    const postPrevNext: IBlogGetDetail["nav"] = JSON.parse(
      JSON.stringify(postsDB.filter((item) => item.id !== Number(query)))
    );

    return { detail: postDetail, nav: postPrevNext };
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default getBlogDetail;
