// import React, { cache } from "react";
// import { clsx } from "clsx";
// import GalleryItem from "@/components/gallery/GalleryItem";
// import { GALLERY_2022_IMAGES } from "@/libs/constants";
// import getGalleryList from "@/libs/api/getGalleryList";
//
// const cachedGalleryList = cache(getGalleryList);
//
// const GalleryListContents = async ({ category }: { category: string }) => {
//   const isOldPhotos = category === "~2022";
//
//   const posts = isOldPhotos
//     ? GALLERY_2022_IMAGES
//     : await cachedGalleryList(category || "Collection");
//
//   return (
//     <div className={clsx("gallery-list-col gap-y-[100px] pt-12")}>
//       {posts?.map((item, i) => (
//         <GalleryItem
//           key={`${item.title}_key_${i}`}
//           id={item.id}
//           url={item.imgUrl}
//           index={i}
//           isOldPhotos={isOldPhotos}
//           createdAt={item.createdAt}
//         />
//       ))}
//     </div>
//   );
// };
//
// export default GalleryListContents;
