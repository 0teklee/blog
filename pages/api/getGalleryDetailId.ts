import prisma from "libs/prisma";

const getGalleryDetailId = async () => {
  try {
    const postIdDB = await prisma.galleyPost.findMany({
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

export default getGalleryDetailId;
