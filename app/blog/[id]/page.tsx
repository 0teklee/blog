import BlogDetailPageTemplate from "components/blog/BlogDetailPageTemplate";
import getBlogDetailId from "pages/api/getBlogDetailId";
import getBlogDetail from "pages/api/getBlogDetail";
import { getImgSrc } from "components/blog/utils";

import { htmlReplace } from "libs/utils/utils";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getBlogDetail(id);

  const { detail, nav } = post;
  const { content, createdAt, id: postId, title, categories } = detail;

  return (
    <BlogDetailPageTemplate
      content={content}
      createdAt={createdAt}
      title={title}
      id={postId}
      category={categories.name}
      nav={nav}
    />
  );
};

export default page;

// dynamic 으로 교체
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

  if (!data) {
    return {};
  }

  const ImageSrc = getImgSrc(data.detail.content);

  return {
    title: `${data.detail.title} - teklog`,
    description: htmlReplace(data?.detail?.content).slice(0, 200),
    openGraph: {
      title: `${data.detail.title} - teklog`,
      description: htmlReplace(data.detail.content).slice(0, 200) || "",
      images: ImageSrc,
    },
  };
}
