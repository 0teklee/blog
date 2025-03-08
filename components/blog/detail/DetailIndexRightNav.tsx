"use client";

import React, { lazy, Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { cn } from "@/libs/utils";
import { useMount } from "@/libs/hooks/useMount";

const TableContentIndex = lazy(
  () => import("@/components/blog/detail/TableContentIndex"),
);

const BlogHeadingNavContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isMounted, isWindowLoaded } = useMount();

  const containerElement = isWindowLoaded
    ? document.getElementById("left-nav-portal")
    : null;

  return isMounted
    ? createPortal(
        <AnimatePresence initial={false} mode="sync">
          <div
            className={cn(
              "sticky right-0 top-20 shrink-0",
              "lg:grid grid-cols-16",
              "hidden w-64 h-[50vh] overflow-hidden",
            )}
          >
            {children}
          </div>
        </AnimatePresence>,
        containerElement ?? document.body,
      )
    : null;
};

const DetailIndexRightNav = ({ content }: { content: string }) => {
  return (
    <BlogHeadingNavContainer>
      <Suspense
        fallback={
          <nav className="h-full overflow-y-auto scrollbar-hide blog-table-content pb-5">
            <div className={`flex justify-center py-4`}>
              <LoaderCircle className={`text-gray-300 animate-spin`} />
            </div>
          </nav>
        }
      >
        <TableContentIndex content={content} />
      </Suspense>
    </BlogHeadingNavContainer>
  );
};

export default DetailIndexRightNav;
