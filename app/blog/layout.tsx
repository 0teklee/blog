import React, { ReactNode, Suspense } from "react";
import BlogSideBar from "@/components/blog/BlogSideBar";
import { LoaderCircle } from "lucide-react";

const Layout = async ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <main
      className={`flex flex-col lg:flex-row pt-6 lg:gap-x-12 lg:pt-12 w-full lg:justify-center`}
    >
      <Suspense
        fallback={
          <aside
            className={`
        flex flex-col items-stretch gap-5 
        w-full mb-12 flex-shrink-0 
        bg-white dark:bg-gray-950 scrollbar-hide
        lg:w-56 lg:pb-12 lg:sticky 
        lg:top-20 lg:h-[calc(100vh-4rem)]
        overflow-hidden
        opacity-70
        `}
          >
            <summary
              className={`
            flex justify-between
            w-full pb-2 
            text-lg font-normal font-sans 
            cursor-pointer 
            after:content-["⇣"]
            `}
            >
              <span>categories</span>
            </summary>
            <LoaderCircle className={`pt-2 text-gray-300 animate-spin`} />
          </aside>
        }
      >
        <BlogSideBar />
      </Suspense>
      {children}
    </main>
  );
};

export default Layout;
