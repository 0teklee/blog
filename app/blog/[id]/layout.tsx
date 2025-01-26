import React, { ReactNode } from "react";
import ScrollProgress from "@/components/common/module/scroll-progress";

const Layout = async ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
};

export default Layout;
