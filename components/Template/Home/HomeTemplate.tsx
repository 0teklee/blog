import Layout from "components/Atom/Layout";
import HomeContent from "components/pages/Home/HomeContent";
import { IBlogMainItem } from "types/IBlogItem";

const HomeTemplate = (props: { posts: IBlogMainItem[] }) => {
  const { posts } = props;
  const recentPosts = posts
    .filter((item) => item.title && item.content)
    .slice(0, 6);

  return (
    <Layout padding="8rem 3rem 4rem 3rem" mobilePadding="8rem 1rem 0 1rem">
      <HomeContent posts={recentPosts} key="RecentPosts" />
    </Layout>
  );
};

export default HomeTemplate;
