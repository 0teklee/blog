import BlogListPageTemplage from "components/Template/Blog/BlogListPageTemplage";
import { lstatSync } from "fs";
import fetcher from "libs/utils/fetcher";
import getBlogList from "pages/api/getBlogList";
import { useState } from "react";
import useSWR from "swr";

const index = ({ list }) => {
  return (
    <div>
      <BlogListPageTemplage posts={list} />
    </div>
  );
};

export default index;

export async function getServerSideProps({ query }) {
  const page = query.page;
  const posts = await getBlogList(page);
  return {
    props: { list: posts },
  };
}
