import React from "react";
import BlogEditTemplate from "@/components/blog/BlogEditTemplate";
import getEditList from "@/libs/api/getEditList";

const page = async () => {
  const lists = await getEditList();

  return <BlogEditTemplate lists={lists} />;
};
export default page;
