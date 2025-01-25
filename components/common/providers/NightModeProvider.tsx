"use client";

import React, { ReactNode } from "react";
import { Provider, useAtomValue } from "jotai/react";
import { isNightModeAtom, store } from "@/libs/atoms";

const NightModeProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const isNightMode = useAtomValue(isNightModeAtom);

  return (
    <Provider store={store}>
      <div className={isNightMode ? "dark" : ""}>{children}</div>
    </Provider>
  );
};

export default NightModeProvider;
