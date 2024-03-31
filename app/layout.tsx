import "./globals.css";
import React, { ReactNode } from "react";
import NextAuthSessionProvider from "components/common/providers/NextAuthSessionProvider";
import RecoilProvider from "components/common/providers/RecoilProvider";
import Header from "components/common/Header";
import NightModeSelectButton from "components/common/NightModeSelectButton";
import Footer from "components/common/Footer";
import Script from "next/script";
import { GA_TRACKING_ID } from "libs/gtag";
import { Cormorant_Garamond, IBM_Plex_Sans_KR, Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { clsx } from "clsx";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlex = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={inter.className}>
      <head>
        <title>teklog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="teklog - web dev & etc" />
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href="favicon.ico" />
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://www.teklog.site" key="canonical" />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          defer
        />
        <Script id="google-analytics" defer>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
        </Script>
        <Analytics />
      </head>
      <body>
        <NextAuthSessionProvider>
          <RecoilProvider>
            <Header fonts={cormorant.className} />
            <NightModeSelectButton />
            <div
              className={clsx(
                "w-full px-4 py-24",
                "tablet:px-12",
                "lg:px-20",
                "bg-white dark:bg-black",
                ibmPlex.className,
              )}
            >
              {children}
            </div>
            <Footer fonts={cormorant.className} />
          </RecoilProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
