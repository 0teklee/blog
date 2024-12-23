import BlogDetailPageTemplate from "components/blog/BlogDetailPageTemplate";
import getBlogDetailId from "pages/api/getBlogDetailId";
import getBlogDetail from "pages/api/getBlogDetail";
import { getImgSrc } from "components/blog/utils";

import { htmlReplace } from "@/libs/utils";
import Loading from "@/components/common/Loading";
import React, { Suspense } from "react";
import BlogTableContent from "@/components/blog/BlogTableContent";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getBlogDetail(id);

  if (!post || !post.detail) {
    return (
      <>
        <div className={`w-full`}>
          <Loading />
        </div>
      </>
    );
  }

  const { detail, nav } = post;
  const { content, createdAt, id: postId, title, categories } = detail;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BlogDetailPageTemplate
          content={content}
          createdAt={createdAt.toString()}
          title={title}
          id={postId}
          category={categories.name}
          nav={nav}
        />
      </Suspense>
      <BlogTableContent content={content} />
    </>
  );
};

export default page;

export const generateStaticParams = async () => {
  const paths = await getBlogDetailId();

  return paths;
};

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
