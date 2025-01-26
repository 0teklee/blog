"use client";

import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useTheme } from "next-themes";

const NightModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={clsx(
        "fixed left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 z-30",
        "text-xl font-[Cormorant]"
      )}
    >
      { mounted ?
      <button
        className={clsx(
          "cursor-pointer",
          "transition duration-150 hover:invert",
          theme === "dark" ? "text-amber-300" : "text-blue-900"
        )}
        about="night/day_mode"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "☼" : "☽"}
      </button>
        :
        <p>
          ☼
        </p>
      }
    </div>
  );
};

export default NightModeButton;
