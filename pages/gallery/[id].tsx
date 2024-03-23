import GalleryDetailTemplate from "components/gallery/GalleryDetailTemplate";

import MetaTag from "components/common/MetaTag";
import Loading from "components/common/Loading";
import { imgSrcReplaceReg } from "libs/utils/regExp";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  IGalleryGetCategorySideBar,
  IGalleryPostGetDetail,
} from "types/IBlogItem";
import getGalleryDetailId from "pages/api/getGalleryDetailId";
import getGalleryDetail from "pages/api/getGalleryDetail";
import getGalleryCategoryList from "pages/api/getGalleryCategoryList";
import htmlReplace from "libs/utils/htmlReplace";

interface IProps {
  post: IGalleryPostGetDetail;
  categoryList: IGalleryGetCategorySideBar[];
}

const index = (props: IProps) => {
  /* Wrong Paths Branch*/
  const router = useRouter();
  if (!props.post) {
    setTimeout(() => router.push("/gallery"), 60000);
    return (
      <>
        <MetaTag
          title="teklog"
          description="teklog - loading"
          url={`https://www.teklog.site/gallery`}
        />
        <Loading />
      </>
    );
  }

  const { post, categoryList } = props;
  const { detail } = post;
  const { imgUrl, createdAt, id, title, galleryCategory } = detail;

  const matchSrc = imgUrl.match(imgSrcReplaceReg);

  const isImage =
    imgUrl && matchSrc && matchSrc.some((item) => item.includes("cloudinary"));

  const imgSrc =
    (isImage &&
      matchSrc
        .map((src) => src.slice(4, -1))[0]
        .replace("http", "https")
        .replaceAll(`"`, "")) ||
    "";
  return (
    <>
      <MetaTag
        title={`${title} - Teklog`}
        description={htmlReplace(imgUrl)}
        url={`https://www.teklog.com/site/gallery/${id}`}
        img={imgSrc}
      />
      <GalleryDetailTemplate
        content={imgUrl}
        createdAt={createdAt}
        id={id}
        title={title}
        category={galleryCategory.name}
        categories={categoryList}
      />
    </>
  );
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const postsId = await getGalleryDetailId();
  const paths = postsId?.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params?.id) return { props: {} };

  const post = await getGalleryDetail(params.id);
  const categoryList = await getGalleryCategoryList();

  return {
    props: { post, categoryList },
    revalidate: 3,
  };
};
