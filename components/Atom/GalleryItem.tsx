import styled from "styled-components";
import Image from "next/image";
import dayJs from "libs/utils/dayJs";
import { theme } from "styles/theme";

const GalleryItem = ({
  url,
  createdAt = "20__",
  title = "untitled",
  width,
  height,
}: {
  url: string;
  title?: string;
  createdAt?: string;
  width: string;
  height: string;
}) => {
  return (
    <__Container>
      <__ImageItemWrapper>
        <__ImgBackDrop
          src={url}
          alt="teklog-gallery"
          width={width}
          height={height}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/asset/lazy-loading.jpg"
        />
        <__ImageItemFooter>
          <p>{dayJs(createdAt)}</p>
          <p>{title}</p>
        </__ImageItemFooter>
      </__ImageItemWrapper>
    </__Container>
  );
};

export default GalleryItem;

const __Container = styled.div`
  width: 100%;
  flex-basis: 25rem;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "unset")}
`;

const __ImgBackDrop = styled(Image)`
  width: 100%;
  height: 100%;
  transition: 0.5s;

  z-index: 0;
`;

const __ImageItemWrapper = styled(__Wrapper)`
  flex-direction: column;
  justify-content: center;

  max-width: 100rem;
  min-width: 10rem;

  position: relative;
  transition: 0.5s;
`;

const __ImageItemFooter = styled.div`
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
