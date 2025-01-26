import React, { memo } from "react";
import { cn } from "@/libs/utils";
import BlogListPagination from "@/components/blog/list/BlogListPagination";
import ListItemFallback from "@/components/blog/list/ListItemFallback";

const ListFallback = () => {
  return (
    <div
      className={cn("flex flex-col", "lg:flex-row lg:gap-3", "fade-out-100")}
    >
      <div
        className={cn(
          "flex flex-col gap-12",
          "w-full px-4",
          "tablet:gap-8",
          "transition-colors duration-500",
        )}
      >
        <BlogListPagination
          searchParams={{ page: "1", category: "" }}
          hasNext={true}
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <ListItemFallback key={`list-loading-fallback-${i}`} />
        ))}
        <BlogListPagination
          searchParams={{ page: "1", category: "" }}
          hasNext={true}
        />
      </div>
    </div>
  );
};

export default memo(ListFallback);
