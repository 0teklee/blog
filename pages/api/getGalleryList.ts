import prisma from "libs/prisma";

const getGalleryList = async (
  query: string | string[],
  page?: string,
): Promise<
  {
    id: number;
    createdAt: string;
    title: string;
    content: string;
    imgUrl: string;
  }[]
> => {
  const category = query && typeof query === "string" ? query : "~2022";
  const cursor = page && !isNaN(Number(page)) ? parseInt(page) : 0;

  try {
    const postsDB = await prisma.galleyPost.findMany({
      where: {
        galleryCategory: {
          name: category,
        },
      },
      skip: cursor,
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
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getGalleryList;
