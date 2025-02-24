import React, { ReactNode } from "react";
import ReactQueryProvider from "@/components/common/providers/ReactQueryProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
};

export default Layout;
