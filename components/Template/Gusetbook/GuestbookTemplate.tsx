import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

const GuestbookTemplate = ({ posts }) => {
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
        <__ContentBox></__ContentBox>
      </_ContentWrapper>
    </Layout>
  );
};

export default GuestbookTemplate;

const _ContentWrapper = styled.section`
  padding: 1rem 1rem 1rem 12rem;
  @media (max-width: 720px) {
    padding: 0;
  }
`;

const __ContentBox = styled.div`
  ${theme.displayFlex("center", "stretch")}
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
  margin-top: 2rem;
  gap: 5%;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      margin-bottom: 3rem;
    }
  }
`;

const __CollectionBox = styled.div`
  .container {
    div > div {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 500px) {
    .container {
      display: block !important;
      margin: 0;
      div > div {
        margin-bottom: 0rem;
      }
    }
  }
`;
