import MetaTag from "components/MetaTag";
import GuestbookTemplate from "components/Template/Gusetbook/GuestbookTemplate";
import prisma from "libs/prisma";
import { GetServerSideProps } from "next";

const GuestBook = ({ posts }) => {
  return (
    <>
      <MetaTag
        title="teklog - gallery"
        url="https://www.teklog.site/gallery"
        description={`Teklog Gallery : Guestbook`}
      />
      <GuestbookTemplate posts={posts} />
    </>
  );
};

export default GuestBook;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=3000"
  );

  const getGuestBookDB = await prisma.guestBookPost.findMany();
  const posts = JSON.parse(JSON.stringify(getGuestBookDB));

  return {
    props: { posts },
  };
};
