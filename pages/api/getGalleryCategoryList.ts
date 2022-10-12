import prisma from "libs/prisma";
import { IBlogGetCategory } from "types/IBlogItem";

const getGalleryCategoryList = async (): Promise<IBlogGetCategory[]> => {
  try {
    const categoriesDB = await prisma.galleryCategory.findMany({
      select: {
        name: true,
      },
    });

    const categories: Promise<IBlogGetCategory[]> = JSON.parse(
      JSON.stringify(categoriesDB)
    );
    return categories;
  } catch (err) {
    console.log(err);
  }
};

export default getGalleryCategoryList;
