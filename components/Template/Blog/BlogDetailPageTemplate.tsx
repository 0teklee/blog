import Layout from "components/Atom/Layout";
import dayJs from "libs/utils/dayJs";
import styled from "styled-components";
import { sizes, theme } from "styles/theme";
import Router from "next/router";
import BlogSideBar from "components/Module/BlogSideBar";
import { IBlogGetCategorySideBar } from "types/IBlogItem";
import Head from "next/head";
import htmlParser from "libs/utils/htmlParser";
import { imgSrcReplaceReg } from "libs/utils/regExp";

interface IProps {
  content: string;
  createdAt: string;
  id: number;
  title: string;
  category: string;
  // tags: string[];
  categories: IBlogGetCategorySideBar[];
  nav: {
    id: number;
    createdAt: string;
    title: string;
  }[];
}

const BlogDetailPageTemplate = ({
  content,
  createdAt,
  id,
  title,
  category,
  // tags,
  nav,
  categories,
}: IProps) => {
  const [prev, next] = nav;
  const router = Router;
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
      <Layout padding="8rem 5rem 4rem 5rem" mobilePadding="3rem 1rem">
        <__Wrapper>
          <BlogSideBar
            categories={categories}
            padding="1.5rem 0"
            mobilePadding="3rem 0"
          />
          <__HeaderWrapper>
            <__Title>{title}</__Title>
            <__DateId>
              <p>{dayJs(createdAt)}</p>
              <p>{`n°${id}`}</p>
            </__DateId>
            <__TagCategoryWrpper>
              <p>category : {category}</p>
              <__TagWrapper>
                {/*{tags?.map((tag, i) => (*/}
                {/*  <button*/}
                {/*    key={`${tag}_btn_${i}`}*/}
                {/*    onClick={() => router.push(`/blog?tag=${tag}`)}*/}
                {/*  >*/}
                {/*    <span key={`${tag}_${i}`}>#{tag}</span>*/}
                {/*  </button>*/}
                {/*))}*/}
              </__TagWrapper>
            </__TagCategoryWrpper>
          </__HeaderWrapper>
          <__ContentWrapper>
            {updatedContent ? htmlParser(updatedContent) : <p>Loading...</p>}
          </__ContentWrapper>
          <__GoBack onClick={() => router.push("/blog?page=1")}>
            ← go back to list
          </__GoBack>
          <__NavWrapper>
            {next && (
              <__NavItem
                key="next"
                onClick={() => router.push(`/blog/${next.id}`)}
              >
                <p>next</p>
                <p>{next.title}</p>
                <p>{dayJs(next.createdAt)}</p>
              </__NavItem>
            )}
            {prev && (
              <__NavItem
                key="prev"
                onClick={() => router.push(`/blog/${prev.id}`)}
              >
                <p>{id < prev.id ? "next" : "prev"}</p>
                <p>{prev.title}</p>
                <p>{dayJs(prev.createdAt)}</p>
              </__NavItem>
            )}
          </__NavWrapper>
        </__Wrapper>
      </Layout>
    </>
  );
};

export default BlogDetailPageTemplate;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "center", "column")};
  @media only screen and (min-width: ${sizes.laptop}) {
    padding: 8rem 12rem 5rem 12rem;
  }
`;

const __HeaderWrapper = styled.div`
  width: 100%;
`;

const __Title = styled.h1`
  width: 100%;
  margin-bottom: 1rem;

  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 2.5rem;

  word-break: break-all;

  @media only screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const __DateId = styled.div`
  ${theme.displayFlex("center", "space-between")}
  width: 100%;
  margin: 1rem 0 0 0;

  font-size: 1rem;
  font-weight: 600;
`;

const __TagCategoryWrpper = styled.div`
  ${theme.displayFlex("center", "space-between")}
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.grey};
`;

const __TagWrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 1rem;

  word-break: break-all;
  button {
    span {
      margin-right: 1rem;
      padding: 0 0.2rem;

      border-radius: 20px;

      font-weight: 400;
      &:hover {
        background: #0000003e;
        color: #fff;
        transition: 0.5s;
      }
    }
  }
`;

const __ContentWrapper = styled.div`
  width: 100%;
  min-height: 50vh;

  font-size: 1.1rem;
  line-height: 1.8;
  padding: 1rem;

  p {
    font-family: "IBM Plex Sans KR", sans-serif;
    font-weight: 400;
  }

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    color: ${theme.colors.sign};
  }

  pre {
    margin: 1rem;
    padding: 1.5rem;
    color: #fff;
    background: #43454a;
    white-space: pre-wrap;
  }

  blockquote {
    padding: 1rem;
    background: #9ca2ae;
    border-radius: 5px;
    color: #fff;
  }

  blockquote:before {
    content: "“";
  }

  blockquote:after {
    content: "”";
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  @media only screen and (${theme.devices.laptop}) {
    img {
      padding: 0 8rem;
    }
  }

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    h1 {
      font-size: 1.2rem;
    }

    ol,
    ul {
      padding-left: 1.8rem;
    }

    pre {
      position: relative;
      left: -2rem;
      width: 100vw;
      margin: 1rem 0;
      white-space: pre-wrap;
      font-size: 0.8rem;
    }
  }
`;

const __GoBack = styled.button`
  all: unset;
  cursor: pointer;
  margin: 3rem 0;

  font-family: "proxima-nova", "Roboto", sans-serif;
  font-weight: 300;

  &:hover {
    color: #fff;
    background: ${theme.colors.sign};
    transition: 0.5s;
  }
`;

const __NavWrapper = styled.div`
  width: 100%;
`;

const __NavItem = styled.div`
  position: relative;
  ${theme.displayFlex("center", "space-between")}
  width: 100%;
  height: 100%;
  margin-bottom: 0.7rem;
  padding: 0 1rem;

  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.grey};
    color: #fff;
    transition: 0.5s;
  }

  p:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    ${theme.titleEllipsis("nowrap")};

    @media only screen and (max-width: 500px) {
      font-size: 0.8em;
      max-width: 30%;
    }
  }

  p:last-child {
    font-size: 0.9rem;
  }

  p:nth-child(2) ~ p:last-child {
    @media only screen and (max-width: 500px) {
      font-size: 0.8rem;
      max-width: 30%;
    }
  }
`;
