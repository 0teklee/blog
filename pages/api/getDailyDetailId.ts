import prisma from "libs/prisma";

const getDailyDetailId = async () => {
  try {
    const postIdDB = await prisma.post.findMany({
      select: {
        id: true,
      },
      where: {
        categories: {
          name: "daily",
        },
      },
    });
    const res = JSON.parse(JSON.stringify(postIdDB));
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default getDailyDetailId;
