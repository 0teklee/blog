import prisma from "libs/prisma";

const getGuestbookList = async (req, res) => {
  const { cursor, access_token } = req.query;
  try {
    const getScope = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}&access_type=offline`
    );
    const { email } = await getScope.json();

    const posts = await prisma.guestBookPost.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      skip: Number(cursor) !== 0 ? 19 : 0,
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
    });

    if (email === process.env.ADMIN_GUESTBOOK_TOKEN) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      res.end(JSON.stringify(posts));
      return JSON.stringify(posts);
    }

    if (!email) {
      const userNotLogin = posts.map((post) => {
        if (post.isPrivate) {
          post = {
            ...post,
            post: "This is a private post 🔒",
            author: "anonymous",
          };
        }
        post = {
          ...post,
          comments: post.comments.map((comment) => {
            if (comment.isPrivate) {
              return {
                ...comment,
                author: "anonymous",
                comment: "This is a private comment 🔒",
              };
            }
            delete comment.email;
            return {
              ...comment,
            };
          }),
        };
        delete post.email;
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
          comments: post.comments.map((comment) => {
            if (comment.isPrivate && comment.email !== email) {
              return {
                ...comment,
                author: "anonymous",
                comment: "This is a private comment 🔒",
              };
            }
            delete comment.email;
            return {
              ...comment,
            };
          }),
        };
        delete post.email;
        return post;
      }

      post = {
        ...post,
        comments: post.comments.map((comment) => {
          if (comment.isPrivate && comment.email !== email) {
            return {
              ...comment,
              comment: "This is a private comment 🔒",
              author: "anonymous",
            };
          }
          delete comment.email;
          return comment;
        }),
      };
      delete post.email;
      return post;
    });

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(userLogin));
    return JSON.parse(JSON.stringify(userLogin));
  } catch (e) {
    console.error(e);
    if (e.status === 403) {
      return res.status(403).json({ error: "token expired" });
    }
    return res.status(501).json({ error: e.message });
  }
};

export default getGuestbookList;
