import Link from "next/link";
import getBlogCategoryList from "@/libs/api/getBlogCategoryList";
import { headers } from "next/headers";

const BlogSideBar = async () => {
  const categories = await getBlogCategoryList();
  const headersList = headers();
  const referer = headersList.get("referer");
  const pathname = new URL(referer || "", `https://${headersList.get("host")}`)
    .pathname;

  const isEditor = pathname.includes("create") || pathname.includes("edit");

  return (
    <>
      {!isEditor && (
        <aside
          className={`
        flex flex-col items-stretch gap-5 
        w-full mb-12 flex-shrink-0 
        bg-white dark:bg-gray-950 scrollbar-hide
        lg:w-56 lg:pb-12 lg:sticky 
        lg:top-20 lg:h-[calc(100vh-4rem)]
        overflow-hidden
        `}
        >
          <div
            className="
        flex justify-between
        h-full overflow-y-auto
        scrollbar-hide
        "
          >
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
                    className={`flex flex-col items-start justify-center gap-2 
                    bg-white dark:bg-gray-950 break-all 
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
            </details>
          </div>
        </aside>
      )}
    </>
  );
};

export default BlogSideBar;
