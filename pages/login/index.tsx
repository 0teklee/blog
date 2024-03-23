"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "components/common/Layout";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "styles/theme";

const index = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <__LoginWrapper>
        {!session && (
          <>
            <h1>Log In</h1>
            <__GithubLogin
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              <__LoginText>Login With Github</__LoginText>
            </__GithubLogin>
          </>
        )}
        {session?.user && (
          <>
            <h1>Sign Out</h1>
            <__GithubLogin
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <__LoginText>Logout</__LoginText>
            </__GithubLogin>
          </>
        )}
      </__LoginWrapper>
    </Layout>
  );
};

export default index;

const __LoginWrapper = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  h1 {
    margin-bottom: 5rem;
  }
`;

const __GithubLogin = styled(Link)``;

const __LoginText = styled.p`
  display: block;

  padding: 1rem;
  border: 1px solid #000;
  border-radius: 100px;

  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
`;
