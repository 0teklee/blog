import React, { Suspense } from "react";
import getBlogDetailId from "@/libs/api/getBlogDetailId";
import getBlogDetail from "@/libs/api/getBlogDetail";
import { getImgSrc } from "@/components/blog/utils";

import { htmlReplace } from "@/libs/utils";
import { DetailHeader, DetailLayout } from "@/components/blog/detail/Template";
import { DEFAULT_BLOG_ITEM } from "@/components/blog/values";
import LoaderSpin from "@/components/common/module/LoaderSpin";

const page = async (props: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense
      fallback={
        <DetailLayout>
          <DetailHeader {...DEFAULT_BLOG_ITEM} />
          <LoaderSpin />
        </DetailLayout>
      }
    >
      {/*<BlogDetailPageTemplate params={props.params} />*/}
    </Suspense>
  );
};

export default page;

export const generateStaticParams = async () => {
  const paths = await getBlogDetailId();

  return paths;
};

export const revalidate = 600;
export const experimental_ppr = true;

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  if (!id) {
    return {};
  }
  const data = await getBlogDetail(id);

  if (!data) {
    return {};
  }

  const ImageSrc = getImgSrc(data.content);

  return {
    title: `${data.title} - teklog`,
    description: htmlReplace(data.content).slice(0, 200),
    openGraph: {
      title: `${data.title} - teklog`,
      description: htmlReplace(data.content).slice(0, 200) || "",
      images: ImageSrc,
    },
  };
}
