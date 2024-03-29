import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";

interface IPostGuestbookPostProps {
  author: string;
  post: string;
  isPrivate: boolean;
}

const postGuestbookPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { access_token } = req.query;
  const { body: postBody }: { body: IPostGuestbookPostProps } = req;
  try {
    const getUserInfo = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}&access_type=offline`,
    ).then((res) => res.json());
    const { email, name } = getUserInfo;
    const startDate = new Date();
    const endDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const postCount = await prisma.guestBookPost.count({
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

    if (postCount > 3 && email !== process.env.ADMIN_GUESTBOOK_TOKEN) {
      res.status(403);
      return res.json({ message: "You have reached your daily post limit." });
    }

    const post = await prisma.guestBookPost.create({
      data: {
        name,
        email,
        isPrivate: postBody.isPrivate,
        author: postBody.author,
        post: postBody.post,
      },
    });

    return res.json({ message: "successfully uploaded" });
  } catch (e) {
    console.error(e);
    if (e === "Please login again") {
      res.status(403).json({ message: e, status: 403 });
      return;
    }
    res.status(501).json({ message: "Internal Server Error", status: 501 });
  }
  return;
};

export default postGuestbookPost;
