import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
import { IBlogItemPost } from "types/IBlogItem";

const postBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: IBlogItemPost = req.body;
  const { tag: tagIn, category, ...rest } = data;

  const tagsReqData = tagIn.map((item: string) => {
    return {
      where: { tag: item },
      create: { tag: item },
    };
  });

  try {
    const result = await prisma.post.create({
      data: {
        ...rest,
        tags: {
          connectOrCreate: tagsReqData,
        },
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
    // console.log(err);
    res.status(403).json({ err: err.message });
  }
};

export default postBlog;
