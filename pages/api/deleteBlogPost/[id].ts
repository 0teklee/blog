import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const deleteBlogPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query.id;
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: Number(query),
      },
    });
    res.status(200).statusMessage = "정상적으로 삭제되었습니다.";
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default deleteBlogPost;
