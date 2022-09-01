import MetaTag from "components/MetaTag";
import HomeTemplate from "components/Template/Home/HomeTemplate";
import { IBlogMainItem } from "types/IBlogItem";

import getMainPosts from "./api/getMainPosts";

const Home = (props: { posts: IBlogMainItem[] }) => {
  const { posts } = props;

  return (
    <>
      <MetaTag
        title="teklog"
        url="www.teklog.com"
        description="Tekwoo Lee's Tech Blog - 프론트엔드 개발자 이택우의 기술블로그 "
      />
      <HomeTemplate posts={posts} />
    </>
  );
};

export default Home;

export async function getServerSideProps({ req, res }) {
  const posts = await getMainPosts();

  return {
    props: { posts },
  };
}
