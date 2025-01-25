import { IBlogMainItem } from "@/components/blog/types";
import { getYPositionClass } from "@/components/landing/utils";
import dayjs from "dayjs";
import { htmlReplace } from "@/libs/utils";
import { LANDING_LIST_IMAGES } from "./values";
import Link from "next/link";
import Image from "next/image";
import { cache } from "react";

const getPositionCache = cache(getYPositionClass);

const LandingListCard = ({
  post,
  index,
}: {
  post: IBlogMainItem;
  index: number;
}) => {
  const postImg = LANDING_LIST_IMAGES[index];
  const mtPosition = getPositionCache(index);

  return (
    <Link
      className={`flex flex-col items-center
        cursor-pointer transition-all duration-500 ease-in-out
        group
        overflow-hidden
        ${mtPosition}`}
      href={`/blog/${post.id}`}
    >
      <div className={"relative w-full h-full"}>
        <Image
          className={`
            w-full -z-30
            transition-all duration-200
            aspect-[375/500]
            group-hover:blur-sm group-hover:brightness-50 group-hover:contrast-150
            `}
          key={`img_${post.id}`}
          src={LANDING_LIST_IMAGES[index].url}
          alt="teklog-recent-post"
          width={375}
          height={500}
          priority={index < 3}
          sizes="(min-width: 1024px) 375px, (min-width: 768px) 50vw, 100vw"
        />
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex flex-col items-center justify-center gap-y-5
            transition-all duration-200
            opacity-0 group-hover:opacity-100
            w-full p-4
            text-center
            z-10
            invert dark:invert-0 mix-blend-difference`}
        >
          <h3
            className={`w-full px-4
              text-center text-3xl
              overflow-ellipsis line-clamp-1
              font-bold`}
          >
            {post.title}
          </h3>
          <div
            className={`w-full max-h-16 px-4
              text-sm font-light
              overflow-hidden leading-6 break-words line-clamp-2`}
          >
            {htmlReplace(post.content)}
          </div>
        </div>
        <div
          className={`
            grid grid-cols-5
            place-items-stretch
            w-full z-20
            text-xs

            `}
        >
          <p>{dayjs(post.createdAt).format("YYYY.MM.DD")}</p>
          <p
            className={`col-span-3 text-center tablet:opacity-0 lg:opacity-100  ${post.id}`}
          >
            ⓒ All Rights Reserved by teklee{" "}
          </p>
          <p className={`text-end`}>{`n°${post.id}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default LandingListCard;
