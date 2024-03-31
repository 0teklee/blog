"use client";

import React from "react";
import { clsx } from "clsx";
import { IBlogGetListItem } from "@/components/blog/types";
import Link from "next/link";

const BlogListPagination = ({
  searchParams,
  posts,
}: {
  searchParams: { [key: string]: string };
  posts?: IBlogGetListItem[];
}) => (
  <div
    className={clsx(
      "flex justify-center items-center mt-20 mb-12",
      "bg-white text-black",
      "dark:bg-[#22252b] dark:text-white",
    )}
  >
    {!!searchParams?.page && Number(searchParams?.page) !== 1 && (
      <Link
        className={clsx(
          "mx-8 text-sm",
          "hover:underline hover:text-blue-500",
          "dark:hover:text-[#d2ef4f]",
        )}
        href={`/blog?page=${Number(searchParams?.page) - 1}`}
      >
        prev
      </Link>
    )}
    {!!searchParams?.page && posts && posts[posts.length - 1]?.id !== 1 && (
      <Link
        className={clsx(
          "mx-8 text-sm",
          "hover:underline hover:text-blue-500",
          "dark:hover:text-[#d2ef4f]",
        )}
        href={`/blog?page=${Number(searchParams?.page) + 1}`}
      >
        next
      </Link>
    )}
  </div>
);

export default BlogListPagination;
