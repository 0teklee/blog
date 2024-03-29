import prisma from "libs/prisma";
import { IBlogGetCategorySideBar } from "@/components/blog/types";

const getBlogCategoryList = async (): Promise<IBlogGetCategorySideBar[]> => {
  try {
    const categoriesDB = await prisma.category.findMany({
      where: {
        NOT: {
          posts: {
            none: {},
          },
        },
        name: {
          not: "daily",
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

    const categories: Promise<IBlogGetCategorySideBar[]> = JSON.parse(
      JSON.stringify(categoriesDB),
    );
    return categories;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getBlogCategoryList;
