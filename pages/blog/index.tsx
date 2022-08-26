import MetaTag from "components/MetaTag";
import BlogListPageTemplage from "components/Template/Blog/BlogListPageTemplage";
import getBlogList from "pages/api/getBlogList";

const index = ({ list }) => {
  return (
    <>
      <MetaTag title="teklog - blog" url="www.teklog.com/blog" description="" />
      <BlogListPageTemplage posts={list} />
    </>
  );
};

export default index;

export async function getServerSideProps({ query }) {
  const page = query.page;
  const posts = await getBlogList(page);
  return {
    props: { list: posts },
  };
}
