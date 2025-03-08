import { cn } from "@/libs/utils";
import CelestialRSC from "@/components/landing/celestial";
import LandingAboutMe from "@/components/landing/LandingAboutMe";
import { Suspense } from "react";
import CelestialLayout from "@/components/landing/celestial/CelestialLayout";
import LoaderSpin from "@/components/common/module/LoaderSpin";

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
      <Suspense
        fallback={
          <CelestialLayout>
            <LoaderSpin />
          </CelestialLayout>
        }
      >
        <CelestialRSC />
      </Suspense>
      <LandingAboutMe />
    </main>
  );
};

export default LandingTemplate;
