import React from "react";
import BlogEditTemplate from "@/components/blog/BlogEditTemplate";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();

  return <>{!!session && <BlogEditTemplate />}</>;
};
export default page;
