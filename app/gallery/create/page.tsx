import React, { Suspense } from "react";
import GalleryCreateTemplate from "@/components/gallery/GalleryCreateTemplate";

const page = () => (
  <Suspense fallback={<>Loading...</>}>
    <GalleryCreateTemplate />
  </Suspense>
);

export default page;
