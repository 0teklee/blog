import Layout from "components/Atom/Layout";
import isNightModeState from "libs/recoil/isNightModeState";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { sizes, theme } from "styles/theme";
import { IBlogGetListItem, IDetailGetCategorySideBar } from "types/IBlogItem";
import DailySideBar from "../../Module/DailySideBar";
import DailyListItem from "../../Atom/DailyListItem";

const DailyListPageTemplate = ({
  posts,
  categories,
}: {
  posts?: IBlogGetListItem[];
  categories: IDetailGetCategorySideBar[];
}) => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const isNightMode = useRecoilValue(isNightModeState);
  const handlePrev = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (posts && posts.length < 5) return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (router.query.page && router.query.category !== "daily") {
      router.push({
        pathname: "/daily",
        query: { page: page },
      });
    }
  }, [page]);

  return (
    <Layout padding="8rem 0rem 5rem 0rem" mobilePadding="2.3rem 1rem">
      <__Container>
        <DailySideBar
          categories={categories}
          padding="3rem 2rem"
          mobilePadding="2rem 1rem"
        />
        <__TitleContainer>
          <__Title>Daily Blog </__Title>
          <__TitleLogo>𓅫</__TitleLogo>
        </__TitleContainer>
        <__DescriptionBox>
          <__Description>essays</__Description>
          <__Description>not necessarily about programming</__Description>
          <__Description>uncategorized thoughts on random things</__Description>
        </__DescriptionBox>
        <__ListWrapper isNight={isNightMode}>
          {!posts && <__NoPost>No Posts Yet</__NoPost>}
          {posts &&
            posts.map((item, i) => (
              <DailyListItem
                content={item.content}
                title={item.title}
                id={item.id}
                createdAt={item.createdAt}
                key={`BlogListItem_${i}`}
                categories={item.categories}
              />
            ))}
          <__PaginationWrapper isNight={isNightMode}>
            {router.query.page && Number(router.query.page) !== 1 && (
              <__PaginationBtn isNight={isNightMode} onClick={handlePrev}>
                prev
              </__PaginationBtn>
            )}
            {posts && posts[posts.length - 1].id !== 1 && posts.length >= 5 && (
              <__PaginationBtn isNight={isNightMode} onClick={handleNext}>
                next
              </__PaginationBtn>
            )}
          </__PaginationWrapper>
        </__ListWrapper>
      </__Container>
    </Layout>
  );
};

export default DailyListPageTemplate;

const __Container = styled.div`
  position: relative;
`;

const __TitleContainer = styled.div`
  position: relative;
`;

const __Title = styled.h1`
  margin-bottom: 2rem;

  font-family: "IBM Plex Sans KR", sans-serif;
  text-align: center;
  ${theme.titleEllipsis("wrap")}

  @media only screen and (${theme.devices.laptop}) {
    margin-bottom: 3rem;
  }
`;

const __TitleLogo = styled.p`
  position: absolute;
  left: 54.5%;
  top: 1%;

  @media only screen and (max-width: ${sizes.laptop}) {
    left: 59%;
    top: 0;
  }

  @media only screen and (max-width: ${sizes.mobileL}) {
    left: 70%;
    top: 0;
  }
`;

const __DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
`;

const __Description = styled.p`
  color: #808080;
  font-size: 0.8rem;
  text-align: center;
`;

const __NoPost = styled(__Title)``;

const __ListWrapper = styled.div<{ isNight?: string }>`
  width: 100%;
  section h2:hover {
    ${(props) =>
      props.isNight
        ? `
            color: #d2ef4f;
            transition: 0.5s;
        `
        : null}
  }

  @media only screen and (max-width: 650px) {
    padding: 0 1rem;
  }

  @media only screen and (min-width: 650px) and (max-width: ${sizes.laptop}) {
    padding: 0 8rem;
  }

  @media only screen and (${theme.devices.laptop}) {
    padding: 0 15rem;
  }

  @media only screen and (${theme.devices.laptopL}) {
    padding: 0 22rem;
  }
`;

const __PaginationWrapper = styled.div<{ isNight?: string }>`
  ${theme.displayFlex("center", "center")};
  margin-top: 5rem;
  margin-bottom: 3rem;
  background: ${(props) => (props.isNight ? "#22252b" : "#fff")};
  color: ${(props) => (props.isNight ? "#fff" : "#000")};
`;

const __PaginationBtn = styled.button<{ isNight?: string }>`
  margin: 0 2rem;
  font-size: 0.8rem;
  &:hover {
    color: ${(props) => (props.isNight ? "#d2ef4f" : theme.colors.sign)};

    text-decoration: underline;
  }
`;
