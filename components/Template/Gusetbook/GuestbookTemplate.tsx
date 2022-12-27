import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { getGuestbookListFetcher } from "../../../libs/utils/guestbookFetcher";
import { useInView } from "react-intersection-observer";
import GuestbookPost from "../../Atom/GuestbookPost";

const GuestbookTemplate = () => {
  const { ref, inView } = useInView();
  const emailRef = useRef("");

  const {
    data: queryData,
    fetchNextPage,
    status,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["cursor", "email"],
    queryFn: ({ pageParam = 1 }) => {
      return getGuestbookListFetcher(pageParam, emailRef.current);
    },
  });

  const pages = queryData && queryData.pages;
  console.log("data", queryData);

  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 0 3rem 0">
      <Title
        title="Guestbook"
        customStyle={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      />
      <_ContentWrapper>
        <__ContentBox>
          {queryData &&
            pages &&
            pages.length > 0 &&
            pages.map((post) => {
              const { pageData } = post;
              if (pageData.length === 0) return;
              return pageData.map((item) => (
                <GuestbookPost key={item.id} {...item} />
              ));
            })}
          {isFetchingNextPage ? <>Loading...</> : <div ref={ref} />}
        </__ContentBox>
      </_ContentWrapper>
    </Layout>
  );
};

export default GuestbookTemplate;

const _ContentWrapper = styled.section`
  padding: 12rem;
  @media (max-width: 720px) {
    padding: 1rem;
  }
`;

const __ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 0.5rem;

  overflow-x: scroll;
`;
