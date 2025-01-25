import React, { ReactNode } from "react";
import BlogSideBar from "@/components/blog/detail/BlogSideBar";
import { cn } from "@/libs/utils";

const Layout = async ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <main
      className={cn(
        "flex flex-col w-full pt-6 lg:pt-12",
        "lg:grid grid-cols-16 lg:gap-x-8 lg:justify-center",
      )}
    >
      <BlogSideBar className={`lg:col-span-3`} />
      <section
        className={`flex flex-col items-center w-full lg:col-span-10 lg:max-w-4xl`}
      >
        {children}
      </section>
      <aside id={"left-nav-portal"} className={`lg:col-span-3`} />
    </main>
  );
};

export default Layout;
