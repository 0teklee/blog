import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import { getGuestbookListFetcher } from "../../../libs/utils/guestbookFetcher";
import { useInView } from "react-intersection-observer";
import GuestbookPost from "../../Atom/GuestbookPost";
import GuestGoogleLogin from "../../Module/GuestGoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookie from "js-cookie";
import GuestbookUserCreatePost from "components/Atom/GuestbookUserCreatePost";
import Image from "next/image";
import Link from "next/link";

const GuestbookTemplate = () => {
  const { ref, inView } = useInView();
  const access_token = Cookie.get("guest_access_token") || "";

  const [isPost, setIsPost] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const {
    data: queryData,
    fetchNextPage,
    status,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["cursor", "access_token"],
    queryFn: ({ pageParam = 0 }) => {
      const res = getGuestbookListFetcher(pageParam, access_token);
      return res;
    },
    cacheTime: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return;
      return lastPage.pageData[lastPage.pageData?.length - 1].id;
    },
  });

  const isLoading = status === "loading";
  const pages = queryData && queryData.pages;

  useEffect(() => {
    if (access_token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    if (inView && pages.length > 0 && !pages[pages.length - 1].isLast) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 0 3rem 0">
      <Title
        title="Guestbook"
        customStyle={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      />
      {isLogin && isPost && (
        <__CreatePostContainer>
          <GuestbookUserCreatePost setIsPost={setIsPost} refetch={refetch} />
        </__CreatePostContainer>
      )}
      {isLogin && !isPost && (
        <_CreatePostButtonBox>
          <__CreatePostButton
            onClick={() => {
              setIsPost((prev) => !prev);
            }}
          >
            create post
          </__CreatePostButton>
        </_CreatePostButtonBox>
      )}
      <GoogleOAuthProvider clientId={process.env.GUESTBOOK_GAUTH_CLIENT_ID}>
        {!isLogin && <GuestGoogleLogin setIsLogin={setIsLogin} />}
        {isLoading && (
          <__FallbackContainer>
            <Image
              src="https://res.cloudinary.com/dolziw8fv/image/upload/v1663058798/logo_ktizgo.jpg"
              alt="hummingbird"
              width="200px"
              height="200px"
            />
            <p>Loading...</p>
          </__FallbackContainer>
        )}
        {!isLoading && (
          <_ContentWrapper>
            <__ContentBox>
              {queryData &&
                pages &&
                pages.length > 0 &&
                pages.map((post) => {
                  const { pageData } = post;
                  if (pageData.length === 0 || !pageData) return;
                  return pageData.map((item) => (
                    <GuestbookPost
                      className="postBox"
                      key={item.id}
                      {...item}
                      refetch={refetch}
                    />
                  ));
                })}
              {isFetchingNextPage ? (
                <__LoadingContainer>
                  <p>Loading...</p>
                </__LoadingContainer>
              ) : (
                <div ref={ref} />
              )}
              {pages[0].pageData.length === 0 &&
                pages[pages.length - 1].isLast && (
                  <__FlexCenterBox>
                    <p>Please Leave the first post :)</p>
                  </__FlexCenterBox>
                )}
            </__ContentBox>
          </_ContentWrapper>
        )}
      </GoogleOAuthProvider>
      <__FlexCenterBox>
        <Link href="https://www.twitter.com/0teklee">
          <__FollowMe>follow me</__FollowMe>
        </Link>
      </__FlexCenterBox>
    </Layout>
  );
};

export default GuestbookTemplate;

const _ContentWrapper = styled.section`
  padding: 0 12rem 12rem 12rem;
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

  & > div:nth-last-child(2) {
    border-bottom: none;
  }
`;

const __CreatePostContainer = styled.div`
  padding: 0 12rem 12rem 12rem;
  @media (max-width: 720px) {
    padding: 1rem;
  }
`;

const _CreatePostButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const __CreatePostButton = styled.button`
  font-style: italic;
  font-size: 0.9rem;

  &:hover {
    color: #aadcf7;
    transition: 0.3s;
  }

  &:hover::after {
    content: " :)";
  }
`;

const __FallbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`;

const __LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  transition: 0.5s;
`;

const __FlexCenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const __FollowMe = styled.p`
  font-size: 0.8rem;
  color: #eaeaea;
  cursor: pointer;
  &:hover {
    color: #aadcf7;
  }
`;
