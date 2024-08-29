import React, { ReactNode } from "react";
import ReactQueryProvider from "components/common/providers/ReactQueryProvider";
import Script from "next/script";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>;
      <Script src="https://package.commenti.co/commenti.umd.js" async={true} />
    </>
  );
};

export default Layout;
