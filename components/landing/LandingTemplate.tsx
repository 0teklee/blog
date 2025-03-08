import { cn } from "@/libs/utils";
import LandingAboutMe from "@/components/landing/LandingAboutMe";

const LandingTemplate = async () => {
  return (
    <main className={cn("flex flex-col gap-6 pt-6", "lg:gap-16")}>
      <section
        className={cn(`w-full mb-5 animate-intro`, "text-3xl font-semibold")}
      >
        <p>TEKWOO LEE</p>
        <p>Tech Blog</p>
      </section>
      {/*<LandingBlogSection />*/}
      {/*<Suspense*/}
      {/*  fallback={*/}
      {/*    <CelestialLayout>*/}
      {/*      <LoaderSpin />*/}
      {/*    </CelestialLayout>*/}
      {/*  }*/}
      {/*>*/}
      {/*  <CelestialRSC />*/}
      {/*</Suspense>*/}
      <LandingAboutMe />
    </main>
  );
};

export default LandingTemplate;
