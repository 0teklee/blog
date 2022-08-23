import Image from "next/image";
import React from "react";
import styled from "styled-components";

const HomeListItem = ({ posts }) => {
  let imageId = 0;
  const handlePresetImage = (): void => {
    if (imageId === 6) {
      imageId = 0;
    }
    imageId = imageId + 1;
  };

  const dayJs = (date: string): string => {
    return date.slice(0, 10).replaceAll("-", ".");
  };
  return (
    <>
      {posts && posts.length === 0 ? (
        <__NoDataWrapper>
          <__NoData>No Posts Yet</__NoData>
        </__NoDataWrapper>
      ) : (
        posts
          .filter((item) => item.title && item.content)
          .map((item) => {
            handlePresetImage();
            return (
              <>
                <__BlogItemWrapper key={item.id}>
                  <__BlogBackDrop
                    src={item.img || `/asset/preset-pic-${imageId}.jpg`}
                    alt="teklog-recent-post"
                    layout="fill"
                  />
                  <__BlogItemBox>
                    <__BlogTitle>{item.title}</__BlogTitle>
                    <__BlogContent>
                      {item.content.replace(/<[^>]*>/g, ` `)}
                    </__BlogContent>
                  </__BlogItemBox>
                  <__BlogItemFooter>
                    <p>{dayJs(item.createdAt)}</p>
                    <p>{`n°${item.id}`}</p>
                  </__BlogItemFooter>
                  <__BlogCopyRight>
                    <p>ⓒ All Rights Reserved by teklee </p>
                  </__BlogCopyRight>
                </__BlogItemWrapper>
              </>
            );
          })
      )}
    </>
  );
};

export default HomeListItem;

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
  background-size: 100%;
  background-blend-mode: overlay;
  transition: 0.5s;

  z-index: 0;
`;

const __BlogItemWrapper = styled(__Wrapper)`
  flex-direction: column;
  justify-content: center;

  max-width: 100rem;
  min-width: 10rem;

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
`;

const __BlogTitle = styled.div`
  width: inherit;
  padding: 0 1rem;
  margin-bottom: 1.2rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  font-family: "Tenon", "IBM Plex Sans KR", "Spoqa Han Sans Neo", sans-serif;
  font-size: 2rem;
  font-weight: 700;

  transition: 0.2s;

  @media (min-width: 720px) and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const __BlogContent = styled.div`
  display: -webkit-box;
  width: 100%;
  padding: 0 1rem;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-all;
  line-height: 1.6rem;
  height: 3.2rem;
  overflow: hidden;

  font-size: 1.2rem;
  font-weight: 300;
  font-family: "tenon", "IBM Plex Sans KR", sans-serif;

  @media only screen and (min-width: 720px) and (max-width: 900px) {
    font-size: 1rem;
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
  font-family: "IBM Plex Sans";
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
  font-family: "IBM Plex Sans";
  font-weight: 400;

  @media only screen and (min-width: 720px) and (max-width: 1100px) {
    display: none;
  }
`;
