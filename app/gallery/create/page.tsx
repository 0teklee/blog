import React from "react";
import GalleryCreateTemplate from "@/components/gallery/GalleryCreateTemplate";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();

  const name = session?.user?.name || "unknown";
  const email = session?.user?.email || "unknown";

  const isAdmin =
    name === process.env.ADMIN_NAME || email === process.env.ANMIN_EMAIL;

  return <>{!!session && isAdmin && <GalleryCreateTemplate />}</>;
};

export default page;
