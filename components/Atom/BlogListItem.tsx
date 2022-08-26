import dayJs from "libs/utils/dayJs";
import Router from "next/router";
import styled from "styled-components";
import { theme } from "styles/theme";

const BlogListItem = ({ id, content, createdAt, title }) => {
  const router = Router;

  /* 블로그 포스트 이미지 미리보기*/
  const contentReg = content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
  const contentImg =
    contentReg &&
    contentReg.map((x) => x.replace(/.*src="([^"]*)".*/, "$1"))[0];

  /*블로그 내용 미리보기 */
  const contentReplace = content.replace(/<[^>]*>/g, ` `);

  return (
    <__Container key={id} onClick={() => router.push(`/blog/${id}`)}>
      <__Wrapper>
        <__HeaderImg headerImg={contentImg} />
        <__Contents>
          <h2>{title}</h2>
          <p>{dayJs(createdAt)}</p>
          <p>{contentReplace}</p>
        </__Contents>
      </__Wrapper>
    </__Container>
  );
};

export default BlogListItem;

const __Container = styled.section`
  margin: 2rem auto;
  max-width: 80%;
  @media only screen and (max-width: 720px) {
    max-width: 100%;
  }
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

const __HeaderImg = styled.div<{ headerImg: string }>`
  flex: 1;
  max-width: 10rem;
  min-width: 10rem;
  min-height: 10rem;

  width: 100%;
  height: 100%;

  margin-right: 2rem;

  background: ${(props) =>
    props.headerImg
      ? `url("${props.headerImg}")`
      : `url("https://res.cloudinary.com/dolziw8fv/image/upload/v1661426716/t8ujgu0fjx5lf0vxzj7a.jpg")`};
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

const __Contents = styled.div`
  flex: 3;
  max-height: 20rem;
  padding-right: 20%;

  p:nth-child(2) {
    margin-bottom: 1rem;
  }

  p:nth-child(3) {
    display: -webkit-box;
    padding-right: 1rem;
    font-family: "Tenon", "IBM Plex Sans KR";
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-all;
    line-height: 1.6rem;
    height: 3.2rem;
    overflow: hidden;
  }

  @media only screen and (max-width: 720px) {
    padding: 1rem;
  }
`;
