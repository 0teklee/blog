import React, { cache } from "react";
// import getBlogList from "@/libs/api/getBlogList";
import { cn } from "@/libs/utils";
import { IBlogGetListResponse } from "@/components/blog/types";

const getBlogList = async (
  page: string,
  category: string,
): Promise<IBlogGetListResponse> => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/blog/list?page=${page}${category ? `&category=${category}` : ""}`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return { posts: [], has_next_page: false };
  }
};

const cachedGetBlogList = cache(getBlogList);

const BlogListContents = async ({
  searchParams,
}: {
  searchParams?: { page: string; category: string; prev?: string };
}) => {
  const { page, category } = searchParams || { page: "1", category: "" };
  // const { posts, has_next_page } = await getBlogList(page, category);

  return (
    <div className={cn("flex flex-col", "lg:flex-row lg:gap-3")}>
      <div
        className={cn(
          "flex flex-col gap-12",
          "w-full px-4",
          "tablet:gap-8",
          "transition-all duration-500 ease-in-out",
          "overflow-x-hidden",
        )}
      >
        {/*{searchParams && (*/}
        {/*  <BlogListPagination*/}
        {/*    searchParams={searchParams}*/}
        {/*    hasNext={has_next_page}*/}
        {/*  />*/}
        {/*)}*/}
        {/*{posts?.length === 0 && (*/}
        {/*  <h1 className="mb-16 text-center font-sans lg:mb-28">No Posts Yet</h1>*/}
        {/*)}*/}
        {/*<ListWrapper*/}
        {/*  key={`${searchParams?.page || ""}${searchParams?.category || ""}`}*/}
        {/*  searchParams={searchParams}*/}
        {/*>*/}
        {/*  {posts?.map((item, i) => (*/}
        {/*    <BlogListItem {...item} key={`BlogListItem_${i}`} index={i} />*/}
        {/*  ))}*/}
        {/*</ListWrapper>*/}
        {/*{searchParams && (*/}
        {/*  <BlogListPagination*/}
        {/*    searchParams={searchParams}*/}
        {/*    hasNext={has_next_page}*/}
        {/*  />*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default BlogListContents;
