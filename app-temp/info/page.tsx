import InfoTemplate from "components/info/InfoTemplate";
import { THEME_META_IMAGE } from "libs/constants";

const page = () => <InfoTemplate />;

export default page;

export async function generateMetadata() {
  return {
    title: `teklog - info`,
    description: `tech blog about frontend/web development`,
    openGraph: {
      title: `teklog - info`,
      description: `tech blog about frontend/web development`,
      images: THEME_META_IMAGE,
    },
  };
}
