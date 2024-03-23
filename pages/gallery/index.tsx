import MetaTag from "components/common/MetaTag";
import GalleryTemplate from "components/gallery/GalleryTemplate";
import { galleryImagesV1 } from "libs/galleryImages";
import { GetServerSideProps } from "next";
import getGalleryCategoryList from "pages/api/getGalleryCategoryList";
import getGalleryList from "pages/api/getGalleryList";
import { IGalleryProps } from "types/IGallery";

const index = ({ list, categories, category }: IGalleryProps) => {
  return (
    <>
      <MetaTag
        title="teklog - gallery"
        url="https://www.teklog.site/gallery"
        description={`Teklog Gallery : ${category}`}
      />
      <GalleryTemplate list={list} categories={categories} query={category} />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=3000"
  );
  const { category } = query;
  if (!category) {
    return {
      redirect: {
        destination: "/gallery?category=Collection",
        permanent: false,
      },
    };
  }

  const categories = await getGalleryCategoryList();

  if (category === "~2022") {
    return {
      props: { list: galleryImagesV1, categories, category },
    };
  }

  const posts = await getGalleryList(category);
  return {
    props: { list: posts, categories, category },
  };
};
