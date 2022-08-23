import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

const postBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  try {
    const result = await client.post.create({
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occurred" });
  }
};

export default postBlog;
