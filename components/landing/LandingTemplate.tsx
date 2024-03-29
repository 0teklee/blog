import LandingAboutMe from "components/landing/LandingAboutMe";
import { IBlogMainItem } from "@/components/blog/types";
import { clsx } from "clsx";
import LandingListItem from "./LandingListItem";
import LandingListContainer from "./LandingListContainer";

import { IBM_Plex_Sans_KR } from "next/font/google";

const ibmPlex = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const LandingTemplate = async ({ posts }: { posts: IBlogMainItem[] }) => {
  return (
    <main
      className={clsx("flex flex-col gap-6", "lg:gap-16", ibmPlex.className)}
    >
      <section
        className={clsx(`w-full mb-5 animate-intro`, "text-3xl font-semibold")}
      >
        <p>front-end dev. </p>
        <p>LEE TEK WOO</p>
        <p>Tech Blog</p>
      </section>
      <LandingListContainer>
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
      </LandingListContainer>
      <LandingAboutMe />
    </main>
  );
};

export default LandingTemplate;
