import React, { ReactNode, Suspense } from "react";
import BlogSideBar from "@/components/blog/BlogSideBar";
import { headers } from "next/headers";

const Layout = async ({
  children,
  ...props
}: {
  children: ReactNode | ReactNode[];
}) => {
  const headersList = headers();
  const referer = headersList.get("referer");
  const pathname = new URL(
    referer || "",
    `${process.env.NODE_ENV === "development" ? "http" : "https"}://${headersList.get("host")}`,
  ).pathname;

  const isEditor = pathname.includes("create") || pathname.includes("edit");

  return (
    <main
      className={`flex flex-col lg:flex-row pt-6 lg:gap-x-12 lg:pt-12 w-full lg:justify-center`}
    >
      {!isEditor && (
        <Suspense fallback={<>Loading...</>}>
          <BlogSideBar />
        </Suspense>
      )}
      {children}
    </main>
  );
};

export default Layout;
