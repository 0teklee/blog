"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { putEditBlogContent } from "@/libs/fetcher";
import Title from "@/components/common/Title";
import Editor from "@/components/common/Editor";
import { useSession } from "next-auth/react";

const BlogEditTemplate = () => {
  const params = useSearchParams();

  const session = useSession();
  const name = session?.data?.user?.name || "unknown";
  const email = session?.data?.user?.email || "unknown";
  const isAdmin =
    name === process.env.ADMIN_NAME || email === process.env.ADMIN_EMAIL;

  const id = params?.get("id") || "";
  const handleSubmit = (title: string, content: string, category: string) => {
    putEditBlogContent(title, content, category, id);
  };
  return (
    <div className="flex flex-col items-center w-full p-0">
      <Title title={`Edit Blog Post - id: ${id}`} customStyle={`text-center`} />
      {isAdmin && <Editor handler={handleSubmit} />}
    </div>
  );
};

export default BlogEditTemplate;
