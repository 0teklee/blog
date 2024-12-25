import { Suspense } from "react";
import Loading from "@/components/common/Loading";
import BlogListContents from "@/components/blog/BlogListContents";

const BlogListPageTemplate = ({
  searchParams,
}: {
  searchParams?: { page: string; category: string };
}) => {
  return (
    <div className="relative flex flex-col gap-16 lg:flex-grow">
      <h1 className={"text-center text-3xl font-bold font-inter"}>
        {searchParams?.page && !searchParams?.category ? "Blog" : null}
        {searchParams?.category ? searchParams?.category : null}
      </h1>
      <Suspense fallback={<Loading style={`w-full`} />}>
        <BlogListContents searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default BlogListPageTemplate;
