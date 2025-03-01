import React from "react";
import BlogEditTemplate from "@/components/blog/edit/BlogEditTemplate";
import ReactQueryProvider from "@/components/common/providers/ReactQueryProvider";

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

  return (
    <ReactQueryProvider>
      <BlogEditTemplate lists={lists} />
    </ReactQueryProvider>
  );
};
export default page;
