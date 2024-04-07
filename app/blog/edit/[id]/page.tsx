import React from "react";
import BlogEditTemplate from "@/components/blog/BlogEditTemplate";

const page = () => {
  return (
    <>
      <h1 className={`text-xl text-blue-500 font-semibold`}>Edit Post</h1>
      <BlogEditTemplate />
    </>
  );
};
export default page;
