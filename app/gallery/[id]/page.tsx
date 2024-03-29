import GalleryDetailTemplate from "components/gallery/GalleryDetailTemplate";
import {
  IGalleryGetCategorySideBar,
  IGalleryPostGetDetail,
} from "types/IBlogItem";
import getGalleryDetail from "pages/api/getGalleryDetail";
import getBlogDetailId from "pages/api/getBlogDetailId";
import { getImgSrc } from "components/blog/utils";

interface IProps {
  post: IGalleryPostGetDetail;
  categoryList: IGalleryGetCategorySideBar[];
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  /* Wrong Paths Branch*/
  const post = await getGalleryDetail(id);

  const { detail } = post;
  const { imgUrl, createdAt, id: postId, title, galleryCategory } = detail;

  return (
    <GalleryDetailTemplate
      content={imgUrl}
      createdAt={createdAt}
      id={postId}
      title={title}
      category={galleryCategory.name}
    />
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
  const data = await getGalleryDetail(id);

  if (!data) {
    return {};
  }

  console.log("imgUrl", data.detail?.imgUrl);
  const ImageSrc = getImgSrc(data.detail?.imgUrl);

  return {
    title: `${data.detail.title} - teklog`,
    description: data.detail.title,
    openGraph: {
      title: `${data.detail.title} - teklog`,
      description: data.detail.title,
      images: ImageSrc,
    },
  };
}
