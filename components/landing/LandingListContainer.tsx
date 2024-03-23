import React, { ReactNode } from "react";
import { clsx } from "clsx";
import Link from "next/link";

const LandingListContainer = ({ children }: { children: ReactNode[] }) => {
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
          "lg:landing-list",
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default LandingListContainer;
