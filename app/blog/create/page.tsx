import React from "react";
import BlogCreateTemplate from "@/components/blog/BlogCreateTemplate";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession({
    secret: process.env.NEXT_SECRET as string,
  });
  const name = session?.user?.name || "unknown";
  const email = session?.user?.email || "unknown";

  const isAdmin =
    name === process.env.ADMIN_NAME || email === process.env.ANMIN_EMAIL;

  return <>{!!session && !!isAdmin && <BlogCreateTemplate />}</>;
};

export default page;
