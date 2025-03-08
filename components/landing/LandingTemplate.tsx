import { cn } from "@/libs/utils";
import CelestialRSC from "@/components/landing/celestial";

const LandingTemplate = async () => {
  return (
    <main className={cn("flex flex-col gap-6 pt-6", "lg:gap-16")}>
      <section
        className={cn(`w-full mb-5 animate-intro`, "text-3xl font-semibold")}
      >
        <p>front-end dev. </p>
        <p>LEE TEK WOO</p>
        <p>Tech Blog</p>
      </section>
      {/*<LandingBlogSection />*/}
      <CelestialRSC />
      {/*<LandingAboutMe />*/}
    </main>
  );
};

export default LandingTemplate;
