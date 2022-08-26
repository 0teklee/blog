import MetaTag from "components/MetaTag";
import HomeTemplate from "components/Template/Home/HomeTemplate";
import React, { useState } from "react";
import getMainPosts from "./api/getMainPosts";

const Home = (props) => {
  const { posts } = props;
  return (
    <>
      <MetaTag
        title="teklog"
        url="www.teklog.com"
        description="TedLee's Tech Blog"
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
