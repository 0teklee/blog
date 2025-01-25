import React, { cache } from "react";
import getBlogList from "@/libs/api/getBlogList";
import { clsx } from "clsx";
import BlogListItem from "@/components/blog/BlogListItem";
import BlogListPagination from "@/components/blog/BlogListPagination";

const cachedGetBlogList = cache(getBlogList);

const BlogListContents = async ({
  searchParams,
}: {
  searchParams?: { page: string; category: string };
}) => {
  const { page, category } = searchParams || { page: "1", category: "" };
  const { posts, has_next_page } = await cachedGetBlogList(page, category);
  return (
    <div className={clsx("flex flex-col", "lg:flex-row lg:gap-3")}>
      <div
        className={clsx(
          "flex flex-col gap-12",
          "w-full px-4",
          "tablet:gap-8 tablet:pr-12 xl:pr-32",
          "transition-colors duration-500",
        )}
      >
        {!posts && (
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
