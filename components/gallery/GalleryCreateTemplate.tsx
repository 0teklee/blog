import React from "react";
import Editor from "@/components/common/Editor";
import handlePostGallery from "@/libs/fetcher";

const GalleryCreateTemplate = () => {
  const handleSubmit = (title: string, content: string, category: string) => {
    handlePostGallery(`/api/postGallery`, title, content, category);
  };
  return (
    <div className="flex flex-col items-center w-full p-0 md:p-[8rem] lg:p-[17rem]">
      <Editor handler={handleSubmit} />
    </div>
  );
};

export default GalleryCreateTemplate;
