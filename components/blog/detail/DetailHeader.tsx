import dayjs from "dayjs";
import React from "react";

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

export default DetailHeader;
