import Link from "next/link";
import getBlogCategoryList from "@/pages/api/getBlogCategoryList";
import { cache } from "react";

const getBlogCategoryListCache = cache(getBlogCategoryList);

const BlogSideBar = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const categories = await getBlogCategoryListCache();

  const categoryParam = searchParams?.category || "";

  return (
    <aside
      className={`
        flex flex-col items-stretch gap-5 
        w-full mb-12 flex-shrink-0 
        bg-white dark:bg-gray-950 scrollbar-hide
        lg:w-56 lg:pb-12 lg:sticky 
        lg:top-20 lg:h-[calc(100vh-4rem)]`}
    >
      <div className="flex justify-between">
        <details className={`w-full group blog-sidebar`}>
          <summary
            className={`
            flex justify-between
            w-full pb-2 
            text-lg font-normal font-sans 
            cursor-pointer 
            hover:text-blue-500 group-open:text-blue-500
            after:transition-all after:duration-300
            after:content-["⇣"]
            after:group-open:rotate-180
            open:text-blue-500
            list-outside 
            `}
          >
            <span>categories</span>
          </summary>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <details
                key={`${category.name}_wrapper`}
                className="flex flex-col items-start justify-center gap-5 bg-white dark:bg-gray-950 break-all blog-sidebar"
              >
                <summary
                  className={`
                    flex justify-between w-full 
                    cursor-pointer py-2 hover:text-blue-500 
                    transition-all duration-300
                    `}
                >
                  <span
                    className={`${categoryParam === category.name && "font-semibold"}`}
                  >
                    {category.name}
                  </span>
                  <span>▾</span>
                </summary>
                {category?.posts?.map((blog, i) => (
                  <Link
                    key={`${category.name}_subwrapper_${i}`}
                    className={`
                      w-full pl-2 text-sm 
                      lg:pl-2 lg:text-md 
                      overflow-y-hidden 
                      hover:bg-blue-500 hover:text-white 
                      transition-all duration-300
                      `}
                    href={`/blog/${blog.id}`}
                  >
                    <button className="w-full py-2 text-left line-clamp-2 overflow-ellipsis">
                      - {blog.title}
                    </button>
                  </Link>
                ))}
                {category?.posts && category?.posts.length >= 10 && (
                  <Link
                    className="flex flex-col items-start justify-start w-full pl-2 pt-3 text-0.8rem"
                    href={`/blog?category=${category.name}`}
                  >
                    <button className="w-full mt-2 text-left hover:text-blue-500 transition-colors duration-300">
                      .....more
                    </button>
                  </Link>
                )}
              </details>
            ))}
        </details>
      </div>
    </aside>
  );
};

export default BlogSideBar;
