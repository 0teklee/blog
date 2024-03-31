"use client";

import React, { ReactNode } from "react";
import { useAtomValue } from "jotai/react";
import { isNightModeAtom } from "@/libs/atoms";

const NightModeProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const isNightMode = useAtomValue(isNightModeAtom);
  return <div className={isNightMode ? "dark" : ""}>{children}</div>;
};

export default NightModeProvider;
