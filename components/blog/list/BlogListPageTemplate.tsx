import ListFallback from "@/components/blog/list/ListFallback";
import { Suspense } from "react";
import BlogListContents from "@/components/blog/list/BlogListContents";
import { ListHeader, ListLayout } from "@/components/blog/list/Template";

const BlogListPageTemplate = () => {
  return (
    <ListLayout>
      <ListHeader text={"Posts"} />
      <Suspense fallback={<ListFallback />}>
        <BlogListContents />
      </Suspense>
    </ListLayout>
  );
};

export default BlogListPageTemplate;
