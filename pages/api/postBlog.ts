import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { IBlogItemPost } from "@/components/blog/types";

const postBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: IBlogItemPost = req.body;
  const { category, ...rest } = data;

  // const tagsReqData = tagIn.map((item: string) => {
  //   return {
  //     where: { tag: item },
  //     create: { tag: item },
  //   };
  // });

  try {
    const result = await prisma.post.create({
      data: {
        ...rest,
        categories: {
          connectOrCreate: {
            where: { name: category },
            create: { name: category },
          },
        },
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(403).json(err);
  }
};

export default postBlog;
