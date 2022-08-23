import { PrismaClient } from "@prisma/client";
import { Header } from "components/Module/Header";
import HomeContent from "components/pages/Home/HomeContent";
import styled from "styled-components";

const HomeTemplate = (props) => {
  const { posts } = props;
  const recentPosts = posts
    .filter((item) => item.title && item.content)
    .slice(0, 6);

  return (
    <__Wrapper>
      <Header />
      <HomeContent posts={recentPosts} />
    </__Wrapper>
  );
};

const __Wrapper = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
`;

export default HomeTemplate;
