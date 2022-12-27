import prisma from "libs/prisma";

const getGuestbookList = async (req, res) => {
  let { cursor, email } = req.query;
  if (email === "undefined") {
    email = false;
  }
  try {
    const posts = await prisma.guestBookPost.findMany({
      orderBy: { createdAt: "desc" },
      // cursor: cursor ? { id: Number(cursor) } : { id: 1 },
      take: 20,
      // skip: Number(cursor) === 1 ? 0 : 1,
    });

    if (email === process.env.ADMIN_GUESTBOOK_TOKEN) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(posts));
      return JSON.stringify(posts);
    }

    if (!email) {
      const userNotLogin = await posts.map((post) => {
        if (post.isPrivate) {
          post = {
            ...post,
            post: "This is a private post 🔒",
            author: "anonymous",
          };
          return post;
        }
        return post;
      });
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(userNotLogin));
      return JSON.stringify(userNotLogin);
    }

    const userLogin = await posts.map((post) => {
      if (post.isPrivate && post.email !== email) {
        post = {
          ...post,
          post: "This is a private post 🔒",
          author: "anonymous",
        };
        return post;
      }
      return post;
    });
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(userLogin));
    return JSON.parse(JSON.stringify(userLogin));
  } catch (e) {
    console.error(e);
    return res.status(501).json({ error: e.message });
  }
};

export default getGuestbookList;
