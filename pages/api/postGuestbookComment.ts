import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import getGoogleScope from "@/pages/api/getGoogleScope";

interface IPostGuestbookCommentProps {
  comment_id: number;
  author: string;
  comment: string;
  isPrivate: boolean;
}

const postGuestbookComment = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { access_token } = req.query;
  const { body }: { body: IPostGuestbookCommentProps } = req;
  try {
    const getUserInfo = await getGoogleScope(access_token as string);
    const { email, name }: { email: string; name: string } = getUserInfo;

    const startDate = new Date();
    const endDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const postCount = await prisma.guestBookComment.count({
      where: {
        email,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    if (!email) {
      throw Error("Please login again");
    }

    if (postCount > 10 && email !== process.env.ADMIN_GUESTBOOK_TOKEN) {
      res.status(400);
      throw Error("You have reached your daily comment limit.");
    }
    await prisma.guestBookComment.create({
      data: {
        name,
        email,
        comment: body.comment,
        isPrivate: body.isPrivate,
        author: body.author,
        guestbookpost: {
          connect: {
            id: body.comment_id,
          },
        },
      },
    });

    return res.status(200).json({ message: "Comment posted successfully." });
  } catch (e) {
    console.error(e);
    res.status(403);
    res.json({ error: "please login again" });
  }
};

export default postGuestbookComment;
