import React, { ReactNode } from "react";
import { cn } from "@/libs/utils";

export default function Layout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <main
      className={cn(
        "flex flex-col w-full pt-6 lg:pt-12",
        "lg:grid grid-cols-16 lg:gap-x-5 lg:justify-center",
      )}
    >
      {sidebar}
      <section
        className={cn(
          "flex flex-col items-center",
          "w-full",
          "lg:col-span-10 lg:max-w-4xl",
          "xl:max-w-none xl:col-start-5 xl:col-span-8",
        )}
      >
        {children}
      </section>
      <aside
        id={"left-nav-portal"}
        className={`lg:col-span-3 xl:col-start-[14]`}
      />
    </main>
  );
}
