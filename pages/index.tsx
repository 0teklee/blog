import { PrismaClient } from "@prisma/client";
import HomeTemplate from "components/Template/Home/HomeTemplate";
import React, { useState } from "react";
import getMainPosts from "./api/getMainPosts";
import getBlogPosts from "./api/getMainPosts";

const Home = (props) => {
  const { posts } = props;
  return <HomeTemplate posts={posts} />;
};

export default Home;

export async function getServerSideProps({ req, res }) {
  const posts = await getMainPosts();

  return {
    props: { posts },
  };
}
