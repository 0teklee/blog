import prisma from "libs/prisma";

const getBlogDetailId = async () => {
  try {
    const postIdDB = await prisma.post.findMany({
      select: {
        id: true,
      },
    });
    const res = JSON.parse(JSON.stringify(postIdDB));
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default getBlogDetailId;
