import MetaTag from "components/MetaTag";
import BlogDetailPageTemplate from "components/Template/Blog/BlogDetailPageTemplate";
import Loading from "components/Template/Loading";
import { setCategoryPresetImg } from "libs/utils/contentImg";
import { imgSrcReplaceReg } from "libs/utils/regExp";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import getBlogCategoryList from "pages/api/getBlogCategoryList";
import getBlogDetail from "pages/api/getBlogDetail";
import getBlogDetailId from "pages/api/getBlogDetailId";
import { IBlogGetCategorySideBar, IBlogGetDetail } from "types/IBlogItem";

interface IProps {
  post: IBlogGetDetail;
  categoryList: IBlogGetCategorySideBar[];
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

  const { post, categoryList } = props;
  const { detail, nav } = post;
  const { content, createdAt, id, title, categories } = detail;

  const matchSrc = content.match(imgSrcReplaceReg);
  const isImage =
    content && matchSrc && matchSrc.some((item) => item.includes("cloudinary"));

  const imgSrc =
    isImage &&
    matchSrc &&
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
        img={imgSrc || setCategoryPresetImg(categories.name)}
      />
      <BlogDetailPageTemplate
        content={content}
        createdAt={createdAt}
        id={id}
        title={title}
        category={categories.name}
        // tags={tags.map((item) => item.tag)}
        nav={nav}
        categories={categoryList}
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
  if (!params || !params.id) return { props: {} };

  const post = await getBlogDetail(params.id);
  const categoryList = await getBlogCategoryList();

  return {
    props: { post, categoryList },
    revalidate: 3,
  };
};
