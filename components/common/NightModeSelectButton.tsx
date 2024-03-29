"use client";

import React from "react";
import { clsx } from "clsx";
import { useRecoilState } from "recoil";
import isNightModeState from "libs/recoil/isNightModeState";

const NightModeSelectButton = () => {
  const [mode, setMode] = useRecoilState(isNightModeState);
  return (
    <div
      className={clsx(
        "fixed left-1/2 top-20 -translate-x-1/2 -translate-y-1/2",
      )}
    >
      <button
        className={clsx(
          "cursor-pointer text-xl",
          "font-[Cormorant]",
          "transition duration-150 hover:invert",
        )}
        about="night/day_mode"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {mode === "light" ? "☽" : "☼"}
      </button>
    </div>
  );
};

export default NightModeSelectButton;
