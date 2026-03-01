import "./globals.css";
import React, { ReactNode } from "react";
import Header from "components/common/Header";
import NightModeButton from "@/components/common/NightModeButton";
import Footer from "components/common/Footer";
import Script from "next/script";
import { GA_TRACKING_ID } from "libs/gtag";

import { Analytics } from "@vercel/analytics/react";
import { clsx } from "clsx";
import NightModeProvider from "@/components/common/providers/NightModeProvider";

const cormorantClassName = "font-cormorant";
const interClassName = "font-inter";
const notoSansClassName = "font-noto";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={interClassName} lang={`kr`} suppressHydrationWarning>
      <head>
        <title>teklog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="teklog - web dev & etc" />
        <link rel="canonical" href="https://www.teklog.site" key="canonical" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
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
        <NightModeProvider>
          <Header fonts={cormorantClassName} />
          <NightModeButton />
          <div
            className={clsx(
              "w-full px-4 py-24",
              "tablet:px-12",
              "lg:px-20",
              "bg-background text-primary selection:bg-theme selection:text-background",
              notoSansClassName,
            )}
          >
            {children}
          </div>
          <Footer fonts={cormorantClassName} />
        </NightModeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
