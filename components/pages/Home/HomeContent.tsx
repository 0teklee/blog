import HomeListItem from "components/Atom/HomeListItem";
import HomeAboutMe from "components/pages/Home/HomeAboutMe";
import Router from "next/router";
import styled from "styled-components";
import { theme } from "styles/theme";
import { IBlogMainItem } from "types/IBlogItem";

const HomeContent = ({ posts }: { posts: IBlogMainItem[] }) => {
  const router = Router;

  return (
    <>
      <__IntroWrapper>
        <__Intro>front-end dev. </__Intro>
        <__Intro>LEE TEK WOO</__Intro>
        <__Intro>Tech Blog</__Intro>
      </__IntroWrapper>
      <__NavBtnWrapper>
        <__RecentPosts>Recent Posts</__RecentPosts>
        <__MoreButton onClick={() => router.push("blog?page=1")}>
          more posts
        </__MoreButton>
      </__NavBtnWrapper>
      <_ContentWrapper>
        <__ContentBox>
          <HomeListItem posts={posts} />
        </__ContentBox>
      </_ContentWrapper>
      <HomeAboutMe />
    </>
  );
};

export default HomeContent;

const __IntroWrapper = styled.section`
  width: 100%;
  margin-bottom: 5rem;
  animation: intro 1s;

  @keyframes intro {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const __Intro = styled.h1`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
`;

const __NavBtnWrapper = styled.div`
  position: relative;
  ${theme.displayFlex("center", "space-between")};
  margin-bottom: 9rem;

  @media only screen and (max-width: 720px) {
    margin-bottom: 3rem;
  }
`;

const __RecentPosts = styled.h2`
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
`;

const __MoreButton = styled.button`
  all: unset;

  font-family: "Tenon", "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1rem;

  position: absolute;
  right: 0;

  cursor: pointer;
  &:hover {
    animation: colorChange 1s;
    @keyframes colorChange {
      0% {
        color: #000;
      }
      100% {
        color: ${theme.colors.sign};
      }
    }

    &::after {
      content: "   → ";
    }
  }
`;

const _ContentWrapper = styled.section``;

const __ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(3rem, 100rem));
  grid-template-rows: minmax(3rem, auto);
  justify-content: center;

  gap: 8%;

  @media (min-width: 900px) {
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

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      margin-bottom: 3rem;
    }
  }
`;
