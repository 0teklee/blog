import React, { cache } from "react";
import getBlogList from "@/libs/api/getBlogList";
import BlogListItem from "@/components/blog/list/BlogListItem";
import BlogListPagination from "@/components/blog/list/BlogListPagination";
import { cn } from "@/libs/utils";

const cachedGetBlogList = cache(getBlogList);

const BlogListContents = async ({
  searchParams,
}: {
  searchParams?: { page: string; category: string };
}) => {
  const { page, category } = searchParams || { page: "1", category: "" };
  const { posts, has_next_page } = await cachedGetBlogList(page, category);
  return (
    <div className={cn("flex flex-col", "lg:flex-row lg:gap-3")}>
      <div
        className={cn(
          "flex flex-col gap-12",
          "w-full px-4",
          "tablet:gap-8",
          "transition-colors duration-500",
        )}
      >
        {searchParams && (
          <BlogListPagination
            searchParams={searchParams}
            hasNext={has_next_page}
          />
        )}
        {posts.length === 0 && (
          <h1 className="mb-16 text-center font-sans lg:mb-28">No Posts Yet</h1>
        )}
        {posts.map((item, i) => (
          <BlogListItem
            content={item.content}
            title={item.title}
            id={item.id}
            createdAt={item.createdAt}
            key={`BlogListItem_${i}`}
            categories={item.categories}
            index={i}
          />
        ))}
        {searchParams && (
          <BlogListPagination
            searchParams={searchParams}
            hasNext={has_next_page}
          />
        )}
      </div>
    </div>
  );
};

export default BlogListContents;
