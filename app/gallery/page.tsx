import { cache } from "react";
import getGalleryList from "pages/api/getGalleryList";
import { GALLERY_2022_IMAGES, THEME_META_IMAGE } from "libs/constants";
import GalleryItem from "components/gallery/GalleryItem";
import { clsx } from "clsx";
import Title from "components/common/Title";

const getGalleryListCache = cache(getGalleryList);

const page = async ({
  searchParams: { category },
}: {
  searchParams: { category: string };
}) => {
  const posts =
    category === "~2022"
      ? GALLERY_2022_IMAGES
      : await getGalleryListCache(category || "Collection");

  return (
    <>
      <Title title="Gallery" customStyle={"text-center mb-5"} />
      <section className="md:pl-36 py-4 md:py-0">
        <div className={clsx("gallery-list-col gap-y-[100px] pt-12")}>
          {posts?.map((item, i) => (
            <GalleryItem
              key={`${item.title}_key_${i}`}
              id={item.id}
              title={item.title}
              url={item.imgUrl}
              createdAt={item.createdAt}
            />
          ))}
        </div>
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
