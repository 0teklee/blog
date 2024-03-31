"use client";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { memo } from "react";
import dayjs from "dayjs";
import { getContentImg } from "@/libs/utils";

const GalleryItem = ({
  id,
  url,
  title,
  createdAt,
}: {
  id?: number;
  url: string;
  title: string;
  createdAt?: string;
}) => {
  const contentUrl = getContentImg(url);
  return (
    <Link
      className={clsx(
        "relative group",
        "cursor-pointer transition duration-300 ",
        "max-w-[300px] max-h-[400px]",
      )}
      href={`/gallery/${id}`}
    >
      <Image
        className={`
        mb-10 
        group-hover:blur-md 
        group-hover:invert
        transition duration-[3s]`}
        alt={`gallery_${id}`}
        src={contentUrl}
        fetchPriority={"high"}
        sizes={`(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw`}
        width={200}
        height={300}
        placeholder={"blur"}
        blurDataURL={contentUrl}
      />
      <abbr
        className={`
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        opacity-0 group-hover:opacity-100
        items-center gap-1 
        transition-all duration-[5s]
        text-sm text-white
        mix-blend-difference`}
      >
        {title}
        <br />
        {dayjs(createdAt).format("YYMMDD")}
      </abbr>
    </Link>
  );
};

export default memo(GalleryItem);
