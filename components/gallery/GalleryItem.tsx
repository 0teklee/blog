import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { getContentImg } from "@/libs/utils";
import { SQUARE_BASE_64_BLUR } from "@/libs/constants";

const GalleryItem = ({
  id,
  url,
  index,
  isOldPhotos,
}: {
  id?: number;
  url: string;
  index: number;
  isOldPhotos: boolean;
}) => {
  const contentUrl = isOldPhotos ? url : getContentImg(url);

  return (
    <Link
      className={clsx(
        "relative group",
        "cursor-pointer transition duration-300 ",
        "max-w-[300px] max-h-[400px]",
        "flex items-end lg:block",
      )}
      href={`/gallery/${id}`}
    >
      <Image
        className={`
        flex-grow
        mb-10
        group-hover:blur-md 
        group-hover:invert
        transition duration-[3s]`}
        alt={`gallery_${id}`}
        src={contentUrl}
        fetchPriority={index <= 8 ? "high" : "auto"}
        width={200}
        height={300}
        placeholder={"blur"}
        blurDataURL={SQUARE_BASE_64_BLUR}
      />
    </Link>
  );
};

export default GalleryItem;
