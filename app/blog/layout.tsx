import React, { ReactNode, Suspense } from "react";
import BlogSideBar from "../../components/blog/BlogSideBar";

const Layout = async ({
  children,
  searchParams,
}: {
  children: ReactNode | ReactNode[];
  searchParams: { category: string };
}) => {
  return (
    <main
      className={`flex flex-col lg:flex-row lg:gap-x-12 w-full`}
      lang={`kr`}
    >
      <Suspense fallback={<>Loading...</>}>
        <BlogSideBar searchParams={searchParams} />
      </Suspense>
      {children}
    </main>
  );
};

export default Layout;
