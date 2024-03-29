"use client";

import parsedHTMLTag from "components/common/module/ParsedHTMLTag";
import { useRouter } from "next/navigation";
import { formatBlogContent } from "./utils";
import { clsx } from "clsx";
import dayjs from "dayjs";

interface IProps {
  content: string;
  createdAt: string;
  id: number;
  title: string;
  category: string;
  nav: {
    id: number;
    createdAt: string;
    title: string;
  }[];
}

const BlogDetailPageTemplate = ({
  content,
  createdAt,
  id,
  title,
  category,
  nav,
}: IProps) => {
  const [prev, next] = nav;
  const router = useRouter();
  const updatedContent = formatBlogContent(content);

  return (
    <div className={clsx("flex flex-col w-full gap-3", "lg:flex-row")}>
      {/*<BlogSideBar categories={categories} />*/}
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-5",
          "lg:py-5 lg:pr-12",
        )}
      >
        <div className="w-full">
          <h1 className="w-full mb-4 font-sans text-5xl break-all 500px:text-3xl">
            {title}
          </h1>
          <div className="flex justify-between w-full mt-4 font-semibold text-base">
            <p>{dayjs(createdAt).format("YYYY/MM/DD")}</p>
            <p>{`n°${id}`}</p>
          </div>
          <div className="flex justify-between w-full mt-12 mb-12 font-semibold text-sm text-gray-500 wrap">
            <p>category : {category}</p>
          </div>
        </div>
        <div className="blog-post-content">
          {updatedContent ? parsedHTMLTag(updatedContent) : <p>Loading...</p>}
        </div>
        <button
          className="unset-cursor mt-12 font-sans font-light hover:text-blue-500 hover:bg-sign transition-all duration-500"
          onClick={() => router.push("/blog?page=1")}
        >
          ← go back to list
        </button>
        <div className="w-full">
          {next && (
            <div
              key="next"
              className={clsx(
                "relative px-2 py-1 flex justify-between",
                "w-full text-base cursor-pointer",
                "hover:bg-gray-500 hover:text-white transition-all duration-500",
              )}
              onClick={() => router.push(`/blog/${next.id}`)}
            >
              <p>next</p>
              <p className="absolute top-1/2 left-1/2 max-w-50% -translate-x-1/2 -translate-y-1/2 500px:text-sm 500px:max-w-30%">
                {nav[1].title}
              </p>
              <p className="text-sm">
                {dayjs(nav[1].createdAt).format("YYYY-MM-DD")}
              </p>
            </div>
          )}
          {prev && (
            <div
              key="prev"
              className={clsx(
                "relative px-2 py-1 flex justify-between",
                "w-full font-sans text-base cursor-pointer",
                "hover:bg-gray-500 hover:text-white transition-all duration-500",
              )}
              onClick={() => router.push(`/blog/${prev.id}`)}
            >
              <p>{id < prev.id ? "next" : "prev"}</p>
              <p className="absolute top-1/2 left-1/2 max-w-50% -translate-x-1/2 -translate-y-1/2 500px:text-sm 500px:max-w-30%">
                {nav[0].title}
              </p>
              <p className="text-sm">
                {dayjs(nav[0].createdAt).format("YYYY-MM-DD")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPageTemplate;
