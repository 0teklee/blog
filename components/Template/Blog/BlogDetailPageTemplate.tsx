import Layout from "components/Atom/Layout";
import dayJs from "libs/utils/dayJs";
import styled from "styled-components";
import { sizes, theme } from "styles/theme";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import Router from "next/router";

const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading....</p>,
});

const BlogDetailPageTemplate = ({
  content,
  createdAt,
  id,
  title,
  category,
  tags,
  nav,
}) => {
  const [prev, next] = nav;
  const router = Router;
  return (
    <Layout padding="8rem 5rem 4rem 5rem" mobilePadding>
      <__Wrapper>
        <__HeaderWrapper>
          <__Title>{title}</__Title>
          <__DateId>
            <p>{dayJs(createdAt)}</p>
            <p>{`n°${id}`}</p>
          </__DateId>
          <__TagCategoryWrpper>
            <p>category : {category}</p>
            <__TagWrapper>
              {tags?.map((tag) => (
                <span>#{tag}</span>
              ))}
            </__TagWrapper>
          </__TagCategoryWrpper>
        </__HeaderWrapper>
        <__ContentWrapper>
          <QuillWrapper
            value={content || "no contents :("}
            readOnly
            theme="bubble"
          />
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
  );
};

export default BlogDetailPageTemplate;

const __Wrapper = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  @media only screen and (min-width: ${sizes.laptop}) {
    padding: 8rem 10rem 5rem 10rem;
  }
`;

const __HeaderWrapper = styled.div`
  width: 100%;
`;

const __Title = styled.h1`
  width: 100%;
  margin-bottom: 1rem;

  font-family: "IBM Plex Sans KR";
  font-size: 2.5rem;

  word-break: break-all;
  ${theme.titleEllipsis("wrap")}
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
  span {
    margin-right: 1rem;
    font-weight: 400;
  }
`;

const __ContentWrapper = styled.div`
  width: 100%;
  min-height: 50vh;

  .ql-editor {
    font-size: 1.3rem;
    p {
      font-family: "IBM Plex Sans KR";
      line-height: 1.4;
      font-weight: 400;
    }

    img {
      width: 100%;
    }

    video {
      width: 100%;
    }

    @media only screen and (${theme.devices.laptop}) {
      img {
        padding: 0 8rem;
      }
    }
  }
`;

const __GoBack = styled.button`
  all: unset;
  cursor: pointer;
  margin: 3rem 0;

  font-family: "proxima-nova";
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

  font-family: "IBM Plex Sans KR";
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
    ${theme.titleEllipsis("nowrap")}
  }

  p:last-child {
    font-size: 0.9rem;
  }
`;
