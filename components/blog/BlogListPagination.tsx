import React from "react";
import { clsx } from "clsx";
import Link from "next/link";

const BlogListPagination = ({
  searchParams,
  hasNext = false,
}: {
  searchParams: { [key: string]: string };
  hasNext?: boolean;
}) => (
  <div
    className={clsx(
      "flex justify-center items-center mt-20 py-12",
      "bg-white text-black",
      "dark:bg-gray-950 dark:text-neutral-50",
    )}
  >
    {!!searchParams?.page && Number(searchParams?.page) !== 1 && (
      <Link
        className={clsx(
          "mx-8 text-sm",
          "hover:underline hover:text-blue-500",
          "dark:hover:text-[#d2ef4f]",
        )}
        href={`/blog?page=${Number(searchParams?.page) - 1}${searchParams?.category ? `&category=${searchParams?.category}` : ""}`}
      >
        prev
      </Link>
    )}
    {!!searchParams?.page && hasNext && (
      <Link
        className={clsx(
          "mx-8 text-sm",
          "hover:underline hover:text-blue-500",
          "dark:hover:text-[#d2ef4f]",
        )}
        href={`/blog?page=${Number(searchParams?.page) + 1}${searchParams?.category ? `&category=${searchParams?.category}` : ""}`}
      >
        next
      </Link>
    )}
  </div>
);

export default BlogListPagination;
