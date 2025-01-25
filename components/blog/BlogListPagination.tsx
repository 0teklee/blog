import React from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";

const BlogListPagination = ({
  searchParams,
  hasNext = false,
}: {
  searchParams: { [key: string]: string };
  hasNext?: boolean;
}) => (
  <div className={cn("flex justify-center items-center mt-20 py-12")}>
    {!!searchParams?.page && Number(searchParams?.page) !== 1 && (
      <Link
        className={cn("mx-8 text-sm", "hover:underline hover:text-blue-500")}
        href={`/blog?page=${Number(searchParams?.page) - 1}${searchParams?.category ? `&category=${searchParams?.category}` : ""}`}
      >
        prev
      </Link>
    )}
    {!!searchParams?.page && hasNext && (
      <Link
        className={cn("mx-8 text-sm", "hover:underline hover:text-blue-500")}
        href={`/blog?page=${Number(searchParams?.page) + 1}${searchParams?.category ? `&category=${searchParams?.category}` : ""}`}
      >
        next
      </Link>
    )}
  </div>
);

export default BlogListPagination;
