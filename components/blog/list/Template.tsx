import React, { FC, PropsWithChildren } from "react";

export const ListLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative flex flex-col gap-16 w-full">{children}</div>
);

export const ListHeader = ({ text }: { text: string }) => (
  <h1 className={"text-3xl font-bold font-inter"}>{text}</h1>
);
