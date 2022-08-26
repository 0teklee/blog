import { PrismaClient } from "@prisma/client";
import MetaTag from "components/MetaTag";
import BlogDetailPageTemplate from "components/Template/Blog/BlogDetailPageTemplate";
import Router from "next/router";
import getBlogDetail from "pages/api/getBlogDetail";

const detail = ({ detail, nav }) => {
  const { content, createdAt, id, title } = detail;
  return (
    <>
      <MetaTag
        title={title}
        description={content}
        url={`www.teklog.com/blog/${id}`}
      />
      <BlogDetailPageTemplate
        content={content}
        createdAt={createdAt}
        id={id}
        title={title}
        nav={nav}
      />
    </>
  );
};

export default detail;

export async function getServerSideProps({ params }) {
  const post = await getBlogDetail(params.id);

  return {
    props: post,
  };
}
