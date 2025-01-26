import React, { ReactNode } from "react";

export const ListLayout = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => <div className="relative flex flex-col gap-16 w-full">{children} </div>;

export const ListHeader = ({ text }: { text: string }) => (
  <h1 className={"text-3xl font-bold font-inter"}>{text}</h1>
);
