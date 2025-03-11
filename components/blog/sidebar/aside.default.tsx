import { cn } from "@/libs/utils";
import React, { PropsWithChildren } from "react";
import {
  SidebarContent,
  SidebarDetails,
  SidebarSummary,
} from "@/components/blog/sidebar/modules";

/** @description aside 태그 @sidebar/default에 children null로 사용됨  **/
const SidebarAside = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <aside
      className={cn(
        "flex flex-col items-stretch gap-5",
        "w-full mb-12 flex-shrink-0",
        "bg-background scrollbar-hide",
        "lg:pb-12 lg:sticky",
        "lg:top-20 lg:h-[calc(100vh-4rem)]",
        "overflow-hidden",
        className,
      )}
    >
      <div
        className="
        flex justify-between
        h-full overflow-y-auto
        scrollbar-hide
        "
      >
        <SidebarDetails className={"group/parent"}>
          <SidebarSummary
            className={cn(
              "w-pb-2",
              "text-lg font-normal font-sans",
              "hover:text-theme group-open:text-theme",
              "after:transition-all after:duration-300",
              `after:content-["⇣"]`,
              "after:group-open/parent:rotate-180",
              "group-open/parent:text-theme",
              "list-outside",
            )}
          >
            <span>categories</span>
          </SidebarSummary>
          <SidebarContent
            className={cn(
              "group-open/parent:animate-expand",
              "group-[&:not([open])]/parent:animate-collapse",
              "transition-all duration-500",
            )}
          >
            {children}
          </SidebarContent>
        </SidebarDetails>
      </div>
    </aside>
  );
};

export default SidebarAside;
