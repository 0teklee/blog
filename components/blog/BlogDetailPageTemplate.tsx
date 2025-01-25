import React, { Suspense } from "react";

import dayjs from "dayjs";
import ParsedHTMLTag from "components/common/module/ParsedHTMLTag";
import { clsx } from "clsx";
import BlogDetailFooterNav from "@/components/blog/BlogDetailFooterNav";
import getBlogDetail from "@/libs/api/getBlogDetail";
import { formatBlogContent } from "@/components/blog/utils";
import { notFound } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import BlogHeadingNav from "@/components/blog/BlogHeadingNav";

const BlogDetailPageTemplate = async ({ id }: { id: string }) => {
  const post = await getBlogDetail(id);

  if (!post || !post.detail) {
    notFound();
  }

  const { detail, nav } = post;
  const { content, createdAt, id: postId, title, categories } = detail;
  const updatedContent = formatBlogContent(content);

  return (
    <>
      <div
        className={clsx(
          "flex flex-col w-full gap-3",
          " lg:items-center lg:py-5 lg:flex-grow lg:pt-0 lg:max-w-2xl",
        )}
      >
        <div className="w-full">
          <h1 className="w-full mb-4 font-sans text-5xl break-all">{title}</h1>
          <div className="flex justify-between w-full mt-4 font-semibold text-base">
            <p>{dayjs(createdAt).format("YYYY/MM/DD")}</p>
            <p>{`n°${id}`}</p>
          </div>
          <div className="flex justify-between w-full mt-12 mb-12 font-semibold text-sm text-gray-500 wrap">
            <p>category : {categories.name}</p>
          </div>
        </div>
        <div className="relative blog-post-content">
          <Suspense
            fallback={
              <div className={`flex justify-center items-center w-full`}>
                <LoaderCircle className={`pt-2 text-gray-300 animate-spin`} />
              </div>
            }
          >
            <ParsedHTMLTag html={updatedContent} />
          </Suspense>
        </div>
        <BlogDetailFooterNav nav={nav} id={Number(id)} />
      </div>
      <BlogHeadingNav content={content} />
    </>
  );
};

export default BlogDetailPageTemplate;
