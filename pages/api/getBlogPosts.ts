import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBlogPosts = async () => {
  const prisma = new PrismaClient();
  const postsDB = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
    where: {
      NOT: {
        title: "",
        content: "",
      },
    },
  });
  const posts = JSON.parse(JSON.stringify(postsDB));
  return posts;
};

export default getBlogPosts;
