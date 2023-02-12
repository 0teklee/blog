import MetaTag from "components/MetaTag";
import { GetServerSideProps } from "next";
import {
  IBlogGetCategorySideBar,
  IBlogGetListItem,
  IDetailGetCategorySideBar,
} from "types/IBlogItem";
import getDailyList from "../api/getDailyList";
import DailyListPageTemplage from "../../components/Template/Blog/DailyListPageTemplage";
import getDailyCategoryList from "../api/getDailyCategoryList";

const index = ({
  list,
  categories,
}: {
  list: IBlogGetListItem[];
  categories: IDetailGetCategorySideBar[];
}) => {
  return (
    <>
      <MetaTag
        title="teklog - daily blog"
        url="https://www.teklog.site/daily"
        description="Teklog - 일상 블로그"
      />
      <DailyListPageTemplage posts={list} categories={categories} />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=3000"
  );
  const { page, category } = query;

  if (!category || category !== "daily") {
    return {
      redirect: {
        destination: "/daily?page=1&category=daily",
        permanent: false,
      },
    };
  }

  const posts = await getDailyList(page);
  const categories = await getDailyCategoryList(page);

  if (!posts || categories.length === 0) {
    return {
      props: { list: posts, categories: [{ id: 0, category: "daily" }] },
    };
  }

  return {
    props: { list: posts, categories },
  };
};
