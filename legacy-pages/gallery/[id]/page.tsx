// import GalleryDetailTemplate from "@/components/gallery/GalleryDetailTemplate";
// import {
//   IGalleryGetCategorySideBar,
//   IGalleryPostGetDetail,
// } from "@/components/blog/types";
// import getGalleryDetail from "@/libs/api/getGalleryDetail";
// import getBlogDetailId from "@/libs/api/getBlogDetailId";
// import { THEME_META_IMAGE } from "@/libs/constants";
//
// interface IProps {
//   post: IGalleryPostGetDetail;
//   categoryList: IGalleryGetCategorySideBar[];
// }
//
// const page = async (props: { params: Promise<{ id: string }> }) => {
//   const params = await props.params;
//
//   const { id } = params;
//
//   /* Wrong Paths Branch*/
//   const post = await getGalleryDetail(id);
//
//   const { detail } = post;
//   const { imgUrl, createdAt, id: postId, title, galleryCategory } = detail;
//
//   return (
//     <GalleryDetailTemplate
//       content={imgUrl}
//       createdAt={createdAt}
//       id={postId}
//       title={title}
//       category={galleryCategory.name}
//     />
//   );
// };
//
// export default page;
// export const generateStaticParams = async () => {
//   const paths = await getBlogDetailId();
//
//   return paths;
// };
//
// export async function generateMetadata(props: {
//   params: Promise<{ id: string }>;
// }) {
//   const params = await props.params;
//
//   const { id } = params;
//
//   if (!id) {
//     return {};
//   }
//   const data = await getGalleryDetail(id);
//
//   if (!data) {
//     return {};
//   }
//
//   // const ImageSrc = getImgSrc(data.detail?.imgUrl) || THEME_META_IMAGE;
//
//   return {
//     title: `${data.detail.title} - teklog`,
//     description: data.detail.title,
//     openGraph: {
//       title: `${data.detail.title} - teklog`,
//       description: data.detail.title,
//       // images: ImageSrc,
//     },
//   };
// }
