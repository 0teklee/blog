import { Suspense } from "react";
import BlogListContents from "@/components/blog/BlogListContents";
import { LoaderCircle } from "lucide-react";

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
      <Suspense
        fallback={
          <LoaderCircle
            className={`flex-1 w-full text-blue-500 animate-spin`}
          />
        }
      >
        <BlogListContents searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default BlogListPageTemplate;
