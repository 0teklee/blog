import MetaTag from "components/MetaTag";
import Loading from "components/Template/Loading";
import { setCategoryPresetImg } from "libs/utils/contentImg";
import { imgSrcReplaceReg } from "libs/utils/regExp";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import getBlogDetailId from "pages/api/getBlogDetailId";
import { IBlogGetDetail, IDetailGetCategorySideBar } from "types/IBlogItem";
import DailyDetailPageTemplate from "../../components/Template/Blog/DailyDetailPageTemplate";
import getDailyDetail from "pages/api/getDailyDetail";
import getDailyCategoryList from "../api/getDailyCategoryList";

interface IProps {
  post: IBlogGetDetail;
  categories: IDetailGetCategorySideBar[];
}

const index = (props: IProps) => {
  /* Wrong Paths Branch*/
  const router = useRouter();
  if (!props.post) {
    setTimeout(() => router.push("/blog"), 60000);
    return (
      <>
        <MetaTag
          title="teklog"
          description="teklog - loading"
          url={`https://www.teklog.site/blog`}
        />
        <Loading />
      </>
    );
  }

  const { post, categories } = props;
  const { detail, nav } = post;
  const { content, createdAt, id, title, categories: category } = detail;

  const matchSrc = content.match(imgSrcReplaceReg);

  const isImage =
    content && matchSrc && matchSrc.some((item) => item.includes("cloudinary"));

  const imgSrc =
    isImage &&
    matchSrc
      .map((src) => src.slice(4, -1))[0]
      .replace("http", "https")
      .replaceAll(`"`, "");
  return (
    <>
      <MetaTag
        title={`${title} - Teklog`}
        description={content}
        url={`https://www.teklog.com/site/blog/${id}`}
        img={imgSrc || setCategoryPresetImg("daily")}
      />
      <DailyDetailPageTemplate
        content={content}
        createdAt={createdAt}
        id={id}
        title={title}
        nav={nav}
        categories={categories}
      />
    </>
  );
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const postsId = await getBlogDetailId();
  const paths = postsId?.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params?.id) return { props: {} };

  const post = await getDailyDetail(params.id);

  const categories = await getDailyCategoryList("1");
  return {
    props: { post, categories },
    revalidate: 3,
  };
};
