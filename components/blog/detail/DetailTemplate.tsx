import React, { cache, Suspense } from "react";
import ParsedHTMLTag from "@/components/common/module/ParsedHTMLTag";
import DetailFooterNav from "@/components/blog/detail/DetailFooterNav";
// import getBlogDetail from "@/libs/api/getBlogDetail";
import { formatBlogContent } from "@/components/blog/utils";
import DetailIndexRightNav from "@/components/blog/detail/DetailIndexRightNav";
import LoaderSpin from "@/components/common/module/LoaderSpin";
import MermaidParser from "@/components/blog/detail/MermaidParser";
import { IBlogDetailResponse } from "@/components/blog/detail/type";
import DetailLayout from "@/components/blog/detail/DetailLayout";
import DetailHeader from "@/components/blog/detail/DetailHeader";

const getBlogDetail = async (id: string): Promise<IBlogDetailResponse> => {
  const res = await fetch(`${process.env.BASE_URL}/api/blog/${id}`);
  const data = await res.json();
  return data;
};

const getCacheBlogDetail = cache(getBlogDetail);

const DetailTemplate = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { content, createdAt, title, categories } =
    await getCacheBlogDetail(id);

  const updatedContent = formatBlogContent(content);

  return (
    <>
      <DetailIndexRightNav content={content} />
      <DetailLayout>
        <DetailHeader
          id={id}
          title={title}
          categories={categories}
          createdAt={createdAt}
        />
        <div className="relative blog-post-content">
          <Suspense fallback={<LoaderSpin />}>
            <ParsedHTMLTag html={updatedContent} />
            <MermaidParser />
          </Suspense>
        </div>
        <Suspense fallback={<LoaderSpin />}>
          <DetailFooterNav id={id} />
        </Suspense>
      </DetailLayout>
    </>
  );
};

export default DetailTemplate;
