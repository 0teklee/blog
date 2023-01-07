import prisma from "libs/prisma";
import { getScope } from "libs/utils/guestbookFetcher";

interface IPostGuestbookPostProps {
  author: string;
  post: string;
  isPrivate: boolean;
}

const postGuestbookPost = async (req, res) => {
  const { access_token } = req.query;
  const { body: postBody }: { body: IPostGuestbookPostProps } = req;
  try {
    const getUserInfo = await getScope(access_token);
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

    if (postCount > 5 && email !== process.env.ADMIN_GUESTBOOK_TOKEN) {
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

    return res.json(post);
  } catch (e) {
    console.error(e);
    if (e.message === "Please login again") {
      return res.status(403).json({ error: e.message, status: 403 });
    }
    return e.status(501).json({ error: e.message });
  }
};

export default postGuestbookPost;
