import React, { ReactNode, Suspense } from "react";
import getBlogCategoryList from "../../pages/api/getBlogCategoryList";
import BlogSideBar from "../../components/blog/BlogSideBar";

const Layout = async ({ children }: { children: ReactNode | ReactNode[] }) => {
  const categoryList = await getBlogCategoryList();
  return (
    <main
      className={`flex flex-col lg:flex-row lg:gap-x-12 w-full`}
      lang={`kr`}
    >
      <Suspense fallback={<>Loading...</>}>
        <BlogSideBar categories={categoryList} />
      </Suspense>
      {children}
    </main>
  );
};

export default Layout;
