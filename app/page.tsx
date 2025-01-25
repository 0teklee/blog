import { THEME_META_IMAGE } from "libs/constants";
import LandingTemplate from "components/landing/LandingTemplate";

const Home = () => <LandingTemplate />;

export const revalidate = 600;
export const experimental_ppr = true;

export default Home;

export async function generateMetadata() {
  return {
    title: `teklog - blog`,
    description: `teklog: tech blog about frontend/web development`,
    openGraph: {
      title: `teklog`,
      description: `tech blog about frontend/web development`,
      images: THEME_META_IMAGE,
      url: "https://www.teklog.site",
    },
  };
}
