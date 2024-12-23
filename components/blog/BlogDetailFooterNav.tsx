"use client";

import React from "react";
import { clsx } from "clsx";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const BlogDetailFooterNav = ({
  id,
  nav: [prev, next],
}: {
  nav: ({
    createdAt: Date;
    id: number;
    title: string;
    content: string;
    categories: { name: string };
  } | null)[];
  id: number;
}) => {
  const router = useRouter();

  return (
    <>
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
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetailFooterNav;
