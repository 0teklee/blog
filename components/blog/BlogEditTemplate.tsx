"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { putEditBlogContent } from "@/libs/fetcher";
import Title from "@/components/common/Title";
import Editor from "@/components/common/Editor";

const BlogEditTemplate = () => {
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

export default BlogEditTemplate;
