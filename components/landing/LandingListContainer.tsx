import React from "react";
import { getParsedGithubBlogList } from "@/libs/api/github";
import { cn } from "@/libs/utils";
import LandingListCard from "@/components/landing/LandingListCard";

const LandingListContainer = async () => {
  const allPosts = await getParsedGithubBlogList();
  const posts = allPosts.slice(0, 6);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-[8%] gap-y-3 items-stretch",
        "w-full",
        "tablet:grid-cols-2 md:grid-cols-3",
      )}
    >
      {posts && posts.length === 0 && (
        <div className={cn("flex items-center p-5")}>
          <p className={cn("text-xl font-medium")}>No Posts Yet</p>
        </div>
      )}
      {posts &&
        posts.length > 0 &&
        posts.map((post, index) => (
          <LandingListCard
            key={`recent post_${index}`}
            post={post}
            index={index}
          />
        ))}
    </div>
  );
};

export default LandingListContainer;
