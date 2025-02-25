import React from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { IBlogGetCategorySideBar } from "@/components/blog/types";

const getBlogCategoryList = async (): Promise<IBlogGetCategorySideBar[]> => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blog/categories`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const BlogSideBarList = async () => {
  const categories = await getBlogCategoryList();
  return (
    <>
      {categories.length > 0 &&
        categories.map((category, index) => (
          <details
            key={`${category.name}_wrapper`}
            className={cn(
              "flex flex-col items-stretch justify-center gap-2",
              "w-full bg-background break-all",
              "scrollbar-hide overflow-y-scroll",
              "group/child",
              "transition-opacity duration-800 ease-in-out",
              "opacity-0 group-open/parent:opacity-100",
            )}
          >
            <summary
              className={cn(
                "flex justify-between w-full ",
                "cursor-pointer py-2 hover:text-theme ",
                "after:transition-all after:duration-300",
                `after:content-["▾"]`,
                "after:group-open/child:rotate-180",
              )}
            >
              <span>{category.name}</span>
            </summary>
            <div
              className={cn(
                "grid grid-rows-[0fr]",
                "group-open/child:animate-expand",
                "group-[&:not([open])]/child:animate-collapse",
                "transition-all duration-500 ease-in-out",
                "opacity-0 group-open/child:opacity-100",
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-2 w-full p-0",
                  "overflow-hidden",
                )}
              >
                {category.posts.map((blog, i) => (
                  <Link
                    key={`${category.name}_sub_wrapper_${i}`}
                    className={cn(
                      "flex w-full pl-2 pr-3 py-1",
                      "text-sm lg:pl-2 lg:text-md",
                      "overflow-y-hidden rounded",
                      "text-left line-clamp-2 overflow-ellipsis",
                      "transition-colors duration-200",
                      "hover:bg-theme hover:text-background",
                      "last:mb-4",
                    )}
                    href={`/blog/${blog.id}`}
                  >
                    - {blog.title}
                  </Link>
                ))}
                {category?.posts && category?.posts.length >= 10 && (
                  <div className={`mt-2 mb-4 text-left`}>
                    <Link href={`/blog?page=1&category=${category.name}`}>
                      ...more
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </details>
        ))}
    </>
  );
};

export default BlogSideBarList;
