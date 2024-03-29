import getMainPosts from "pages/api/getMainPosts";
import { THEME_META_IMAGE } from "libs/constants";
import LandingTemplate from "components/landing/LandingTemplate";

const Home = async () => {
  const posts = await getMainPosts();

  return <LandingTemplate posts={posts} key="RecentPosts" />;
};

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
