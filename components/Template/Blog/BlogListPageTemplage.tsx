import BlogListItem from "components/Atom/BlogListItem";
import Layout from "components/Atom/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

const BlogListPageTemplage = ({ posts }) => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);

  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNext = () => {
    if (posts.length < 5) return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    router.push({
      pathname: "/blog",
      query: { page: page },
    });
  }, [page]);

  return (
    <Layout padding="8rem 2rem 1rem 2rem">
      <__Title>Blog</__Title>
      <__ListWrapper>
        {posts?.map((item) => (
          <BlogListItem
            content={item.content}
            title={item.title}
            id={item.id}
            createdAt={item.createdAt}
            key={item.id}
          />
        ))}
        <__PaginationWrapper>
          {page !== 1 && (
            <__PaginationBtn onClick={handlePrev}>prev</__PaginationBtn>
          )}
          {posts.length === 5 && (
            <__PaginationBtn onClick={handleNext}>next</__PaginationBtn>
          )}
        </__PaginationWrapper>
      </__ListWrapper>
    </Layout>
  );
};

export default BlogListPageTemplage;

const __Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;

  @media only screen and (${theme.devices.laptop}) {
    margin-bottom: 7rem;
  }
`;

const __ListWrapper = styled.div`
  width: 100%;
`;

const __PaginationWrapper = styled.div`
  ${theme.displayFlex("center", "center")};
  margin-top: 5rem;
  margin-bottom: 3rem;
  background: #fff;
  @media only screen and (max-width: 720px) {
    max-width: 720px;
  }
`;

const __PaginationBtn = styled.button`
  margin: 0 2rem;
  font-size: 0.8rem;
  &:hover {
    color: ${theme.colors.sign};
    text-decoration: underline;
  }
`;
