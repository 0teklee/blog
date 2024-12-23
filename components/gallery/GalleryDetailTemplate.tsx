import ParsedHTMLTag from "components/common/module/ParsedHTMLTag";
import { clsx } from "clsx";
import dayjs from "dayjs";
import { getImgSrc } from "components/blog/utils";
import Image from "next/image";
import GoBackButton from "components/common/module/GoBackButton";
import { Inter } from "next/font/google";

interface IProps {
  content: string;
  createdAt: string;
  id: number;
  title: string;
  category?: string;
  categories?: { name: string }[];
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BlogDetailPageTemplate = ({
  content,
  createdAt,
  id,
  title,
  category,
}: IProps) => {
  const caption = content.replace(/<img .*?>/g, "");
  const imgTag = getImgSrc(content);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center",
        "p-0 lg:pl-36 lg:pr-12 lg:py-8",
        "w-full ",
        inter.className,
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-center justify-start lg:justify-between lg:flex-row gap-5",
          "w-full h-full",
        )}
      >
        <div className={clsx("w-full order-last lg:order-first lg:w-fit")}>
          <p className={clsx("w-full mb-2", "break-words text-3xl")}>{title}</p>
          <div
            className={clsx(
              "flex items-center justify-between",
              "w-full mb-2 text-lg",
            )}
          >
            <p>{dayjs(createdAt).format("YYYY-MM-DD")}</p>
            <p>{`n°${id}`}</p>
          </div>
          <p className="mb-12">category : {category}</p>
          {caption && <ParsedHTMLTag html={caption} />}
        </div>
        <div
          className={clsx(
            "relative",
            "w-96 h-[576px] lg:w-[50vw] px-3.5 lg:max-w-[600px] lg:h-[70vh] lg:overflow-hidden",
            "my-5 px-3.5 lg:p-0",
            "text-lg leading-8",
            "aspect-w-4 aspect-h-3",
          )}
        >
          {imgTag ? (
            <Image
              src={imgTag}
              alt={title}
              fill={true}
              className="object-contain"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <GoBackButton />
    </div>
  );
};

export default BlogDetailPageTemplate;
