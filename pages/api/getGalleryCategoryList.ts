import prisma from "libs/prisma";

const getGalleryCategoryList = async (): Promise<{ name: string }[]> => {
  try {
    const categoriesDB = await prisma.galleryCategory.findMany({
      select: {
        name: true,
      },
    });

    const categories = JSON.parse(JSON.stringify(categoriesDB));

    return categories;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getGalleryCategoryList;
