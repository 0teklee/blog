import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { maskPrivateContent } from "@/libs/utils";

const getGuestbookList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user, cursor } = req.query;
  try {
    const posts = await prisma.guestBookPost.findMany({
      take: 5,
      skip: cursor ? Number(cursor) : 0,
      select: {
        id: true,
        createdAt: true,
        author: true,
        email: true,
        post: true,
        isPrivate: true,
        comments: {
          select: {
            id: true,
            createdAt: true,
            author: true,
            email: true,
            isPrivate: true,
            comment: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const processedPosts = posts.map((post) =>
      maskPrivateContent(post, user as string),
    );

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(processedPosts));

    return processedPosts;
  } catch (e) {
    console.error(e);

    return res.status(501).json(e);
  }
};

export default getGuestbookList;
