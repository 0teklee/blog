import LandingAboutMe from "components/landing/LandingAboutMe";
import { clsx } from "clsx";
import LandingBlogSection from "@/components/landing/LandingBlogSection";

const LandingTemplate = () => {
  return (
    <main className={clsx("flex flex-col gap-6 pt-6", "lg:gap-16")}>
      <section
        className={clsx(`w-full mb-5 animate-intro`, "text-3xl font-semibold")}
      >
        <p>front-end dev. </p>
        <p>LEE TEK WOO</p>
        <p>Tech Blog</p>
      </section>
      <LandingBlogSection />
      <LandingAboutMe />
    </main>
  );
};

export default LandingTemplate;
