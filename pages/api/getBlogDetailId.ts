import prisma from "libs/prisma";

const getBlogDetailId = async () => {
  try {
    const postIdDB = await prisma.post.findMany({
      select: {
        id: true,
      },
    });
    const res = JSON.parse(
      JSON.stringify(postIdDB.map((item) => `${item.id}`)),
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};

export default getBlogDetailId;
