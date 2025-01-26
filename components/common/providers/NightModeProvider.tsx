"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const NightModeProvider = ({
  children,    
}: {
  children: ReactNode | ReactNode[];
}) => {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NightModeProvider;
