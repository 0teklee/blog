import dayjs from "dayjs";
import { cn, generateFallbackText } from "@/libs/utils";
import { cache, memo } from "react";
import LoaderSpin from "@/components/common/module/LoaderSpin";

const cacheFallbackText = cache((length: number) =>
  generateFallbackText(length),
);
const ListFallbackItem = () => {
  const title = cacheFallbackText(30);
  const category = cacheFallbackText(7);
  const content = cacheFallbackText(120);

  return (
    <div
      className={cn(
        "w-full px-4",
        "group",
        "overflow-hidden",
        "transition-all duration-700",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "lg:px-2 lg:py-3",
        "border-b-2 border-secondary last-of-type:border-none",
      )}
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
            "flex-shrink-0 flex items-center justify-center",
            "w-full h-[120px]",
            "bg-secondary rounded-t overflow-hidden",
            "lg:rounded-t-none lg:border-none lg:flex-shrink lg:w-36 lg:h-36 lg:rounded-sm",
            "animate-pulse",
          )}
        >
          <LoaderSpin />
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
                "blur-sm",
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
              <div className="flex items-center blur-sm">
                <p className="font-semibold">category:</p>
                <p className="ml-2">{category}</p>
              </div>
              <p className={`blur-sm`}>
                {dayjs("2025.01.01").format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <p
            className={cn(
              "text-xs",
              "line-clamp-2",
              "break-all leading-6",
              "lg:line-clamp-3",
              "blur-sm",
            )}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ListFallbackItem);
