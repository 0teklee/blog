import { THEME_META_IMAGE } from "libs/constants";
import BlogListPageTemplate from "components/blog/BlogListPageTemplate";
import { Suspense } from "react";
import Loading from "@/components/common/Loading";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return (
    <Suspense fallback={<Loading style={`flex-1 w-full`} />}>
      <BlogListPageTemplate searchParams={searchParams} />
    </Suspense>
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
