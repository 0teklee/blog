"use client";

import { IBlogMainItem } from "@/components/blog/types";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import Image from "next/image";
import { getYPositionClass } from "./utils";
import dayjs from "dayjs";
import { htmlReplace } from "libs/utils/utils";
import LANDING_LIST_IMAGES from "./values";

const LandingListItem = ({ post, index }: { post: IBlogMainItem; index }) => {
  const router = useRouter();
  const postImg = LANDING_LIST_IMAGES[index];
  const mtPosition = getYPositionClass(index);

  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        "cursor-pointer transition-all duration-500 ease-in-out",
        "z-0",
        "group",
        "overflow-hidden",
        "md:max-w-96",
        mtPosition,
      )}
      onClick={() => {
        router.push(`/blog/${post.id}`);
      }}
    >
      <div className={clsx("relative", "w-full h-fit")}>
        <Image
          className={clsx(
            "w-full",
            "-z-10",
            "transition-all duration-200",
            "group-hover:blur-sm group-hover:brightness-50 group-hover:contrast-150",
          )}
          key={`img_${post.id}`}
          src={LANDING_LIST_IMAGES[index].url}
          sizes="(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw"
          alt="teklog-recent-post"
          priority={true}
          width={375}
          height={postImg.height}
        />
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "flex flex-col items-center justify-center gap-y-5",
            "transition-all duration-200",
            "opacity-0 group-hover:opacity-100",
            "w-full p-4",
            "text-center",
            "z-10",
            "invert mix-blend-difference",
          )}
        >
          <h3
            className={clsx(
              "w-full px-4",
              "text-center text-3xl",
              "overflow-ellipsis line-clamp-1",
              "font-bold",
            )}
          >
            {post.title}
          </h3>
          <div
            className={clsx(
              "w-full max-h-16 px-4",
              "text-sm font-light",
              "overflow-hidden leading-6 break-words line-clamp-2",
            )}
          >
            {htmlReplace(post.content)}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex items-start justify-between",
          "w-full",
          "bg-white",
          "text-xs",
          "font-normal",
        )}
      >
        <p>{dayjs(post.createdAt).format("YYYY.MM.DD")}</p>
        <p>ⓒ All Rights Reserved by teklee </p>
        <p>{`n°${post.id}`}</p>
      </div>
    </div>
  );
};

export default LandingListItem;
