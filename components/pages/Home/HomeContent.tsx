import HomeListItem from "components/Atom/HomeListItem";
import HomeAboutMe from "components/pages/Home/HomeAboutMe";
import Router from "next/router";
import styled from "styled-components";

const HomeContent = ({ posts }) => {
  const router = Router;

  return (
    <__MainWrapper>
      <__IntroWrapper>
        <__Intro>front-end dev. </__Intro>
        <__Intro>LEE TEK WOO</__Intro>
        <__Intro>Tech Blog</__Intro>
      </__IntroWrapper>
      <__MoreButton onClick={() => router.push("blog")}>
        MORE POSTS
      </__MoreButton>
      <_ContentWrapper>
        <__ContentBox>
          <HomeListItem posts={posts} />
        </__ContentBox>
      </_ContentWrapper>
      <HomeAboutMe />
    </__MainWrapper>
  );
};

export default HomeContent;

const __MainWrapper = styled.main``;

const __IntroWrapper = styled.section`
  width: 100%;
  padding: 8rem 5rem 7.5rem 3rem;
`;

const __Intro = styled.h1`
  transition: 1s;
  animation: intro 1s;
  font-family: "IBM Plex Sans KR";

  @keyframes intro {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const __MoreButton = styled.button`
  all: unset;
  margin-left: 3rem;
  margin-bottom: 2rem;

  font-family: "Tenon", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  transition: 20s;

  cursor: pointer;
  &::after {
    content: "   →";
  }

  &:hover {
    transform: translate(100vw, 0);
    &::after {
      content: "   → → ";
    }
  }
`;

const _ContentWrapper = styled.section``;

const __ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(3rem, 100rem));
  grid-template-rows: minmax(3rem, auto);
  justify-content: center;
  padding: 5rem 3rem;

  gap: 8%;

  @media (min-width: 720px) {
    & > div:first-child {
      position: relative;
      bottom: 3rem;
    }

    & > div:nth-child(2) {
      position: relative;
    }

    & > div:nth-child(3) {
      position: relative;
      bottom: 5rem;
    }

    & > div:nth-child(4) {
      position: relative;
      top: 7rem;
    }

    & > div:nth-child(5) {
      position: relative;
      top: 4rem;
    }

    & > div:nth-child(6) {
      position: relative;
      top: 8rem;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      margin-bottom: 3rem;
    }
  }
`;
