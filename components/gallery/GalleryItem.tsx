// import Image from "next/image";
// import Link from "next/link";
// import { clsx } from "clsx";
// import { getContentImg } from "@/libs/utils";
// import { SQUARE_BASE_64_BLUR } from "@/libs/constants";
// import {
//   MorphingDialog,
//   MorphingDialogClose,
//   MorphingDialogContainer,
//   MorphingDialogContent,
//   MorphingDialogDescription,
//   MorphingDialogImage,
//   MorphingDialogSubtitle,
//   MorphingDialogTitle,
//   MorphingDialogTrigger,
// } from "@/components/common/module/morphing-dialog";
// import dayjs from "dayjs";
//
// const GalleryItem = ({
//   id,
//   url,
//   index,
//   isOldPhotos,
//   createdAt,
// }: {
//   id?: number;
//   url: string;
//   index: number;
//   isOldPhotos: boolean;
//   createdAt?: string;
// }) => {
//   const contentUrl = isOldPhotos ? url : getContentImg(url);
//
//   return (
//     <>
//       {!isOldPhotos && (
//         <Link
//           className={clsx(
//             "relative group",
//             "cursor-pointer transition duration-300 ",
//             "max-w-[300px] max-h-[400px]",
//             "flex items-end lg:block",
//           )}
//           href={`/gallery/${id}`}
//         >
//           <Image
//             className={`
//         flex-grow
//         mb-10
//         group-hover:blur-md
//         group-hover:invert
//         transition duration-300`}
//             alt={`gallery_${id}`}
//             src={contentUrl}
//             fetchPriority={index <= 8 ? "high" : "auto"}
//             width={200}
//             height={300}
//             placeholder={"blur"}
//             blurDataURL={SQUARE_BASE_64_BLUR}
//           />
//         </Link>
//       )}
//
//       {!!isOldPhotos && (
//         <MorphingDialog
//           transition={{
//             type: "spring",
//             bounce: 0.05,
//             duration: 0.25,
//           }}
//         >
//           <MorphingDialogTrigger className="flex flex-col overflow-hidden my-4 border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900">
//             <MorphingDialogImage
//               src={contentUrl}
//               alt={`~2022 by tek`}
//               className="w-full"
//             />
//             <div className="flex flex-grow flex-row items-end justify-between p-2">
//               <div>
//                 <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
//                   {createdAt && dayjs(createdAt).format(`YYYY`)}
//                 </MorphingDialogTitle>
//                 <MorphingDialogSubtitle className="text-xs text-gray-400 dark:text-zinc-400">
//                   ⓒ all rights reserved
//                 </MorphingDialogSubtitle>
//               </div>
//             </div>
//           </MorphingDialogTrigger>
//           <MorphingDialogContainer>
//             <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]">
//               <MorphingDialogImage
//                 src={url}
//                 alt={`~2022 pics by tek`}
//                 className="h-full w-full"
//               />
//               <div className="p-6">
//                 <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
//                   {createdAt && dayjs(createdAt).format(`YYYY`)}
//                 </MorphingDialogTitle>
//                 <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
//                   by Tekwoo Lee
//                 </MorphingDialogSubtitle>
//                 <MorphingDialogDescription
//                   disableLayoutAnimation
//                   variants={{
//                     initial: { opacity: 0, scale: 0.8, y: 100 },
//                     animate: { opacity: 1, scale: 1, y: 0 },
//                     exit: { opacity: 0, scale: 0.8, y: 100 },
//                   }}
//                 >
//                   <p className="mt-2"></p>
//                   <p className="text-zinc-500"></p>
//                 </MorphingDialogDescription>
//               </div>
//               <MorphingDialogClose className="text-zinc-50" />
//             </MorphingDialogContent>
//           </MorphingDialogContainer>
//         </MorphingDialog>
//       )}
//     </>
//   );
// };
//
// export default GalleryItem;
