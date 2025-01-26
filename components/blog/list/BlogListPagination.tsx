import React from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const BlogListPagination = ({
  searchParams: { page, category },
  hasNext = false,
}: {
  searchParams: Record<"page" | "category", string>;
  classNames?: string;
  hasNext?: boolean;
}) => {
  const pageNum = Number(page);

  return (
    <div
      className={cn(
        "flex items-center gap-5",
        pageNum === 1 ? "justify-end" : "justify-between",
        "w-full",
      )}
    >
      {!!page && pageNum !== 1 && (
        <Link
          className={cn(
            "flex items-center gap-1",
            "text-sm",
            "transition-colors duration-500 hover:underline hover:text-theme",
            "hover:animate-pulse",
            `after:content-["prev"]`,
          )}
          href={`/blog?page=${pageNum - 1}${category ? `&category=${category}` : ""}&prev=${pageNum - 1}`}
          prefetch={true}
        >
          <ChevronLeftIcon className={` `} />
        </Link>
      )}
      {!!page && hasNext && (
        <Link
          className={cn(
            "flex items-center gap-1",
            "text-sm",
            "transition-colors duration-500 hover:underline hover:text-theme",
            "hover:animate-pulse",
            'before:content-["next"]',
          )}
          href={`/blog?page=${pageNum + 1}${category ? `&category=${category}` : ""}&prev=${page !== "1" ? pageNum - 1 : 1}`}
          prefetch={true}
        >
          <ChevronRightIcon />
        </Link>
      )}
    </div>
  );
};

export default BlogListPagination;
