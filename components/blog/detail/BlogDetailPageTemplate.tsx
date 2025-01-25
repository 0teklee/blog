import React, { cache, Suspense } from "react";
import ParsedHTMLTag from "@/components/common/module/ParsedHTMLTag";
import BlogDetailFooterNav from "@/components/blog/detail/BlogDetailFooterNav";
import getBlogDetail from "@/libs/api/getBlogDetail";
import { formatBlogContent } from "@/components/blog/utils";
import BlogHeadingNav from "@/components/blog/detail/BlogHeadingNav";
import { DetailHeader, DetailLayout } from "@/components/blog/detail/Template";
import LoaderSpin from "@/components/common/module/LoaderSpin";

const getCacheBlogDetail = cache(getBlogDetail);

const BlogDetailPageTemplate = async ({ id }: { id: string }) => {
  const { content, createdAt, title, categories } =
    await getCacheBlogDetail(id);
  const updatedContent = formatBlogContent(content);

  return (
    <>
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
          </Suspense>
        </div>
        <Suspense fallback={<LoaderSpin />}>
          <BlogDetailFooterNav id={id} />
        </Suspense>
      </DetailLayout>
      <BlogHeadingNav content={content} />
    </>
  );
};

export default BlogDetailPageTemplate;
