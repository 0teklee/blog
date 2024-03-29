import prisma from "libs/prisma";
import { IGalleryPostGetDetail } from "@/components/blog/types";

const getGalleryDetail = async (
  params: string | string[],
): Promise<IGalleryPostGetDetail> => {
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
    return {
      detail: {
        id: 0,
        title: "",
        imgUrl: "",
        createdAt: "",
        galleryCategory: {
          name: "",
        },
      },
    };
  }
};

export default getGalleryDetail;
