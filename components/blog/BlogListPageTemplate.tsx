import BlogListItem from "components/blog/BlogListItem";
import { IBlogGetListItem } from "@/components/blog/types";
import { clsx } from "clsx";
import BlogListPagination from "./BlogListPagination";

const BlogListPageTemplate = ({
  posts,
  searchParams,
}: {
  posts?: IBlogGetListItem[];
  searchParams: { [key: string]: string };
}) => {
  return (
    <div className="relative">
      <h1 className={clsx("mb-16 text-center")}>
        {searchParams?.page ? "Blog" : null}
        {searchParams?.category ? posts?.[0]?.categories?.name : null}
      </h1>
      <div className={clsx("flex flex-col", "lg:flex-row lg:gap-3")}>
        <div
          className={clsx(
            "flex flex-col gap-12",
            "w-full px-4",
            "text-black dark:text-white",
            "tablet:gap-8 tablet:pr-12 xl:pr-32",
            "dark:hover:text-[#d2ef4f] transition-colors duration-500",
          )}
        >
          {!posts && (
            <h1 className="mb-16 text-center font-sans lg:mb-28">
              No Posts Yet
            </h1>
          )}
          {posts &&
            posts.map((item, i) => (
              <BlogListItem
                content={item.content}
                title={item.title}
                id={item.id}
                createdAt={item.createdAt}
                key={`BlogListItem_${i}`}
                categories={item.categories}
              />
            ))}
          <BlogListPagination searchParams={searchParams} posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default BlogListPageTemplate;
