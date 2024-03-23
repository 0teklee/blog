import "./globals.css";
import React, { ReactNode } from "react";
import { GlobalStyles } from "../styles/global-styles";
import NextAuthSessionProvider from "../components/common/providers/NextAuthSessionProvider";
import RecoilProvider from "../components/common/providers/RecoilProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <NextAuthSessionProvider>
      <GlobalStyles />
      <RecoilProvider>{children}</RecoilProvider>
    </NextAuthSessionProvider>
  );
};

export default RootLayout;
