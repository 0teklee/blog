import React from "react";
import GalleryCreateTemplate from "@/components/gallery/GalleryCreateTemplate";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();

  return <>{!!session && <GalleryCreateTemplate />}</>;
};

export default page;
