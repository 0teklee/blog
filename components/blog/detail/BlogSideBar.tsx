import React, { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import BlogSideBarList from "@/components/blog/detail/BlogSideBarList";
import { cn } from "@/libs/utils";

const BlogSideBar = ({ className }: { className?: string }) => {
  return (
    <aside
      className={cn(
        "flex flex-col items-stretch gap-5",
        "w-full mb-12 flex-shrink-0",
        "bg-background scrollbar-hide",
        "lg:pb-12 lg:sticky",
        "lg:top-20 lg:h-[calc(100vh-4rem)]",
        "overflow-hidden",
        className,
      )}
    >
      <div
        className="
        flex justify-between
        h-full overflow-y-auto
        scrollbar-hide
        "
      >
        <details className={`w-full group/parent blog-sidebar`}>
          <summary
            className={`
            flex justify-between
            w-full pb-2 
            text-lg font-normal font-sans 
            cursor-pointer 
            hover:text-theme group-open:text-theme
            after:transition-all after:duration-300
            after:content-["⇣"]
            after:group-open/parent:rotate-180
            group-open/parent:text-theme
            list-outside 
            `}
          >
            <span>categories</span>
          </summary>
          <Suspense
            fallback={
              <LoaderCircle className={`pt-2 text-gray-300 animate-spin`} />
            }
          >
            <BlogSideBarList />
          </Suspense>
        </details>
      </div>
    </aside>
  );
};

export default BlogSideBar;
