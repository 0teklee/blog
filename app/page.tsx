import { THEME_META_IMAGE } from "libs/constants";
import LandingTemplate from "components/landing/LandingTemplate";

const Home = () => <LandingTemplate />;

export const revalidate = 600;
export const experimental_ppr = true;

export default Home;

export async function generateMetadata() {
  return {
    title: `teklog`,
    description: `teklog: tech blog by TEK.LEE`,
    openGraph: {
      title: `teklog`,
      description: `tech blog by TEK.LEE`,
      images: THEME_META_IMAGE,
      url: "https://blog.leetekwoo.com",
    },
  };
}
