import React from "react";
import BlogListItem from "@/components/blog/list/BlogListItem";
import ListWrapper from "@/components/blog/list/ListWrapper";
import { getParsedGithubBlogList } from "@/libs/api/github";

const BlogListContents = async () => {
  const posts = await getParsedGithubBlogList();

  // If searchParams were actually functional, we could map it here, but next.js static export
  // doesn't support dynamic searchParams unless we use `generateStaticParams`.
  // We will just show all posts for the static export or handle pagination purely on client.
  // For now, let's just render all of them.

  return (
    <div className="flex flex-col lg:flex-row lg:gap-3">
      <div className="flex flex-col gap-12 w-full px-4 tablet:gap-8 transition-all duration-500 ease-in-out overflow-x-hidden">
        {posts?.length === 0 && (
          <h1 className="mb-16 text-center font-sans lg:mb-28">No Posts Yet</h1>
        )}
        <ListWrapper>
          {posts?.map((item, i) => (
            <BlogListItem {...item} key={item.id} index={i} />
          ))}
        </ListWrapper>
      </div>
    </div>
  );
};

export default BlogListContents;
