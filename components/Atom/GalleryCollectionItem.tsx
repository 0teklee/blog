import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { getContentImg } from "libs/utils/contentImg";
import Router from "next/router";

const GalleryCollectionItem = ({ id, url }: { id?: number; url: string }) => {
  const [size, setSize] = useState({
    width: 200,
    height: 200,
  });
  const router = Router;
  return (
    <__Wrapper
      width={size.width}
      height={size.height}
      onClick={() => {
        router.push(`/gallery/${id}`);
      }}
    >
      <Image
        src={getContentImg(url)}
        layout="fill"
        onLoadingComplete={(e) => {
          setSize({
            width: e.naturalWidth,
            height: e.naturalHeight,
          });
        }}
      />
    </__Wrapper>
  );
};

export default GalleryCollectionItem;

const __Wrapper = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width / 5}px;
  height: ${(props) => props.height / 5}px;
  filter: grayscale(1);
  cursor: pointer;
  &:hover {
    filter: grayscale(0);
    transition: 1s;
  }
  @media screen and (max-width: 500px) {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    position: relative;
    left: 0;
  }
`;
