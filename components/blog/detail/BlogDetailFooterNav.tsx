import React, { cache } from "react";
import { clsx } from "clsx";
import dayjs from "dayjs";
import Link from "next/link";
import getBlogNav from "@/libs/api/getBlogNav";

const getCacheBlogNav = cache(getBlogNav);

const BlogDetailFooterNav = async ({ id }: { id: string }) => {
  const [prev, next] = await getCacheBlogNav(id);

  return (
    <>
      <Link
        className="unset-cursor mt-12 font-sans font-light hover:text-theme hover:bg-sign transition-all duration-500"
        href={`/blog`}
      >
        ← go back to list
      </Link>
      <div className="w-full">
        {next && (
          <Link
            key="next"
            className={clsx(
              "relative px-2 py-1 flex justify-between",
              "w-full text-base cursor-pointer",
              "hover:bg-gray-500 hover:text-white transition-all duration-500",
            )}
            href={`/blog/${next.id}`}
          >
            <p>next</p>
            <p
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                max-w-50% lg:max-w-30%
                text-sm line-clamp-1 overflow-ellipsis`}
            >
              {next.title}
            </p>
            <p className="text-sm">
              {dayjs(next.createdAt).format("YYYY-MM-DD")}
            </p>
          </Link>
        )}
        {prev && (
          <Link
            key="prev"
            className={clsx(
              "relative px-2 py-1 flex justify-between",
              "w-full font-sans text-base cursor-pointer",
              "hover:bg-gray-500 hover:text-white transition-all duration-500",
            )}
            href={`/blog/${prev.id}`}
          >
            <p>prev</p>
            <p
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                max-w-50% lg:max-w-30%
                text-sm line-clamp-1 overflow-ellipsis`}
            >
              {prev.title}
            </p>
            <p className="text-sm">
              {dayjs(prev.createdAt).format("YYYY-MM-DD")}
            </p>
          </Link>
        )}
      </div>
    </>
  );
};

export default BlogDetailFooterNav;
