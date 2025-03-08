import { createPortal } from "react-dom";
import { BlogPost, TooltipPosition } from "./types";
import { cn } from "@/libs/utils";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useMount } from "@/libs/hooks/useMount";

type TooltipProps = {
  hoveredPost: BlogPost | null;
  position: TooltipPosition;
  isTooltipOpen: boolean;
  onClose: () => void;
};

export function TooltipPortal({
  hoveredPost,
  position,
  isTooltipOpen,
  onClose,
}: TooltipProps) {
  const { isMounted } = useMount();

  if (!isMounted) return null;

  const isCategory =
    !!hoveredPost && "isCategory" in hoveredPost && !!hoveredPost?.isCategory;
  const href = isCategory
    ? `/blog?page=1&category=${hoveredPost?.title || ""}`
    : `/blog/${hoveredPost?.id || ""}`;

  return createPortal(
    <>
      {hoveredPost && !isTooltipOpen && (
        <p
          className={cn(
            "fixed z-10",
            "px-2 py-1 bg-background",
            "rounded-lg",
            "text-white text-sm",
            "animate-pulse",
          )}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          Click
        </p>
      )}
      {!hoveredPost || !isTooltipOpen ? null : (
        <div
          className={cn(
            "fixed z-10",
            "flex flex-col items-start justify-start gap-4",
            "w-full max-w-36 sm:max-w-64 h-fit -mt-24 px-3 py-2",
            "bg-gray-800 rounded-lg shadow-lg",
            "text-white text-sm",
            "pointer-events-auto",
            "-translate-x-1/2 -translate-y-1/2",
          )}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <button className="sm:absolute right-2 top-2" onClick={onClose}>
            <XIcon className="w-6 h-6 sm:w-4 sm:h-4 text-white" />
          </button>
          <div className="w-full text-start space-y-1">
            <div className="text-xs sm:text-base sm:font-bold mb-1">
              {hoveredPost.title}
            </div>
            <div
              className={`flex flex-wrap items-center justify-between text-xs`}
            >
              {hoveredPost.category && !isCategory && (
                <div className="flex items-center flex-wrap gap-2">
                  <p className={"font-medium"}>category:</p>
                  <p>{hoveredPost.category.name}</p>
                </div>
              )}
              <p>{new Date(hoveredPost.createdAt).toLocaleDateString()}</p>
            </div>
            {isCategory && hoveredPost?.postCount && (
              <p className={"text-xs"}>{hoveredPost.postCount} Posts</p>
            )}
          </div>
          {hoveredPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 items-center text-xs">
              <span>Tags: </span>
              {hoveredPost.tags.map((tag) => (
                <span
                  key={tag}
                  className={`last:after:hidden after:content-[","]`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Link
            className="text-sm leading-relaxed underline hover:text-theme"
            href={href}
          >
            Go to Read
          </Link>
        </div>
      )}
    </>,

    document.body,
  );
}
