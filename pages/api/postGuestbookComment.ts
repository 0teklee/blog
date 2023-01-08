import prisma from "libs/prisma";
import { getScope } from "../../libs/utils/guestbookFetcher";

interface IPostGuestbookCommentProps {
  comment_id: number;
  author: string;
  comment: string;
  isPrivate: boolean;
}

const postGuestbookComment = async (req, res) => {
  const { access_token } = req.query;
  const { body }: { body: IPostGuestbookCommentProps } = req;
  try {
    const getUserInfo = await getScope(access_token);
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
    const post = await prisma.guestBookComment.create({
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
    if (e.message === "Please login again") {
      return res.status(403).json({ error: e.message, status: 403 });
    }
    return e.status(403).json({ error: e.message, status: 403 });
  }
};

export default postGuestbookComment;
