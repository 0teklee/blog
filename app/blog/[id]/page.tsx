import React, { Suspense } from "react";

import DetailTemplate from "@/components/blog/detail/DetailTemplate";
import {
  getGithubBlogList,
  getGithubBlogDetail,
  parseBlogContent,
} from "@/libs/api/github";
import { getImgSrc } from "@/components/blog/utils";

import { htmlReplace } from "@/libs/utils";
import { DEFAULT_BLOG_ITEM } from "@/components/blog/values";
import LoaderSpin from "@/components/common/module/LoaderSpin";
import { THEME_META_IMAGE } from "@/libs/constants";
import DetailLayout from "@/components/blog/detail/DetailLayout";
import DetailHeader from "@/components/blog/detail/DetailHeader";

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
      <DetailTemplate params={props.params} />
    </Suspense>
  );
};

export default page;

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const files = await getGithubBlogList();
  return files.map((file) => ({
    id: file.name.replace(".mdx", ""),
  }));
};

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  if (!id) {
    return {};
  }
  const content = await getGithubBlogDetail(id);

  if (!content) {
    return {};
  }

  const data = parseBlogContent(id, content);

  const ImageSrc = getImgSrc(data.content);

  return {
    title: `${data.title} - teklog`,
    description: htmlReplace(data.content).slice(0, 200),
    openGraph: {
      title: `${data.title} - teklog`,
      description: htmlReplace(data.content).slice(0, 200) || "",
      images: ImageSrc || THEME_META_IMAGE,
    },
  };
}
