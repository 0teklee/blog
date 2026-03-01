import { THEME_META_IMAGE } from "@/libs/constants";
import BlogListPageTemplate from "@/components/blog/list/BlogListPageTemplate";
import { Suspense } from "react";
import { ListHeader, ListLayout } from "@/components/blog/list/Template";
import LoaderSpin from "@/components/common/module/LoaderSpin";

const page = () => {
  return (
    <Suspense
      fallback={
        <ListLayout>
          <ListHeader text={"Posts"} />
          <LoaderSpin />
        </ListLayout>
      }
    >
      <BlogListPageTemplate />
    </Suspense>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `teklog - blog`,
    description: `tech blog about software engineering`,
    openGraph: {
      title: `teklog - blog`,
      description: `tech blog about software engineering`,
      images: THEME_META_IMAGE,
    },
  };
}
