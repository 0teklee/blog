import "./globals.css";
import React, { ReactNode } from "react";
import NextAuthSessionProvider from "components/common/providers/NextAuthSessionProvider";
import Header from "components/common/Header";
import NightModeButton from "@/components/common/NightModeButton";
import Footer from "components/common/Footer";
import Script from "next/script";
import { GA_TRACKING_ID } from "libs/gtag";
import { Cormorant_Garamond, IBM_Plex_Sans_KR, Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { clsx } from "clsx";
import NightModeProvider from "@/components/common/providers/NightModeProvider";

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
    <html className={inter.className} lang={`kr`}>
      <head>
        <title>teklog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="teklog - web dev & etc" />
        <link rel="shortcut icon" href="/app/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href="/app/favicon.ico" />
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
          <NightModeProvider>
            <Header fonts={cormorant.className} />
            <NightModeButton />
            <div
              className={clsx(
                "w-full px-4 py-24",
                "tablet:px-12",
                "lg:px-20",
                "bg-white dark:bg-gray-950 dark:text-neutral-50",
                ibmPlex.className,
              )}
            >
              {children}
            </div>
            <Footer fonts={cormorant.className} />
          </NightModeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
