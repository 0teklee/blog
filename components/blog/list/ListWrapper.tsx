import React from "react";
import { cn } from "@/libs/utils";

interface ListWrapperProps {
  children: React.ReactNode;
  searchParams?: {
    page?: string;
    category?: string;
    prev?: string;
  };
}

const ListWrapper = ({ children, searchParams }: ListWrapperProps) => {
  const currentPage = Number(searchParams?.page || "1");
  const prevPage = Number(searchParams?.prev || "0");

  const isInitialPage = !searchParams?.prev;
  const isForward = isInitialPage || currentPage > prevPage;

  return (
    <div
      className={cn(
        "flex flex-col gap-12",
        "w-full px-4",
        "tablet:gap-8",
        "w-full",
        "duration-700 animate-in ease-in-out",
        isForward
          ? "motion-safe:slide-in-from-right"
          : "motion-safe:slide-in-from-left",
        "motion-reduce:transition-none motion-reduce:animate-none",
      )}
    >
      {children}
    </div>
  );
};

export default ListWrapper;
