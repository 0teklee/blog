"use client";

import React, { useState } from "react";
import { putBlogPost } from "@/libs/api/putBlogEdit";
import BlogEditSelect from "@/components/blog/edit/BlogEditSelect";
import { TEditItem } from "@/components/blog/types";
import { useQuery } from "@tanstack/react-query";
import getBlogDetail from "@/libs/api/getBlogDetail";
import { useSession } from "next-auth/react";
import TiptapEditor from "@/components/common/editor/TiptapEditor";
import { convertQuillToTiptap } from "@/libs/utils";
import LoaderSpin from "@/components/common/module/LoaderSpin";

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

  const handleSubmit = async ({
    title,
    content,
    category,
  }: {
    title: string;
    content: string;
    category: string;
  }) => {
    await putBlogPost({ id: Number(selectedId), title, content });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["edit_post", selectedId],
    queryFn: () => getBlogDetail(selectedId!),
    suspense: true,
    enabled: isAdmin && !!selectedId,
  });

  return (
    <>
      {isAdmin && (
        <>
          <BlogEditSelect
            lists={lists}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
          {data && (
            <TiptapEditor
              initialTitle={data.title}
              initialCategory={data.categories.name}
              initialContent={convertQuillToTiptap(data.content)}
              handler={handleSubmit}
              isEditor={true}
            />
          )}
          {isLoading && <LoaderSpin />}
        </>
      )}
    </>
  );
};

export default BlogEditTemplate;
