"use client";

import React, { useState } from "react";
import Editor from "@/components/common/Editor";
import { putBlogPost } from "@/libs/api/putBlogEdit";
import BlogEditSelect from "@/components/blog/BlogEditSelect";
import { TEditItem } from "@/components/blog/types";
import { useQuery } from "@tanstack/react-query";
import getBlogDetail from "@/libs/api/getBlogDetail";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";

const BlogEditTemplate = ({ lists }: { lists: TEditItem[] }) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const session = useSession();
  const name = session?.data?.user?.name || "unknown";
  const email = session?.data?.user?.email || "unknown";
  const isAdmin =
    name === process.env.ADMIN_NAME ||
    email === process.env.ADMIN_EMAIL ||
    process.env.NODE_ENV === "development";

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const handleSubmit = async (title: string, content: string) => {
    await putBlogPost(Number(selectedId), title, content);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["edit_post", selectedId],
    queryFn: () => {
      if (!selectedId) {
        return;
      }

      return getBlogDetail(selectedId);
    },
  });

  return (
    <>
      {isAdmin && (
        <div className="flex flex-col items-center w-full p-0">
          <BlogEditSelect
            lists={lists}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
          {data && (
            <Editor
              initialTitle={data.detail?.title}
              initialCategory={data.detail?.categories.name}
              initialContent={data.detail?.content}
              handler={handleSubmit}
              isEditor={true}
            />
          )}
          {isLoading && <LoaderCircle className={`animate-spin`} />}
        </div>
      )}
    </>
  );
};

export default BlogEditTemplate;
