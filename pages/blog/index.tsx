import MetaTag from "components/MetaTag";
import BlogListPageTemplage from "components/Template/Blog/BlogListPageTemplage";
import getBlogCategoryList from "pages/api/getBlogCategoryList";
import getBlogCategoryPost from "pages/api/getBlogCategoryPost";
import getBlogList from "pages/api/getBlogList";
import getBlogTagPost from "pages/api/getBlogTagPost";
import { IBlogGetCategorySideBar, IBlogGetListItem } from "types/IBlogItem";

const index = ({
  list,
  categories,
}: {
  list: IBlogGetListItem[];
  categories: IBlogGetCategorySideBar[];
}) => {
  return (
    <>
      <MetaTag title="teklog - blog" url="www.teklog.com/blog" description="" />
      <BlogListPageTemplage posts={list} categories={categories} />
    </>
  );
};

export default index;

export const getServerSideProps = async ({
  query,
}: {
  query: { page?: string; category?: string; tag?: string };
}) => {
  const { page, category, tag } = query;
  const categories = await getBlogCategoryList();

  if (category) {
    const categoryPosts = await getBlogCategoryPost(category);
    return {
      props: { list: categoryPosts[0].posts, categories },
    };
  }

  if (tag) {
    const tagPosts = await getBlogTagPost(tag);
    return {
      props: { list: tagPosts[0].posts, categories },
    };
  }

  const posts = await getBlogList(page);

  return {
    props: { list: posts, categories },
  };
};
