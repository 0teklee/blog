import MetaTag from "components/MetaTag";
import HomeTemplate from "components/Template/Home/HomeTemplate";
import { GetServerSideProps } from "next";
import { IBlogMainItem } from "types/IBlogItem";

import getMainPosts from "./api/getMainPosts";

const Home = (props: { posts: IBlogMainItem[] }) => {
  const { posts } = props;

  return (
    <>
      <MetaTag
        title="teklog"
        url="https://www.teklog.site"
        description="TEKLOG"
        img="https://res.cloudinary.com/dolziw8fv/image/upload/v1674413434/DALL_E_2023-01-23_03.46.28_-_a_sceintific_photo_of_the_most_nostalgic_sundog_during_sunset_on_ocean_provia_400_rillrw.png"
      />
      <HomeTemplate posts={posts} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const posts = await getMainPosts();

  return {
    props: { posts },
  };
};
