import MetaTag from "components/MetaTag";
import BlogListPageTemplage from "components/Template/Blog/BlogListPageTemplage";
import { GetServerSideProps } from "next";
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
      <MetaTag
        title="teklog - blog"
        url="https://www.teklog.site/blog"
        description="Teklog - Blog List page"
      />
      <BlogListPageTemplage posts={list} categories={categories} />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({
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

  /* Branch If page query or any query doesn't exist*/
  if (!page) {
    return {
      redirect: {
        destination: "/blog?page=1",
        permanent: false,
      },
    };
  }

  const posts = await getBlogList(page);

  return {
    props: { list: posts, categories },
  };
};
