"use client";

import React from "react";
import { clsx } from "clsx";
import { isNightModeAtom } from "@/libs/atoms";
import { useAtom } from "jotai/react";

const NightModeButton = () => {
  const [mode, setMode] = useAtom(isNightModeAtom);
  return (
    <div
      className={clsx(
        "fixed left-1/2 top-24 -translate-x-1/2 -translate-y-1/2",
      )}
    >
      <button
        className={clsx(
          "cursor-pointer text-xl font-[Cormorant]",
          "transition duration-150 hover:invert",
          mode ? "text-amber-300" : "text-indigo-700",
        )}
        about="night/day_mode"
        onClick={() => setMode((prev) => !prev)}
      >
        {mode ? "☼" : "☽"}
      </button>
    </div>
  );
};

export default NightModeButton;
