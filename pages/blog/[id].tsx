import MetaTag from "components/MetaTag";
import BlogDetailPageTemplate from "components/Template/Blog/BlogDetailPageTemplate";
import Loading from "components/Template/Loading";
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
  const { content, createdAt, id, title, categories, tags } = detail;
  return (
    <>
      <MetaTag
        title={`${title} - Teklog`}
        description={content}
        url={`https://www.teklog.com/site/blog/${id}`}
      />
      <BlogDetailPageTemplate
        content={content}
        createdAt={createdAt}
        id={id}
        title={title}
        category={categories.name}
        tags={tags.map((item) => item.tag)}
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

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getBlogDetail(params.id);
  const categoryList = await getBlogCategoryList();

  return {
    props: { post, categoryList },
    revalidate: 60,
  };
};
