import Image from "next/image";
import { IBlogGetListItem } from "@/components/blog/types";
import dayjs from "dayjs";
import { cn, parseHTMLToString } from "@/libs/utils";
import Link from "next/link";
import { SQUARE_BASE_64_BLUR } from "@/libs/constants";
import { cache } from "react";
import {
  extractMermaidCode,
  getCategoryImgSrc,
  getImgSrc,
} from "@/components/blog/utils";
import MermaidParser from "@/components/blog/detail/MermaidParser";
import ParsedHTMLTag from "@/components/common/module/ParsedHTMLTag";

const cachedParseHTMLString = cache(parseHTMLToString);

interface IBlogListItemProps extends IBlogGetListItem {
  index: number;
}

const BlogListItem = async ({
  id,
  content,
  createdAt,
  title,
  categories,
  index,
}: IBlogListItemProps) => {
  const mermaidCode = extractMermaidCode(content);
  const rawPreview = mermaidCode ? content.replace(mermaidCode, "") : content;
  const preview = cachedParseHTMLString(rawPreview).slice(0, 200);

  return (
    <Link
      className={cn(
        "w-full",
        "group",
        "overflow-hidden",
        "transition-all duration-700",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "lg:px-2 lg:py-3",
        "border-b-2 border-secondary last-of-type:border-none",
      )}
      href={`/blog/${id}`}
    >
      <div
        className={cn(
          "relative",
          "flex flex-col items-center space-between gap-1",
          "w-full",
          "cursor-pointer",
          "lg:flex-row lg:gap-6 lg:items-stretch",
        )}
      >
        <div
          className={cn(
            "relative",
            "flex-shrink-0",
            "w-full h-[120px] ",
            "rounded-t overflow-hidden",
            "lg:rounded-t-none lg:border-none lg:flex-shrink lg:w-36 lg:h-36 lg:rounded-sm",
          )}
        >
          {
            // TODO ParsedHTMLTag, MermaidParser 사용성 개선
            !getImgSrc(content) && mermaidCode ? (
              <div className={`w-full h-full`}>
                <ParsedHTMLTag
                  html={mermaidCode}
                  className={cn(
                    "flex justify-center items-center",
                    "w-full h-full object-contain",
                    "bg-primary/30 [&_code]:bg-transparent [&_code]:text-transparent",
                  )}
                />
                <MermaidParser />
              </div>
            ) : (
              <Image
                src={getImgSrc(content) || getCategoryImgSrc(categories.name)}
                className={cn("object-cover")}
                key={`${id}_img`}
                fill={true}
                alt={title}
                priority={index < 3}
                placeholder={`blur`}
                sizes="300px, (min-width: 1024px) 196px"
                blurDataURL={SQUARE_BASE_64_BLUR}
              />
            )
          }
        </div>
        <div
          className={cn(
            "flex-1 max-h-80",
            "flex flex-col gap-4",
            "px-2.5 py-2",
          )}
        >
          <div>
            <h2
              className={cn(
                "text-lg font-medium",
                "line-clamp-1 text-ellipsis",
                "transition-all duration-500",
                "group-hover:underline group-hover:text-theme",
              )}
            >
              {title}
            </h2>
            <div
              className={cn(
                "flex justify-between flex-wrap w-full",
                "text-xs font-medium",
              )}
            >
              <div className="flex items-center">
                <p className="font-semibold">category:</p>
                <p className="ml-2">{categories.name}</p>
              </div>
              <p>{dayjs(createdAt).format("YYYY-MM-DD")}</p>
            </div>
          </div>
          <p
            className={cn(
              "text-xs",
              "line-clamp-2",
              "break-all leading-6",
              "lg:line-clamp-3",
            )}
          >
            {preview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
