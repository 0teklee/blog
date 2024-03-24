import "./globals.css";
import React, { ReactNode } from "react";
import { GlobalStyles } from "../styles/global-styles";
import NextAuthSessionProvider from "components/common/providers/NextAuthSessionProvider";
import RecoilProvider from "components/common/providers/RecoilProvider";
import { clsx } from "clsx";
import Header from "components/common/Header";
import NightModeSelector from "components/common/NightModeSelector";
import Footer from "components/common/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head></head>
      <body>
        <NextAuthSessionProvider>
          <GlobalStyles />
          <RecoilProvider>
            <Header />
            <NightModeSelector />
            <main
              className={clsx(
                "w-full px-4 py-24",
                "tablet:px-12",
                "lg:px-20",
                "bg-white dark:bg-black",
              )}
            >
              {children}
            </main>
            <Footer />
          </RecoilProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
