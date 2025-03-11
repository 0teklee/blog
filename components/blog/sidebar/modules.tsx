import { cn } from "@/libs/utils";
import React, { PropsWithChildren } from "react";

type SidebarProps = PropsWithChildren<{ className?: string }>;

/** @description 블로그 사이드바 details 태그 모듈 **/
const SidebarDetails = ({ children, className }: SidebarProps) => {
  return (
    <details
      className={cn(
        `w-full`,
        "scrollbar-hide overflow-y-scroll",
        "transition-all duration-800 ease-in-out",
        "blog-sidebar",
        className,
      )}
    >
      {children}
    </details>
  );
};

/** @description 블로그 사이드바 summary 태그 모듈 **/
const SidebarSummary = ({ children, className }: SidebarProps) => {
  return (
    <summary
      className={cn(
        "flex justify-between",
        "w-full",
        "cursor-pointer ",
        "hover:text-theme",
        className,
      )}
    >
      {children}
    </summary>
  );
};

/** @description 블로그 사이드바 컨텐츠 모듈 : slot open 시 보이는 컨텐츠 **/
const SidebarContent = ({ children, className }: SidebarProps) => {
  return (
    <div className={cn("grid grid-rows-[0fr]", className)}>{children}</div>
  );
};

export { SidebarDetails, SidebarSummary, SidebarContent };
