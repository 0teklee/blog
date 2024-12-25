import { THEME_META_IMAGE } from "libs/constants";
import Title from "components/common/Title";
import GalleryListContents from "@/components/gallery/GalleryListContents";
import { Suspense } from "react";
import Loading from "@/components/common/Loading";

const page = async ({
  searchParams: { category },
}: {
  searchParams: { category: string };
}) => {
  return (
    <>
      <Title title="Gallery" customStyle={"text-center mb-5"} />
      <section className="md:pl-36 py-4 md:py-0">
        <Suspense fallback={<Loading style={`w-full`} />}>
          <GalleryListContents category={category} />
        </Suspense>
      </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `teklog - gallery`,
    description: `teklog: personal gallery for photos and illustrations`,
    openGraph: {
      title: `teklog - gallery`,
      description: `teklog: personal gallery for photos and illustrations`,
      images: THEME_META_IMAGE,
    },
  };
}
