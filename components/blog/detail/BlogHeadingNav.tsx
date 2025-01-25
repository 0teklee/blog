"use client";

import React, { lazy, Suspense, useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { cn } from "@/libs/utils";

const BlogTableContent = lazy(
  () => import("@/components/blog/detail/BlogTableContent"),
);

const BlogHeadingNavContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const containerElement =
    typeof window !== "undefined"
      ? document.getElementById("left-nav-portal")
      : null;

  return createPortal(
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
  );
};

const BlogHeadingNav = ({ content }: { content: string }) => {
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
        <BlogTableContent content={content} />
      </Suspense>
    </BlogHeadingNavContainer>
  );
};

export default BlogHeadingNav;
