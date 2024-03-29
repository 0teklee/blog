"use client";

import React from "react";
import Editor from "components/common/Editor";
import Title from "components/common/Title";
import { useSearchParams } from "next/navigation";
import { putEditBlogContent } from "libs/utils/fetcher";

const index = () => {
  const params = useSearchParams();
  const id = params?.get("id") || "";
  const handleSubmit = (title: string, content: string, category: string) => {
    putEditBlogContent(title, content, category, id);
  };
  return (
    <div className="flex flex-col items-center w-full p-0">
      <Title title={`Edit Blog Post - id: ${id}`} customStyle={`text-center`} />
      <Editor handler={handleSubmit} />
    </div>
  );
};

export default index;
