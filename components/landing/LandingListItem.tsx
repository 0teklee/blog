"use client";

import Image from "next/image";
import styled from "styled-components";
import presetImgs from "libs/utils/presetImg";
import { IBlogMainItem } from "types/IBlogItem";
import Head from "next/head";
import htmlReplace from "libs/utils/htmlReplace";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import dayJs from "libs/utils/dayJs";

const LandingListItem = ({ posts }: { posts: IBlogMainItem[] }) => {
  const router = useRouter();
  let imageId = -1;

  const handlePresetImage = (): void => {
    if (imageId === 6) {
      imageId = 0;
    }
    imageId = imageId + 1;
  };

  // const imgHeight = (_height: string): string => {
  //   return `h-[${_height}]`;
  // };

  return (
    <>
      <Head>
        <link rel="preload" href={presetImgs[imageId]?.url} as="image" />
      </Head>
      {posts && posts.length === 0 ? (
        <__NoDataWrapper key="noItemWrapper">
          <__NoData key="noData">No Posts Yet</__NoData>
        </__NoDataWrapper>
      ) : (
        posts
          .filter((item) => item.title && item.content)
          .map((item) => {
            handlePresetImage();
            return (
              <div className={clsx("w-full")} key={`container_${item.id}`}>
                <div
                  key={item.id}
                  onClick={() => {
                    router.push(`/blog/${item.id}`);
                  }}
                  className={clsx(
                    "relative",
                    "flex flex-col justify-center",
                    "cursor-pointer",
                    "relative",
                    "transition-all duration-500",
                    "max-w-[100rem] min-w-[10rem] w-[270px]",
                    // imgHeight(presetImgs[imageId]?.height)
                  )}
                >
                  <Image
                    key={`img_${item.id}`}
                    className={clsx("w-full", "object-cover")}
                    src={presetImgs[imageId]?.url}
                    alt="teklog-recent-post"
                    fill={true}
                    sizes="(min-width: 75em) 33vw,
                    (min-width: 48em) 50vw,
                    100vw"
                    priority={true}
                  />
                  <div
                    className={clsx(
                      "absolute",
                      "text-center",
                      "top-1/2",
                      "left-1/2",
                      "-translate-x-1/2 -translate-y-1/2",
                      "w-full",
                      "p-4",
                      "text-transparent",
                      "z-10",
                      "sm:font-normal sm:p-0",
                      "md:font-normal md:p-0",
                      "lg:text-lg lg:p-0",
                    )}
                  >
                    <div
                      className={clsx(
                        "w-inherit",
                        "px-4",
                        "mb-5",
                        "overflow-hidden",
                        "text-ellipsis",
                        "whitespace-nowrap",
                        "text-center",
                        "font-[Tenon, 'IBM Plex Sans KR', sans-serif]",
                        "text-4xl",
                        "font-bold",
                        "transition-all duration-200",
                        "sm:text-3xl",
                        "md:text-3xl",
                        "lg:text-3xl",
                      )}
                    >
                      {item.title}
                    </div>
                    <div
                      className={clsx(
                        //
                        "w-full",
                        "px-4",
                        "line-clamp-2",
                        "break-words",
                        "overflow-hidden",
                        "text-base",
                        "font-light",
                        "font-[Tenon, 'IBM Plex Sans KR', sans-serif]",
                        "leading-6",
                        "max-h-16",
                        "sm:text-sm",
                        "md:text-sm",
                        "lg:text-sm",
                      )}
                    >
                      {htmlReplace(item.content)}
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "",
                      "flex",
                      "items-start",
                      "justify-between",
                      "w-full",
                      "mt-4",
                      "bg-white",
                      "text-black",
                      "text-xs",
                      "font-normal",
                      "font-[IBM Plex Sans KR, sans-serif]",
                      "absolute",
                      "bottom-[-1rem]",
                      "left-0",
                    )}
                  >
                    <p>{dayJs(item.createdAt)}</p>
                    <p>{`n°${item.id}`}</p>
                  </div>
                  <__BlogCopyRight key={`copyright_${item.id}`}>
                    <p>ⓒ All Rights Reserved by teklee </p>
                  </__BlogCopyRight>
                </div>
              </div>
            );
          })
      )}
    </>
  );
};

export default LandingListItem;

const __Container = styled.div`
  width: 100%;
`;

const __Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const __NoDataWrapper = styled(__Wrapper)`
  justify-content: center;
  padding: 5rem;
`;

const __NoData = styled.h1`
  color: #000;
  font-size: 4rem;
  font-weight: 500;
`;

const __BlogBackDrop = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  transition: 0.5s;

  z-index: 0;
`;

const __BlogItemWrapper = styled(__Wrapper)<{ height: string }>`
  flex-direction: column;
  justify-content: center;

  max-width: 100rem;
  min-width: 10rem;
  width: 270px;
  height: ${(props) => props.height};

  padding: 70% 50%;
  cursor: pointer;

  position: relative;
  transition: 0.5s;

  &:hover ${__BlogBackDrop} {
    filter: blur(2px);
    -webkit-fiter: blur(2px);
    transition: 0.5s;
  }

  &:hover > div {
    color: #fff;
    transition: 0.5s;
  }

  @media only screen and (max-width: 720px) {
    &:hover > div {
      color: #fff;

      background: #0000004b;
      backdrop-filter: invert(1);
      transition: 0.5s;
    }
  }
`;

const __BlogItemBox = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 1rem 2rem;

  color: transparent;

  z-index: 1;
  @media (min-width: 720px) and (max-width: 900px) {
    font-size: 1.2rem;
    padding: 0;
  }
`;

const __BlogTitle = styled.div`
  width: inherit;
  padding: 0 1rem;
  margin-bottom: 1.2rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  font-family: "Tenon", "IBM Plex Sans KR", sans-serif;
  font-size: 2rem;
  font-weight: 700;

  transition: 0.2s;

  @media (min-width: 720px) and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const __BlogContent = styled.div`
  display: -webkit-box;
  width: 100%;
  padding: 0 1rem;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6rem;
  max-height: 3.2rem;
  overflow: hidden;

  font-size: 1.2rem;
  font-weight: 300;
  font-family: "Tenon", "IBM Plex Sans KR", sans-serif;

  @media only screen and (min-width: 720px) and (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

const __BlogItemFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  margin-top: 1rem;
  background: #fff !important;

  color: #000;
  font-size: 0.7rem;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;

  position: absolute;
  bottom: -1rem;
  left: 0;
`;

const __BlogCopyRight = styled.div`
  position: absolute;
  bottom: -1rem;
  color: #000;
  font-size: 0.6rem;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;

  @media only screen and (min-width: 720px) and (max-width: 1100px) {
    display: none;
  }
`;
