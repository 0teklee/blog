import React, { Suspense } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import LandingListContainer from "@/components/landing/LandingListContainer";
import LandingListFallback from "@/components/landing/LandingListFallback";

const LandingBlogSection = () => {
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
      <Suspense fallback={<LandingListFallback />}>
        <LandingListContainer />
      </Suspense>
    </section>
  );
};

export default LandingBlogSection;
