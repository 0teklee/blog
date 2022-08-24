import Layout from "components/Atom/Layout";
import HomeContent from "components/pages/Home/HomeContent";

const HomeTemplate = (props) => {
  const { posts } = props;
  const recentPosts = posts
    .filter((item) => item.title && item.content)
    .slice(0, 6);

  return (
    <Layout padding="0rem">
      <HomeContent posts={recentPosts} key="RecentPosts" />'
    </Layout>
  );
};

export default HomeTemplate;
