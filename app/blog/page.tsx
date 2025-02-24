import { THEME_META_IMAGE } from "@/libs/constants";
import BlogListPageTemplate from "@/components/blog/list/BlogListPageTemplate";
import { Suspense } from "react";
import { ListHeader, ListLayout } from "@/components/blog/list/Template";
import LoaderSpin from "@/components/common/module/LoaderSpin";

const page = async (props: {
  searchParams?: Promise<{ page: string; category: string }>;
}) => {
  return (
    <Suspense
      fallback={
        <ListLayout>
          <ListHeader text={"Posts"} />
          <LoaderSpin />
        </ListLayout>
      }
    >
      <BlogListPageTemplate searchParams={props?.searchParams} />
    </Suspense>
  );
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
