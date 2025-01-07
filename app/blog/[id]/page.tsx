import React, { Suspense } from "react";

import BlogDetailPageTemplate from "@/components/blog/BlogDetailPageTemplate";
import getBlogDetailId from "@/libs/api/getBlogDetailId";
import getBlogDetail from "@/libs/api/getBlogDetail";
import { getImgSrc } from "components/blog/utils";

import { htmlReplace } from "@/libs/utils";
import Loading from "@/components/common/Loading";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<Loading style={`lg:w-full`} />}>
      <BlogDetailPageTemplate id={id} />
    </Suspense>
  );
};

export default page;

export const generateStaticParams = async () => {
  const paths = await getBlogDetailId();

  return paths;
};

export const revalidate = 3600;

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id) {
    return {};
  }
  const data = await getBlogDetail(id);

  if (!data || !data.detail) {
    return {};
  }

  const ImageSrc = getImgSrc(data.detail.content);

  return {
    title: `${data.detail.title} - teklog`,
    description: htmlReplace(data.detail.content).slice(0, 200),
    openGraph: {
      title: `${data?.detail?.title} - teklog`,
      description: htmlReplace(data.detail.content).slice(0, 200) || "",
      images: ImageSrc,
    },
  };
}
