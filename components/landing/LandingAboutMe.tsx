"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const LandingAboutMe = () => {
  const [lang, setLang] = useState<"en" | "kr">("en");

  const router = useRouter();

  const isEn = lang === "en";
  const isKr = lang === "kr";

  const handleClick = (val) => {
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
        className={clsx(
          "h-50",
          "max-w-xl",
          "line-height[1.4] whitespace-pre-wrap",
          "font-normal text-md",
          "md:text-lg",
        )}
      >
        <div
          className={clsx(
            "transition-opacity duration-1000",
            isEn
              ? "opacity-100 h-56 md:h-52"
              : "opacity-0 h-0 -translate-x-[100vw]",
            "md:text-lg",
          )}
        >
          <p>
            PASSIONATE ABOUT WEB TECHNOLOGIES & USER INTERFACE. CURRENTLY
            WORKING AS A FRONT-END DEVELOPER. I AM ABLE TO SEE THE BEAUTY IN
            CODING AND CONTINUE TO CHALLENGE MYSELF TO CREATE FINER CODES.
          </p>
          <br />
          <div className={clsx(`after:content-["."]`)}>
            <span>
              AS A FORMER VISUAL ARTIST, I STILL TAKE PHOTOS FROM TIME TO TIME
              AS WELL. YOU CAN CHECK OUT MY PHOTOS ON
            </span>
            <button
              className={`ml-1 underline hover:text-blue-600 transition duration-100`}
              onClick={() => router.push("/gallery")}
            >
              GALLERY
            </button>
          </div>
          <br />
        </div>
        <div
          className={clsx(
            "transition-opacity duration-1000",
            isKr
              ? "opacity-100 h-56 md:h-52"
              : "opacity-0 h-0 -translate-x-[100vw]",
            "md:text-lg",
          )}
        >
          <p>
            유저 인터페이스에 관심이 많은 프론트 개발자 이택우입니다. 개발자가
            되기 이전에는 조형예술을 전공하고, 시각예술가로 활동을 해왔습니다.
          </p>
          <br />
          <div>
            <span>
              취미로는 사진 찍는 것과 여행하는 것을 좋아합니다. 제가 찍은
              사진들은
            </span>
            <button
              className={`mx-1 underline transition duration-100 hover:text-blue-600`}
              onClick={() => router.push("/gallery")}
            >
              여기에서
            </button>
            <span>확인이 가능합니다.</span>
          </div>
        </div>
      </div>
      <div className={clsx(`after:content-["."]`)}>
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
