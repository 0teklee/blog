import React from "react";
import CelestialBlog from "@/components/landing/celestial/CelestialBlog";
import CelestialLayout from "@/components/landing/celestial/CelestialLayout";
import { getParsedGithubBlogList } from "@/libs/api/github";

import { BlogPost, Category } from "./types";

const CelestialRSC = async () => {
  const posts = await getParsedGithubBlogList();

  const mappedPosts: BlogPost[] = posts.map((post, index) => ({
    id: index,
    title: post.title,
    createdAt: new Date(post.createdAt),
    categoryId: 1,
    tags: [],
    category: { id: 1, name: "Post" },
  }));

  const categories: Category[] = [{ id: 1, name: "Post" }];

  return (
    <CelestialLayout>
      <CelestialBlog posts={mappedPosts} categories={categories} />
    </CelestialLayout>
  );
};

export default CelestialRSC;
