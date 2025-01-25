"use client";

import { lazy, Suspense } from "react";
import { LoaderCircle } from "lucide-react";

const BlogTableContent = lazy(
  () => import("@/components/blog/BlogTableContent"),
);

const BlogHeadingNav = ({ content }: { content: string }) => {
  return (
    <Suspense
      fallback={
        <aside className="hidden lg:block lg:w-64 shrink-0 sticky top-20 h-[50vh] overflow-hidden">
          <nav className="h-full overflow-y-auto scrollbar-hide blog-table-content pb-5">
            <h1 className={`font-bold`}>Table of Content</h1>
            <div className={`flex justify-center py-4`}>
              <LoaderCircle className={`text-gray-300 animate-spin`} />
            </div>
          </nav>
        </aside>
      }
    >
      <BlogTableContent content={content} />
    </Suspense>
  );
};

export default BlogHeadingNav;
