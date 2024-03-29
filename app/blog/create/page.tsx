import React from "react";
import BlogCreateTemplate from "@/components/blog/BlogCreateTemplate";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();

  return <>{!!session && <BlogCreateTemplate />}</>;
};

export default page;
