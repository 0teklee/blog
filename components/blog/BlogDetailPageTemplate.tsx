import ParsedHTMLTag from "components/common/module/ParsedHTMLTag";
import { formatBlogContent } from "./utils";
import { clsx } from "clsx";
import dayjs from "dayjs";
import React, { Suspense } from "react";
import BlogDetailFooterNav from "@/components/blog/BlogDetailFooterNav";
import { IBlogGetListItem } from "@/components/blog/types";
import Loading from "@/components/common/Loading";

interface IProps {
  content: string;
  createdAt: string;
  id: number;
  title: string;
  category: string;
  nav: (IBlogGetListItem | null)[];
}

const BlogDetailPageTemplate = ({
  content,
  createdAt,
  id,
  title,
  category,
  nav,
}: IProps) => {
  const updatedContent = formatBlogContent(content);

  return (
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
          <p>category : {category}</p>
        </div>
      </div>
      <div className="relative blog-post-content">
        <Suspense fallback={<Loading style={`w-full`} />}>
          <ParsedHTMLTag html={updatedContent} />
        </Suspense>
      </div>
      <BlogDetailFooterNav nav={nav} id={id} />
    </div>
  );
};

export default BlogDetailPageTemplate;
