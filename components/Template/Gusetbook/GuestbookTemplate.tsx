import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import GuestbookPost from "../../Atom/GuestbookPost";
import { useInfiniteQuery } from "react-query";
import { getGuestbookListFetcher } from "../../../libs/utils/guestbookFetcher";
import { useInView } from "react-intersection-observer";

const GuestbookTemplate = () => {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");
  const { data, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["cursor", "email"],
    queryFn: ({ pageParam = 1 }) => {
      getGuestbookListFetcher(pageParam, email);
    },
  });
  console.log("data", data);
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
          {/*{data &&*/}
          {/*  data.map((post) => <GuestbookPost key={post.id} {...post} />)}*/}
          {/*{isFetchingNextPage ? <>Loading...</> : <div ref={ref} />}*/}
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

  height: 300rem;
  border: 1px solid #eaeaea;
  border-radius: 0.5rem;

  overflow-x: scroll;
`;
