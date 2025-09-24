import React from "react";
import BlogEditTemplate from "@/components/blog/edit/BlogEditTemplate";
import ReactQueryProvider from "@/components/common/providers/ReactQueryProvider";

const getEditList = async () => {
  try {
    console.info("BASE_URL", process.env.BASE_URL);
    const res = await fetch(`${process.env.BASE_URL}/api/blog/list/edit`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌[SERVER]:blog/list/edit GET ERROR", err);
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
