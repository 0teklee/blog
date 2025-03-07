import React from "react";
import CelestialBlog from "@/components/landing/celestial/CelestialBlog";

const CelestialRSC = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/main/celestial`);
  const { posts, categories } = await res.json();

  console.log(`
  posts : ${posts} \n
  category : ${categories}
  `);

  return <CelestialBlog posts={posts} categories={categories} />;
};

export default CelestialRSC;
