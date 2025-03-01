import React, { ReactNode } from "react";
import GallerySidebar from "@/components/gallery/GallerySidebar";

const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <>
      <GallerySidebar />
      {children}
    </>
  );
};

export default Layout;
