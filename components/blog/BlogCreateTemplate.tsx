"use client";

import React from "react";
import { postBlogContent } from "@/libs/fetcher";
import Title from "@/components/common/Title";
import Editor from "@/components/common/Editor";
import { useSession } from "next-auth/react";

const BlogCreateTemplate = () => {
  const handleSubmit = (title: string, content: string, category: string) => {
    postBlogContent(title, content, category);
  };
  const session = useSession();
  const name = session?.data?.user?.name || "unknown";
  const email = session?.data?.user?.email || "unknown";
  const isAdmin =
    name === process.env.ADMIN_NAME || email === process.env.ADMIN_EMAIL;

  console.log("isAdmin", isAdmin);
  console.log("session", session, process.env.ADMIN_EMAIL);

  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Create Blog" customStyle={`text-center`} />
      {isAdmin && <Editor handler={handleSubmit} />}
    </div>
  );
};

export default BlogCreateTemplate;
