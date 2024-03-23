import MetaTag from "components/common/MetaTag";

import getMainPosts from "../pages/api/getMainPosts";
import { THEME_META_IMAGE } from "../libs/constants";
import Layout from "../components/common/Layout";
import LandingTemplate from "../components/landing/LandingTemplate";

const Home = async () => {
  const posts = await getMainPosts();

  return (
    <>
      <MetaTag
        title="teklog"
        url="https://www.teklog.site"
        description="TEKLOG"
        img={THEME_META_IMAGE}
      />
      <Layout padding="8rem 3rem 4rem 3rem" mobilePadding="8rem 1rem 0 1rem">
        <LandingTemplate posts={posts} key="RecentPosts" />
      </Layout>
    </>
  );
};

export default Home;
