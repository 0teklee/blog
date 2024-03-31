import React, { cache } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import LandingListItem from "@/components/landing/LandingListItem";
import getMainPosts from "@/pages/api/getMainPosts";

const mainPostsCache = cache(async () => {
  return await getMainPosts();
});

const LandingListContainer = async () => {
  const posts = await mainPostsCache();

  return (
    <section>
      <div
        className={clsx(
          "relative",
          "flex items-center justify-between",
          "w-full mb-3",
          "lg:mb-7",
        )}
      >
        <h2 className={clsx("text-xl", "font-semibold")}>Recent Posts</h2>
        <Link
          className={clsx(
            "text-sm",
            "font-light",
            "transition-all duration-200",
            `hover:underline hover:after:content-["→"]`,
            `after:absolute after:top-1 after:-right-3.5`,
          )}
          href={"blog?page=1"}
        >
          more posts
        </Link>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-x-[8%] gap-y-3 items-stretch",
          "w-full",
          "md:grid-cols-3",
        )}
      >
        {posts && posts.length === 0 && (
          <div className={clsx("flex items-center p-5")}>
            <p className={clsx("text-xl font-medium")}>No Posts Yet</p>
          </div>
        )}
        {posts &&
          posts.length > 0 &&
          posts
            .filter((item) => item.title && item.content)
            .map((post, index) => (
              <LandingListItem
                key={`recent post_${index}`}
                post={post}
                index={index}
              />
            ))}
      </div>
    </section>
  );
};

export default LandingListContainer;
