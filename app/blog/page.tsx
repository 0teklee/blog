import { THEME_META_IMAGE } from "libs/constants";
import BlogListPageTemplate from "components/blog/BlogListPageTemplate";
import getBlogList from "pages/api/getBlogList";
import getBlogCategoryPost from "pages/api/getBlogCategoryPost";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const getBlogListQuery = async (searchParams: { [key: string]: string }) => {
    "use server";
    if (!searchParams) return getBlogList("1");

    const blogPage = searchParams.page;
    const category = searchParams.category;

    if (blogPage) return getBlogList(blogPage);
    if (category) return getBlogCategoryPost(category);

    return getBlogList("1");
  };

  const blogPageData = await getBlogListQuery(searchParams);

  return (
    <BlogListPageTemplate posts={blogPageData} searchParams={searchParams} />
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `teklog - blog`,
    description: `tech blog about frontend/web development`,
    openGraph: {
      title: `teklog - blog`,
      description: `tech blog about frontend/web development`,
      images: THEME_META_IMAGE,
    },
  };
}
