"use client";

import React from "react";
import { useSession } from "next-auth/react";
import TiptapEditor from "@/components/common/editor/TiptapEditor";

const postBlogPost = async (payload: {
  title: string;
  content: string;
  category: string;
}) => {
  const res = await fetch(`${process.env.BASE_URL}/api/blog/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

const BlogCreateTemplate = () => {
  const handleSubmit = async (payload: {
    title: string;
    content: string;
    category: string;
  }) => {
    await postBlogPost(payload);
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
      {/*{isAdmin && <Editor handler={handleSubmit} />}*/}
      {isAdmin && <TiptapEditor handler={handleSubmit} />}
    </div>
  );
};

export default BlogCreateTemplate;
