import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const putBlogEditPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const { id, category, ...rest } = data;
  // const tagsReqData = tagIn.map((item: string) => {
  //   return {
  //     where: { tag: item },
  //     create: { tag: item },
  //   };
  // });

  try {
    const putDB = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        ...rest,
        // tags: {
        //   connectOrCreate: tagsReqData,
        // },
        categories: {
          connectOrCreate: {
            where: { name: category },
            create: { name: category },
          },
        },
      },
    });
    res.status(200).json(putDB);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: err.message });
  }
};

export default putBlogEditPost;
