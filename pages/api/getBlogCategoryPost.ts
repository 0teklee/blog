import prisma from "libs/prisma";

const getBlogCategoryPost = async (category: string | string[]) => {
  try {
    if (typeof category === "string") {
      const categoriesDB = await prisma.post.findMany({
        where: {
          categories: {
            name: category,
          },
        },
        orderBy: { id: "desc" },
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

      const categories = JSON.parse(JSON.stringify(categoriesDB));
      return categories;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getBlogCategoryPost;
