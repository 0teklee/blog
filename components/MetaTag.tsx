import htmlReplace from "libs/utils/htmlReplace";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { GA_TRACKING_ID } from "libs/gtag";

interface Props {
  title: string;
  description?: string;
  url: string;
  img?: string;
}
const MetaTag = ({
  title,
  description = "Front End Dev Tek.Lee's Tech Blog",
  url,
  img = "https://res.cloudinary.com/dolziw8fv/image/upload/v1674413434/DALL_E_2023-01-23_03.46.28_-_a_sceintific_photo_of_the_most_nostalgic_sundog_during_sunset_on_ocean_provia_400_rillrw.png",
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="teklog" />
        <meta
          name="description"
          content={`${htmlReplace(description)?.substr(0, 150)}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta
          property="og:description"
          content={`${htmlReplace(description)?.substr(0, 150)}`}
        />
        <meta property="og:image" content={img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:ur" content={url} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@0teklee" />

        <meta
          name="twitter:description"
          content={`${htmlReplace(description)?.substr(0, 150)}`}
        />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
      </Head>
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
    </>
  );
};

export default MetaTag;
