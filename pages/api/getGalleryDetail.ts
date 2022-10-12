import prisma from "libs/prisma";
import { IGalleryPostGetDetail } from "types/IBlogItem";
import getBlogDetailId from "./getBlogDetailId";

const getGalleryDetail = async (
  params: string | string[]
): Promise<IGalleryPostGetDetail | false> => {
  const idList = await getBlogDetailId();
  const query = Number(params);

  try {
    const postsDB = await prisma.galleyPost.findUnique({
      where: {
        id: query,
      },
      select: {
        id: true,
        title: true,
        imgUrl: true,
        createdAt: true,
        galleryCategory: {
          select: {
            name: true,
          },
        },
      },
    });

    const postDetail = JSON.parse(JSON.stringify(postsDB));

    return { detail: postDetail };
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default getGalleryDetail;
