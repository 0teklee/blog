import { THEME_META_IMAGE } from "libs/constants";
import BlogListPageTemplate from "components/blog/BlogListPageTemplate";

const page = async ({
  searchParams,
}: {
  searchParams?: { page: string; category: string };
}) => {
  return <BlogListPageTemplate searchParams={searchParams} />;
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
