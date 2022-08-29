import MetaTag from "components/MetaTag";
import BlogDetailPageTemplate from "components/Template/Blog/BlogDetailPageTemplate";
import getBlogDetail from "pages/api/getBlogDetail";

const Detail = ({ detail, nav }) => {
  const { content, createdAt, id, title, categories, tags } = detail;
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
        category={categories.name}
        tags={tags.map((item) => item.tag)}
        nav={nav}
      />
    </>
  );
};

export default Detail;

// TODO Static Props로 변경
export const getServerSideProps = async ({ params }) => {
  const post = await getBlogDetail(params.id);
  if (!post) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: post,
  };
};
