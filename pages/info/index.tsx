import MetaTag from "components/common/MetaTag";
import InfoTemplate from "components/info/InfoTemplate";

const index = () => {
  return (
    <>
      <MetaTag
        title="Info - Teklog"
        description="Front Developer Tek Woo Lee's Info Page - 프론트 개발자 이택우의 인포 페이지"
        url="https://www.teklog.site/info"
        img="https://res.cloudinary.com/dolziw8fv/image/upload/v1661494736/preset-pic-4_omucuw.jpg"
      />
      <InfoTemplate />
    </>
  );
};

export default index;
