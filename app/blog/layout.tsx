import React, { ReactNode, Suspense } from "react";
import BlogSideBar from "@/components/blog/BlogSideBar";

const Layout = async ({
  children,
  ...props
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <main
      className={`flex flex-col lg:flex-row pt-6 lg:gap-x-12 lg:pt-12 w-full lg:justify-center`}
    >
      <Suspense fallback={<>Loading...</>}>
        <BlogSideBar />
      </Suspense>
      {children}
    </main>
  );
};

export default Layout;
