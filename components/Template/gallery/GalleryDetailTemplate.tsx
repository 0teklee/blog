import Layout from "components/Atom/Layout";
import dayJs from "libs/utils/dayJs";
import styled from "styled-components";
import { sizes, theme } from "styles/theme";
import Router from "next/router";
import GallerySidebar from "components/Module/GallerySidebar";
import { IBlogGetCategorySideBar } from "types/IBlogItem";
import Head from "next/head";
import htmlParser from "libs/utils/htmlParser";
import { imgSrcReplaceReg } from "libs/utils/regExp";

interface IProps {
  content: string;
  createdAt: string;
  id: number;
  title: string;
  category?: string;
  categories?: IBlogGetCategorySideBar[];
}

const BlogDetailPageTemplate = ({
  content,
  createdAt,
  id,
  title,
  category,
  categories,
}: IProps) => {
  const router = Router;

  const caption = content.replace(/<img .*?>/g, "");
  const imgTagExtract = content.match(/<img .*?>/g);

  const updatedContent = content
    .replaceAll(
      "<img",
      `<img alt="img" width= "100%" height="100%"
    `
    )
    .replaceAll("http://res.cloudinary.com", "https://res.cloudinary.com")
    .replaceAll("</img>", "/>");

  const isImage = updatedContent.match(imgSrcReplaceReg);
  const imgSrcArr =
    isImage &&
    updatedContent
      .match(imgSrcReplaceReg)
      .filter((src) => src.includes("https://res.cloudinary.com"))
      .map((src) => src.slice(4, -1).replaceAll(`"`, ""));
  const imgTag = imgTagExtract[0];

  return (
    <>
      <Head>
        {isImage &&
          imgSrcArr.map((src) => (
            <link
              key={src}
              rel="preload"
              as="image"
              href={src}
              imageSrcSet={`${src} 1200w,
               ${src}?w=200 200w,
               ${src}?w=400 400w,
               ${src}?w=800 800w,
               ${src}?w=1024 1024w`}
            />
          ))}
      </Head>
      <Layout padding="8rem 4rem 0 4rem" mobilePadding="3rem 1rem">
        <__Wrapper>
          <GallerySidebar
            categories={categories}
            padding="1.5rem 0"
            mobilePadding="3rem 0"
          />
          <__ContentWrapper>
            <__HeaderWrapper>
              <__Title>{title}</__Title>
              <__DateId>
                <p>{dayJs(createdAt)}</p>
                <p>{`n°${id}`}</p>
              </__DateId>
              <__Category>category : {category}</__Category>
              {caption && htmlParser(caption)}
            </__HeaderWrapper>
            <__ImageWrapper>
              {imgTag ? htmlParser(imgTag) : <p>Loading...</p>}
            </__ImageWrapper>
          </__ContentWrapper>
          <__GoBack onClick={() => router.back()}>← go back to list</__GoBack>
        </__Wrapper>
      </Layout>
    </>
  );
};

export default BlogDetailPageTemplate;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  padding: 0 10rem 0 8rem;
  @media only screen and (max-width: ${sizes.laptop}) {
    padding: 0.5rem;
  }
`;

const __HeaderWrapper = styled.div`
  width: 100%;
`;

const __Title = styled.p`
  width: 100%;
  margin-bottom: 0.5rem;

  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 1.5rem;

  word-break: break-all;

  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const __DateId = styled.div`
  ${theme.displayFlex("center", "space-between")}
  width: 50%;
  margin-bottom: 0.5rem;

  font-size: 1.2rem;
  font-weight: 400;
`;

const __ContentWrapper = styled.div`
  ${theme.displayFlex("center", "space-between")}
  @media only screen and (max-width: ${sizes.laptop}) {
    flex-direction: column-reverse;
  }
`;

const __ImageWrapper = styled.div`
  width: 100%;

  font-size: 1.1rem;
  line-height: 1.8;

  p {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 400;
  }

  img {
    width: 135%;
  }

  @media only screen and (max-width: ${sizes.laptop}) {
    img {
      width: 100%;
    }
  }
`;

const __Category = styled.p`
  margin-bottom: 3rem;
`;

const __GoBack = styled.button`
  all: unset;
  cursor: pointer;
  margin-top: 3rem;

  font-family: "proxima-nova", "Roboto", sans-serif;
  font-weight: 300;

  &:hover {
    color: #fff;
    background: ${theme.colors.sign};
    transition: 0.5s;
  }
`;
