import React from "react";
import BlogEditTemplate from "@/components/blog/BlogEditTemplate";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();

  const name = session?.user?.name || "unknown";
  const email = session?.user?.email || "unknown";

  const isAdmin =
    name === process.env.ADMIN_NAME || email === process.env.ANMIN_EMAIL;

  return (
    <>
      <h1 className={`text-xl text-blue-500 font-semibold`}>Edit Post</h1>
      {!!session && isAdmin && <BlogEditTemplate />}
    </>
  );
};
export default page;
