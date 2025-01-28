import React, { cache } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import getBlogNav from "@/libs/api/getBlogNav";
import { cn } from "@/libs/utils";

const getCacheBlogNav = cache(getBlogNav);

const BlogDetailFooterNav = async ({ id }: { id: string }) => {
  const [prev, next] = await getCacheBlogNav(id);
  return (
    <footer className={`w-full`}>
      <nav className={"relative flex flex-col items-center "}>
        <Link
          className={cn(
            "unset-cursor",
            "mt-12 p-2",
            "font-sans font-light",
            "transition-all duration-500",
            "hover:text-theme hover:animate-pulse",
            `before:absolute before:left-1/3 before:content-["←"] before:mr-1`,
          )}
          href={`/blog`}
        >
          go back to list
        </Link>
        <div className="w-full">
          {next && (
            <Link
              key="next"
              className={cn(
                "relative px-2 py-1 flex justify-between",
                "w-full cursor-pointer",
                "hover:bg-theme hover:text-background transition-all duration-500",
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
              className={cn(
                "relative px-2 py-1 flex justify-between",
                "w-full cursor-pointer",
                "hover:bg-theme hover:text-background transition-all duration-500",
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
      </nav>
    </footer>
  );
};

export default BlogDetailFooterNav;
