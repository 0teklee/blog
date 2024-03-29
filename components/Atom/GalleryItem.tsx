import styled from "styled-components";
import Image from "next/image";
import dayJs from "libs/utils/dayJs";
import { theme } from "styles/theme";
import { getContentImg } from "libs/utils/contentImg";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import isNightModeState from "libs/recoil/isNightModeState";
import Router from "next/router";

const GalleryItem = ({
  id,
  url,
  createdAt = "20__",
  title = "untitled",
  width,
  height,
  category,
}: {
  id?: number;
  url: string;
  title?: string;
  createdAt?: string;
  width?: string;
  height?: string;
  category: string;
}) => {
  const [naturalSize, setNaturalSize] = useState({
    width: 0,
    height: 0,
  });
  const isNightMode = useRecoilValue<string>(isNightModeState);
  const router = Router;

  return (
    <__Container>
      <__ImageItemWrapper>
        {!width || !height ? (
          <__ImageInnerWrapper
            width={
              category === "Drawings"
                ? naturalSize.width * 0.5
                : naturalSize.width
            }
            height={
              category === "Drawings"
                ? naturalSize.height * 0.5
                : naturalSize.height
            }
            onClick={() => {
              router.push(`/gallery/${id}`);
            }}
            isPreset={false}
          >
            <__ImgBackDrop
              src={getContentImg(url)}
              alt="teklog-gallery"
              layout="fill"
              objectFit="contain"
              onLoadingComplete={(e) => {
                setNaturalSize({
                  width: e.naturalWidth,
                  height: e.naturalHeight,
                });
              }}
              priority
            />
            <__ImageItemFooter isNight={isNightMode === "mode"}>
              <p>{dayJs(createdAt)}</p>
              <p>{title}</p>
            </__ImageItemFooter>
          </__ImageInnerWrapper>
        ) : (
          <__ImageInnerWrapper isPreset>
            <Image
              src={url}
              alt="teklog-gallery"
              width={typeof width === "string" ? parseInt(width) : width}
              height={typeof height === "string" ? parseInt(height) : height}
              loading="lazy"
            />
            <__ImageItemFooter isNight={isNightMode === "mode"} isPreset>
              <p>{dayJs(createdAt)}</p>
              <p>{title}</p>
            </__ImageItemFooter>
          </__ImageInnerWrapper>
        )}
      </__ImageItemWrapper>
    </__Container>
  );
};

export default GalleryItem;

const __Container = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 25rem;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 720px) {
    margin-right: 0rem;
  }
`;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "unset")}
`;

const __ImageInnerWrapper = styled.div<{
  width?: number;
  height?: number;
  isPreset?: boolean;
}>`
  position: relative;
  width: ${(props) => (props.width ? `${props.width * 0.8}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height * 0.8}px` : "100%")};

  cursor: ${(props) => (props.isPreset ? "default" : "pointer")};
`;

const __ImgBackDrop = styled(Image)`
  padding: 2rem;
  transition: 0.5s;
  z-index: 0;
`;

const __ImageItemWrapper = styled(__Wrapper)`
  flex-direction: column;
  justify-content: center;

  max-width: 70rem;
  min-width: 30rem;

  position: relative;
  transition: 0.5s;
  @media (max-width: 720px) {
    min-width: 0rem;
  }
`;

const __ImageItemFooter = styled.div<{ isNight: boolean; isPreset?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  ${(props) => (props.isPreset ? `padding: 0 1.5%` : null)};
  margin-top: 1rem;
  background: ${(props) => (props.isNight ? theme.colors.night : "#fff")};
  color: ${(props) => (props.isNight ? "#fff" : "#000")};

  font-size: 0.7rem;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;

  position: absolute;
  bottom: -1rem;
  left: 0;
`;
