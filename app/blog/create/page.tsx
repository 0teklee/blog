"use client";

import React from "react";
import Editor from "components/common/Editor";
import Title from "components/common/Title";
import { postBlogContent } from "libs/utils/fetcher";

const index = () => {
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

export default index;
