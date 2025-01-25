import { Suspense } from "react";
import BlogListContents from "@/components/blog/list/BlogListContents";
import { LoaderCircle } from "lucide-react";

const BlogListPageTemplate = ({
  searchParams,
}: {
  searchParams?: { page: string; category: string };
}) => {
  return (
    <div className="relative flex flex-col gap-16 w-full">
      <h1 className={"text-3xl font-bold font-inter"}>
        {searchParams?.category ? searchParams?.category : "Posts"}
      </h1>
      <Suspense
        fallback={
          <LoaderCircle className={`w-32 text-gray-300 animate-spin`} />
        }
      >
        <BlogListContents searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default BlogListPageTemplate;
