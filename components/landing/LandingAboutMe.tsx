"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/utils";

const LandingAboutMe = () => {
  const [lang, setLang] = useState<"en" | "kr">("en");

  const router = useRouter();

  const isEn = lang === "en";
  const isKr = lang === "kr";

  const handleClick = (val: "en" | "kr") => {
    setLang(val);
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-start gap-4",
        "overflow-hidden w-full",
        "transition-all duration-1500",
        "pt-4",
      )}
    >
      <div>
        <h1 className={clsx("mt-8 text-3xl font-bold whitespace-pre-wrap")}>
          {`About Me \n반갑습니다`}
        </h1>
        <div className="mt-5 flex">
          <button
            onClick={() => handleClick("en")}
            className={clsx(
              "transition-all mr-12",
              isEn ? "font-bold underline" : "font-normal",
            )}
          >
            EN
          </button>
          <button
            onClick={() => handleClick("kr")}
            className={clsx(
              "transition-all",
              isKr ? "font-bold underline" : "font-normal",
            )}
          >
            KR
          </button>
        </div>
      </div>
      <div
        className={cn(
          "relative",
          "h-48",
          "max-w-xl",
          "whitespace-pre-wrap",
          "font-normal text-md md:text-lg",
        )}
      >
        <p
          className={cn(
            "transition-all duration-500",
            // "ease-in-out",
            isEn ? "opacity-100" : "opacity-0 absolute",
            "md:text-lg",
          )}
        >
          PASSIONATE ABOUT WEB TECHNOLOGIES & INTERFACES OF ANY SORT.
        </p>
        <p
          className={cn(
            "transition-all duration-500",
            isKr ? "opacity-100" : "opacity-0 absolute",
            "md:text-lg",
          )}
        >
          인터페이스에 관심이 많은 개발자 이택우입니다.
        </p>
      </div>
      <div>
        <span>FOR MORE INFORMATION, PLEASE VISIT</span>
        <button
          className={`ml-1 underline duration-100 hover:text-blue-600`}
          onClick={() => router.push("/info")}
        >
          INFO PAGE
        </button>
      </div>
    </div>
  );
};

export default LandingAboutMe;
