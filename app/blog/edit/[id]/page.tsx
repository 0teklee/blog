import React, { Suspense } from "react";
import BlogEditTemplate from "@/components/blog/BlogEditTemplate";

const page = () => (
  <Suspense fallback={<>Loading...</>}>
    <BlogEditTemplate />
  </Suspense>
);

export default page;
