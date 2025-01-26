import ListFallback from "@/components/blog/list/ListFallback";
import { Suspense } from "react";
import BlogListContents from "@/components/blog/list/BlogListContents";
import { ListHeader, ListLayout } from "@/components/blog/list/Template";

const BlogListPageTemplate = async ({
  searchParams,
}: {
  searchParams?: Promise<{ page: string; category: string }>;
}) => {
  const params = await searchParams!; // middleware 적용됨

  return (
    <ListLayout>
      <ListHeader text={params?.category ? params?.category : "Posts"} />
      <Suspense fallback={<ListFallback />}>
        <BlogListContents searchParams={params} />
      </Suspense>
    </ListLayout>
  );
};

export default BlogListPageTemplate;
