import MetaTag from "components/MetaTag";
import GalleryTemplate from "components/Template/gallery/GalleryTemplate";

const index = () => {
  return (
    <>
      <MetaTag
        title="teklog - gallery"
        url="www.teklog.com/gallery"
        description="teklog - image gallery"
      />
      <GalleryTemplate />
    </>
  );
};

export default index;
