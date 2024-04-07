"use client";

import React from "react";
import Editor from "@/components/common/Editor";
import handlePostGallery from "@/libs/fetcher";
import { useSession } from "next-auth/react";

const GalleryCreateTemplate = () => {
  const session = useSession();

  const name = session?.data?.user?.name || "unknown";
  const email = session?.data?.user?.email || "unknown";

  const isAdmin =
    name === process.env.ADMIN_NAME || email === process.env.ANMIN_EMAIL;

  const handleSubmit = (title: string, content: string, category: string) => {
    handlePostGallery(`/api/postGallery`, title, content, category);
  };
  return (
    <div className="flex flex-col items-center w-full p-0 md:p-[8rem] lg:p-[17rem]">
      {isAdmin && <Editor handler={handleSubmit} />}
    </div>
  );
};

export default GalleryCreateTemplate;
