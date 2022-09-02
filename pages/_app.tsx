// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";
import smoothscroll from "smoothscroll-polyfill";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

if (typeof window !== "undefined") {
  smoothscroll.polyfill();
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
