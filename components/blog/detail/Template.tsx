import React, { ReactNode } from "react";
import { cn } from "@/libs/utils";
import dayjs from "dayjs";

const DetailHeader = ({
  id,
  title,
  categories,
  createdAt,
}: {
  id: string;
  title: string;
  categories: string;
  createdAt: string;
}) => (
  <div className="w-full">
    <h1 className="w-full mb-4 font-sans text-5xl break-all">{title}</h1>
    <div className="flex justify-between w-full mt-4 font-semibold text-base">
      <p>{dayjs(createdAt).format("YYYY/MM/DD")}</p>
      <p>{`n°${id}`}</p>
    </div>
    <div className="flex justify-between w-full mt-12 mb-12 font-semibold text-sm text-gray-500 wrap">
      <p>category : {categories}</p>
    </div>
  </div>
);

const DetailLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full gap-3",
        "lg:items-center lg:py-5 lg:flex-grow lg:pt-0",
      )}
    >
      {children}
    </div>
  );
};

export { DetailHeader, DetailLayout };
