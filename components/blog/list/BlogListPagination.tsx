import React from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const BlogListPagination = ({
  searchParams,
  hasNext = false,
}: {
  searchParams: { [key: string]: string };
  classNames?: string;
  hasNext?: boolean;
}) => (
  <div
    className={cn(
      "flex items-center gap-5",
      Number(searchParams?.page) === 1 ? "justify-end" : "justify-between",
      "w-full",
    )}
  >
    {!!searchParams?.page && Number(searchParams?.page) !== 1 && (
      <Link
        className={cn(
          "flex items-center gap-1",
          "text-sm",
          "transition-colors duration-500 hover:underline hover:text-blue-700",
          "hover:animate-pulse",
          `after:content-["prev"]`,
        )}
        href={`/blog?page=${Number(searchParams?.page) - 1}${searchParams?.category ? `&category=${searchParams?.category}` : ""}`}
        prefetch={true}
      >
        <ChevronLeftIcon className={` `} />
      </Link>
    )}
    {!!searchParams?.page && hasNext && (
      <Link
        className={cn(
          "flex items-center gap-1",
          "text-sm",
          "transition-colors duration-500 hover:underline hover:text-blue-700",
          "hover:animate-pulse",
          'before:content-["next"]',
        )}
        href={`/blog?page=${Number(searchParams?.page) + 1}${searchParams?.category ? `&category=${searchParams?.category}` : ""}`}
        prefetch={true}
      >
        <ChevronRightIcon />
      </Link>
    )}
  </div>
);

export default BlogListPagination;
