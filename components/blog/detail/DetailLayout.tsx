import React, { ReactNode } from "react";
import { cn } from "@/libs/utils";

const DetailLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full gap-3",
        "lg:items-center lg:py-5 lg:flex-grow lg:pt-0",
      )}
    >
      {children}
    </div>
  );
};

export default DetailLayout;
