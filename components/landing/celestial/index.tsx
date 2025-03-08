import React from "react";
import CelestialBlog from "@/components/landing/celestial/CelestialBlog";
import CelestialLayout from "@/components/landing/celestial/CelestialLayout";

const CelestialRSC = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/main/celestial`, {
    next: { revalidate: 60 * 60 * 1000 },
  });
  const { posts, categories } = await res.json();

  return (
    <CelestialLayout>
      <CelestialBlog posts={posts} categories={categories} />
    </CelestialLayout>
  );
};

export default CelestialRSC;
