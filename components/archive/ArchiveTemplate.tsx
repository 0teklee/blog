"use client";

import Title from "components/common/Title";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { getContentImg, setCategoryPresetImg } from "libs/utils/utils";

interface IProps {
  id: number;
  title: string;
  createdAt: string;
  categories: { name: string };
  content: string;
}

const ArchiveTemplate = ({ posts }: { posts: IProps[] }) => {
  const router = useRouter();

  const sortedMonths = Array.from(
    new Set(posts.map((item) => item.createdAt.slice(0, 7))),
  ).sort();

  const archivePosts = sortedMonths
    .map((month) => ({
      month,
      posts: posts.filter((post) => post.createdAt.startsWith(month)),
    }))
    .reverse();

  return (
    <div className={clsx("flex flex-col gap-3", "mb-20")}>
      <Title title="Archive" />
      {archivePosts &&
        archivePosts.map((item) => (
          <div key={`${item.month}_month_wrapper`} className="mt-8">
            <h2 className={`text-2xl font-semibold`}>
              {item.month.replace("-", "/")}
            </h2>
            <div
              key={`${item.month}_grid_wrapper`}
              className={clsx("flex flex-wrap gap-5", "w-full mt-8")}
            >
              {item.posts?.map((post) => (
                <div
                  key={`${post.id}_grid_item`}
                  onClick={() => router.push(`/blog/${post.id}`)}
                  className={clsx(
                    "flex-grow relative group",
                    "w-60 h-60 mb-8 p-8",
                    "overflow-hidden cursor-pointer",
                    "text-white text-base",
                    "z-20",
                    "tablet:flex-grow-0",
                  )}
                >
                  <Image
                    className={clsx(
                      "absolute top-0 left-0 w-full h-full object-cover -z-10",
                      "group-hover:brightness-50 transition-all",
                    )}
                    src={
                      getContentImg(post.content) ||
                      setCategoryPresetImg(post.categories.name)
                    }
                    alt="post_image"
                    fill={true}
                  />
                  <div
                    className={clsx(
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      "opacity-0 transition-opacity",
                      "group-hover:opacity-100",
                    )}
                  >
                    <h4>{post.title}</h4>
                    <p>{dayjs(post.createdAt).format("YYYY.MM.DD")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ArchiveTemplate;
