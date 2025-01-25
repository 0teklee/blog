import { THEME_META_IMAGE } from "libs/constants";
import BlogListPageTemplate from "components/blog/BlogListPageTemplate";

const page = async (props: {
  searchParams?: Promise<{ page: string; category: string }>;
}) => {
  const searchParams = await props.searchParams;
  return <BlogListPageTemplate searchParams={searchParams} />;
};

export const revalidate = 1200;
export const experimental_ppr = true;

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
