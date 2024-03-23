import "./globals.css";
import React, { ReactNode } from "react";
import { GlobalStyles } from "../styles/global-styles";
import NextAuthSessionProvider from "../components/common/providers/NextAuthSessionProvider";
import RecoilProvider from "../components/common/providers/RecoilProvider";
import { clsx } from "clsx";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head></head>
      <body>
        <NextAuthSessionProvider>
          <GlobalStyles />
          <RecoilProvider>
            <main
              className={clsx(
                "w-full px-4 py-10",
                "tablet:px-12 tablet:py-10",
                "lg:px-20 lg:py-12",
              )}
            >
              {children}
            </main>
          </RecoilProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
