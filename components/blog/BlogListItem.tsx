"use client";

import Image from "next/image";
import { IBlogGetListItem } from "types/IBlogItem";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import dayjs from "dayjs";
import {
  getContentImg,
  htmlReplace,
  setCategoryPresetImg,
} from "libs/utils/utils";

const BlogListItem = ({
  id,
  content,
  createdAt,
  title,
  categories,
}: IBlogGetListItem) => {
  const router = useRouter();
  const contentReplace = htmlReplace(content);
  return (
    <section
      className={clsx(
        "w-full",
        "group",
        "overflow-hidden",
        "transition-all duration-700",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "tablet:px-2 tablet:py-3",
      )}
      onClick={() => router.push(`/blog/${id}`)}
    >
      <div
        className={clsx(
          "relative",
          "flex flex-col items-center space-between gap-1",
          "w-full",
          "cursor-pointer",
          "tablet:flex-row tablet:gap-12",
        )}
      >
        <div
          className={clsx(
            "relative",
            "flex-shrink-0",
            "w-full h-[120px]",
            "rounded-t overflow-hidden",
            "tablet:rounded-t-none tablet:border-none tablet:w-44 tablet:flex-shrink tablet:h-44",
          )}
        >
          <Image
            src={
              getContentImg(content) || setCategoryPresetImg(categories.name)
            }
            className={clsx("object-cover")}
            key={`${id}_img`}
            fill={true}
            alt={title}
            priority
          />
        </div>
        <div className={clsx("flex-1 max-h-80", "flex flex-col gap-4")}>
          <div>
            <h2
              className={clsx(
                "text-lg font-medium",
                "line-clamp-1 text-ellipsis",
                "transition-all duration-500",
                "group-hover:underline group-hover:text-blue-500",
              )}
            >
              {title}
            </h2>
            <div
              className={clsx(
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
            className={clsx(
              "text-xs",
              "line-clamp-2",
              "break-all leading-6",
              "lg:text-base",
            )}
          >
            {contentReplace}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogListItem;
