import React from "react";
import BlogEditTemplate from "@/components/blog/edit/BlogEditTemplate";

const getEditList = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blog/list/edit`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌[SERVER]:blog/list/edit GET ERROR");
  }
};

const page = async () => {
  const lists = await getEditList();

  return <BlogEditTemplate lists={lists} />;
};
export default page;
