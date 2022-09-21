import { getContentImg, setCategoryPresetImg } from "libs/utils/contentImg";
import dayJs from "libs/utils/dayJs";
import htmlReplace from "libs/utils/htmlReplace";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import { sizes, theme } from "styles/theme";
import { IBlogGetListItem } from "types/IBlogItem";

const BlogListItem = ({
  id,
  content,
  createdAt,
  title,
  categories,
  tags,
}: IBlogGetListItem) => {
  const router = Router;

  /*블로그 내용 미리보기 */
  const contentReplace = htmlReplace(content);
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={getContentImg(content) || setCategoryPresetImg(categories.name)}
          as="image"
        />
      </Head>
      <__Container
        key={`${id}_container`}
        onClick={() => router.push(`/blog/${id}`)}
      >
        <__Wrapper key={`${id}_wrapper`}>
          <__HeaderImgWrapper>
            <__HeaderImg
              src={
                getContentImg(content) || setCategoryPresetImg(categories.name)
              }
              key={`${id}_img`}
              width="200px"
              height="200px"
              layout="responsive"
              objectFit="cover"
              alt={title}
              sizes="(max-width: 720px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </__HeaderImgWrapper>
          <__ContentsWrapper key={`${id}_`}>
            <__ContentTitle key={`${id}_title`}>{title}</__ContentTitle>
            <__CategoryDateWrapper key={`${id}_categoryDate`}>
              <__CategoryWrapper key={`${id}_categoryInner`}>
                <p>category : </p>
                <p>{categories.name}</p>
              </__CategoryWrapper>
              <p>{dayJs(createdAt)}</p>
            </__CategoryDateWrapper>
            <p>{contentReplace}</p>
            <__TagWrapper key={`${id}_tag`}>
              {tags?.map((tag, i) => (
                <span key={`${tag}_${i}`}>#{tag.tag}</span>
              ))}
            </__TagWrapper>
          </__ContentsWrapper>
        </__Wrapper>
      </__Container>
    </>
  );
};

export default BlogListItem;

const __Container = styled.section`
  margin: 2rem 0 4rem 0;
  &:hover h2 {
    color: ${theme.colors.sign};
    transition: 0.3s;
  }
`;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "space-between")}
  width: 100%;

  position: relative;
  cursor: pointer;
`;

const __HeaderImgWrapper = styled.div`
  flex: 1;
  max-width: 200px;
  max-height: 200px;
  margin-right: 3rem;
  overflow: hidden;
`;

const __HeaderImg = styled(Image)`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 720px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
    min-width: 0;
  }
`;

const __ContentsWrapper = styled.div`
  flex: 3;
  max-height: 20rem;

  & > p:nth-child(2) {
    margin-bottom: 0.8rem;
  }

  & > p:nth-child(3) {
    display: -webkit-box;
    padding-bottom: 0.3rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 1.6rem;
    font-family: "Tenon", "IBM Plex Sans KR", sans-serif;
    height: 3.2rem;
    overflow: hidden;
  }

  @media only screen and (min-width: 720px) and (max-width: ${sizes.laptop}) {
    width: 24rem;
  }
`;

const __ContentTitle = styled.h2`
  display: -webkit-box;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 1.6rem;
  max-height: 3.5rem;
  overflow: hidden;
  font-family: "IBM Plex Sans KR", sans-serif;
  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const __TagWrapper = styled.div`
  display: -webkit-box;
  width: 100%;
  margin-top: 1rem;
  color: ${theme.colors.grey};

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 1rem;
  max-height: 2rem;

  font-weight: 400;
  font-size: 0.8rem;
  span {
    margin-right: 1rem;
  }
`;

const __CategoryDateWrapper = styled.div`
  ${theme.displayFlex("center", "space-between")}
  flex-wrap: wrap;
  font-weight: 500;
  width: 100%;
  margin: 0.8rem 0 1.5rem 0;
  & p {
    margin-right: 0;
    font-size: 0.8rem;
  }
`;

const __CategoryWrapper = styled.div`
  ${theme.displayFlex("center", "center")}
  p {
    font-family: "proxima-nova", "IBM Plex Sans KR", sans-serif;
    font-weight: 600;
  }
  & > p:last-child {
    margin-left: 0.5rem;
  }
`;
