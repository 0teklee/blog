import Layout from "components/common/Layout";
import Title from "components/common/Title";
import { getContentImg, setCategoryPresetImg } from "libs/utils/contentImg";
import dayJs from "libs/utils/dayJs";
import styled from "styled-components";
import { theme } from "styles/theme";
import { useRouter } from "next/navigation";

interface IProps {
  id: number;
  title: string;
  createdAt: string;
  categories: { name: string };
  content: string;
}

const ArchiveTemplate = ({ posts }: { posts: IProps[] }) => {
  const router = useRouter();

  /*월별 포스팅 필터링*/
  const contentMonths = posts.map((item) => item.createdAt.slice(0, 7));
  const monthsSet = new Set(contentMonths);
  const months = Array.from(monthsSet);

  const filteredByMonthsPosts = ():
    | { month: string; posts: IProps[] }[]
    | undefined => {
    const filteredPosts: { month: string; posts: IProps[] }[] = [];
    for (let i = 0; i < months.length; i++) {
      filteredPosts.push({
        month: months[i],
        posts: posts.filter((post) => post.createdAt.startsWith(months[i])),
      });
    }
    return filteredPosts;
  };

  const archivePosts = filteredByMonthsPosts();
  return (
    <Layout
      padding="8rem 3rem 5rem 3rem"
      mobilePadding="8rem 0.5rem 4rem 0.5rem"
    >
      <__Wrapper>
        <Title title="Archive" />
        {archivePosts &&
          archivePosts.map((item) => (
            <__MonthWrapper key={`${item.month}_month_wrapper`}>
              <h2 key={`${item.month}_title`}>
                {item.month.replace("-", "/")}
              </h2>
              <__PostWrapper key={`${item.month}_grid_wrapper`}>
                {item.posts?.map((post) => (
                  <__PostItem
                    key={`${post.id}_grid_item`}
                    onClick={() => router.push(`/blog/${post.id}`)}
                  >
                    <__PostItemBackground
                      backgroundUrl={
                        getContentImg(post.content) ||
                        setCategoryPresetImg(post.categories.name)
                      }
                    />
                    <div className="info" key={`${post}_info`}>
                      <h4 key={`${post.id}_item_title`}>{post.title}</h4>
                      <p key={`${post.id}_item_date`}>
                        {dayJs(post.createdAt)}
                      </p>
                    </div>
                  </__PostItem>
                ))}
              </__PostWrapper>
            </__MonthWrapper>
          ))}
      </__Wrapper>
    </Layout>
  );
};

export default ArchiveTemplate;

const __Wrapper = styled.div`
  margin-bottom: 5rem;
`;

const __MonthWrapper = styled.div`
  margin-top: 2rem;
`;

const __PostWrapper = styled.div`
  ${theme.displayFlex("center", "flex-start")}
  flex-wrap: wrap;
  gap: 2%;

  width: 100%;
  margin-top: 2rem;

  @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 0.2rem;
  }
`;

const __PostItemBackground = styled.div<{ backgroundUrl?: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.backgroundUrl
      ? `url("${props.backgroundUrl}")`
      : `url("https://res.cloudinary.com/dolziw8fv/image/upload/v1661842335/preset-pic-blog-list_wzzr7i.jpg")`};

  background-size: cover;
  z-index: 0;
`;

const __PostItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;

  width: 15rem;
  height: 15rem;
  margin-bottom: 2rem;
  padding: 2rem;
  color: #fff;
  font-size: 1rem;

  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &:hover ${__PostItemBackground} {
    filter: brightness(30%);
    transition: 0.5s;
  }

  &:hover .info {
    opacity: 1;
    transition: 0.5s;
  }

  @media only screen and (max-width: 500px) {
    margin-bottom: 0;
    width: 7.5rem;
    height: 7.5rem;

    .info {
      font-size: 0.8rem;
    }
  }
`;
