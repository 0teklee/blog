import prisma from "libs/prisma";
import { IBlogGetCategory } from "types/IBlogItem";

const getBlogCategoryList = async (): Promise<IBlogGetCategory[]> => {
  try {
    const categoriesDB = await prisma.category.findMany({
      where: {
        NOT: {
          posts: {
            none: {},
          },
        },
      },
      select: {
        name: true,
        posts: {
          orderBy: {
            id: "desc",
          },
          take: 10,
          select: {
            id: true,
            title: true,
          },
        },
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

export default getBlogCategoryList;
