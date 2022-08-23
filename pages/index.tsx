import { PrismaClient } from "@prisma/client";
import HomeTemplate from "components/Template/Home/HomeTemplate";
import React, { useState } from "react";
import getBlogPosts from "./api/getBlogPosts";

const Home = (props) => {
  const { posts } = props;
  return <HomeTemplate posts={posts} />;
};

export default Home;

export async function getServerSideProps({ req, res }) {
  const posts = await getBlogPosts();

  return {
    props: { posts },
  };
}
