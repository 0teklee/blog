import React, { ReactNode, Suspense } from "react";
import BlogSideBar from "@/components/blog/BlogSideBar";

const Layout = async ({
  children,
  searchParams,
}: {
  children: ReactNode | ReactNode[];
  searchParams: { category: string };
}) => {
  return (
    <main
      className={`flex flex-col lg:flex-row pt-6 lg:gap-x-12 lg:pt-12 w-full`}
    >
      <Suspense fallback={<>Loading...</>}>
        <BlogSideBar searchParams={searchParams} />
      </Suspense>
      {children}
    </main>
  );
};

export default Layout;
