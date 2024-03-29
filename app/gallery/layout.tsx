import React, { ReactNode } from "react";
import GallerySidebar from "components/gallery/GallerySidebar";

const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const sample = null;
  return (
    <>
      <GallerySidebar />
      {children}
    </>
  );
};

export default Layout;
