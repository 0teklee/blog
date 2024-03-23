import LandingAboutMe from "components/landing/LandingAboutMe";
import { IBlogMainItem } from "types/IBlogItem";
import { clsx } from "clsx";
import LandingListItem from "./LandingListItem";
import LandingListContainer from "./LandingListContainer";

const LandingTemplate = ({ posts }: { posts: IBlogMainItem[] }) => {
  return (
    <main className={clsx("flex flex-col gap-6", "lg:gap-16")}>
      <section
        className={clsx(`w-full mb-5 animate-intro`, "text-3xl font-bold")}
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
              <LandingListItem post={post} index={index} />
            ))}
      </LandingListContainer>
      <LandingAboutMe />
    </main>
  );
};

export default LandingTemplate;
