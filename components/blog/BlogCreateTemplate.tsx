"use client";

import React from "react";
import { postBlogContent } from "@/libs/fetcher";
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
    name === process.env.ADMIN_NAME ||
    email === process.env.ADMIN_EMAIL ||
    process.env.NODE_ENV === "development";

  return (
    <div className="flex flex-col items-center w-full">
      {isAdmin && <Editor handler={handleSubmit} />}
    </div>
  );
};

export default BlogCreateTemplate;
