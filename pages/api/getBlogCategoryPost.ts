import prisma from "libs/prisma";

const getBlogCategoryPost = async (category: string | string[]) => {
  try {
    if (typeof category === "string") {
      const categoriesDB = await prisma.category.findMany({
        where: {
          name: category,
        },
        orderBy: { id: "desc" },
        include: {
          posts: {
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
              // post_id: true,
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
