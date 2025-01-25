import React from "react";
import Link from "next/link";
import getBlogCategoryList from "@/libs/api/getBlogCategoryList";

const BlogSideBarList = async () => {
  const categories = await getBlogCategoryList();

  return (
    <>
      {categories &&
        categories.length > 0 &&
        categories.map((category) => (
          <details
            key={`${category.name}_wrapper`}
            className={`flex flex-col items-start justify-center gap-2 
                    bg-background break-all 
                    scrollbar-hide overflow-y-scroll 
                    `}
          >
            <summary
              className={`
                    flex justify-between w-full 
                    cursor-pointer py-2 hover:text-blue-500 
                    `}
            >
              <span>{category.name}</span>
              <span>▾</span>
            </summary>
            {category?.posts?.map((blog, i) => (
              <Link
                key={`${category.name}_subwrapper_${i}`}
                className={`
                      w-full pl-2 pr-3 py-1 text-sm 
                      lg:pl-2 lg:text-md 
                      overflow-y-hidden rounded
                      text-left line-clamp-2 overflow-ellipsis
                      hover:bg-blue-500 hover:text-white
                      transition-color duration-300
                      last:mb-4
                      `}
                href={`/blog/${blog.id}`}
              >
                - {blog.title}
              </Link>
            ))}
            {category?.posts && category?.posts.length >= 10 && (
              <div
                className={`mt-2 mb-4 text-left hover:text-blue-500 transition-color duration-300`}
              >
                <Link href={`/blog?page=1&category=${category.name}`}>
                  ...more
                </Link>
              </div>
            )}
          </details>
        ))}
    </>
  );
};

export default BlogSideBarList;
