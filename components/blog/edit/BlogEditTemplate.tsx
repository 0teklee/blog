"use client";

import React, { useState } from "react";
import BlogEditSelect from "@/components/blog/edit/BlogEditSelect";
import { TEditItem } from "@/components/blog/types";
import { useQuery } from "@tanstack/react-query";
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
    const res = await fetch(`${process.env.BASE_URL}/api/blog/edit`, {
      method: "PATCH",
      body: JSON.stringify({
        id: Number(selectedId),
        title,
        content,
        category,
      }),
    });

    if (res.ok) {
      alert("Successfully updated");
    } else {
      alert("Failed to update");
    }
  };

  const getBlogDetail = async (id: string) => {
    const res = await fetch(`/api/blog/${id}`);
    const data = await res.json();
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["edit_post", selectedId],
    queryFn: () => getBlogDetail(selectedId!),
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
          {!!selectedId && isLoading && <LoaderSpin />}
          {!selectedId && !isLoading && <p>Please Select Post</p>}
        </>
      )}
    </>
  );
};

export default BlogEditTemplate;
