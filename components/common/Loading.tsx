import Image from "next/image";
import { clsx } from "clsx";
import { THEME_LOGO_IMAGE } from "libs/constants";
import React from "react";

const Loading = ({ style }: { style?: string }) => {
  return (
    <div
      className={clsx("flex flex-col items-center justify-center p-8", style)}
    >
      <Image
        className={`rounded-full`}
        src={THEME_LOGO_IMAGE}
        alt="hummingbird"
        width={200}
        height={200}
      />
      <p className={`text-lg font-medium`}>Loading...</p>
    </div>
  );
};

export default Loading;
