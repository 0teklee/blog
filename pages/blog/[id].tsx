import { PrismaClient } from "@prisma/client";
import Router from "next/router";

export const detail = () => {
  const a = 1;

  return (
    <div>
      <p>detail</p>
    </div>
  );
};

export default function getStaticProps({ req, res }) {
  const router = Router;
  const client = new PrismaClient();
  const post = await client.post.findUnique(router.asPath);
  return {
    props: post,
  };
}
