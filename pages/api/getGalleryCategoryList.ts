import prisma from "libs/prisma";
import { IGalleryGetCategory } from "types/IBlogItem";

const getGalleryCategoryList = async (): Promise<IGalleryGetCategory[]> => {
  try {
    const categoriesDB = await prisma.galleryCategory.findMany({
      select: {
        name: true,
      },
    });

    const categories: Promise<IGalleryGetCategory[]> = JSON.parse(
      JSON.stringify(categoriesDB)
    );
    return categories;
  } catch (err) {
    console.log(err);
  }
};

export default getGalleryCategoryList;
