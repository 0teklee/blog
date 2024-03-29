"use client";

import React from "react";
import { postBlogContent } from "@/libs/utils/fetcher";
import Title from "@/components/common/Title";
import Editor from "@/components/common/Editor";

const BlogCreateTemplate = () => {
  const handleSubmit = (title: string, content: string, category: string) => {
    postBlogContent(title, content, category);
  };
  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Create Blog" customStyle={`text-center`} />
      <Editor handler={handleSubmit} />
    </div>
  );
};

export default BlogCreateTemplate;
