import LandingAboutMe from "components/landing/LandingAboutMe";
import { IBlogMainItem } from "types/IBlogItem";
import { clsx } from "clsx";
import Link from "next/link";
import LandingListItem from "components/landing/LandingListItem";

const LandingTemplate = ({ posts }: { posts: IBlogMainItem[] }) => {
  return (
    <>
      <section
        className={clsx(`w-full mb-5 animate-intro`, "text-3xl font-bold")}
      >
        <p>front-end dev. </p>
        <p>LEE TEK WOO</p>
        <p>Tech Blog</p>
      </section>
      <div className={clsx("relative", "flex items-center mb-20", "md:mb-5")}>
        <h2 className={clsx("text-xl", "font-semibold")}>Recent Posts</h2>
        <Link
          className={clsx("text-sm", "font-light", "hover:after:content-[`→`]")}
          href={"blog?page=1"}
        >
          more posts
        </Link>
      </div>
      <section>
        <div className={clsx("grid grid-cols-3", "w-full")}>
          <LandingListItem posts={posts} />
        </div>
      </section>
      <LandingAboutMe />
    </>
  );
};

export default LandingTemplate;
