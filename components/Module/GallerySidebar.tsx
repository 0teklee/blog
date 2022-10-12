import Router from "next/router";
import styled from "styled-components";
import { sizes, theme } from "styles/theme";

const GallerySidebar = ({
  categories,
  padding = "2rem",
  mobilePadding,
}: {
  categories: { name: string }[];
  padding?: string;
  mobilePadding?: string;
}) => {
  const router = Router;

  return (
    <__Wrapper padding={padding} mobilePadding={mobilePadding}>
      <__CategoryWrapper>
        <__CategoryItemWrapper>
          <__CategoryTitle>List of works</__CategoryTitle>
        </__CategoryItemWrapper>
        {categories &&
          0 < categories.length &&
          categories.map((item, i) => (
            <__CategoryItemWrapper key={`category_${i}`}>
              <__CategoryItem
                onClick={() =>
                  router.push({
                    pathname: `/gallery`,
                    query: { category: item.name },
                  })
                }
                key={`categoryItem_${i}`}
              >
                {item.name}
              </__CategoryItem>
            </__CategoryItemWrapper>
          ))}
        <__CategoryItemWrapper>
          <__CategoryItem
            onClick={() =>
              router.push({
                pathname: `/gallery`,
                query: { category: "~2022" },
              })
            }
          >
            ~ 2022
          </__CategoryItem>
        </__CategoryItemWrapper>
      </__CategoryWrapper>
    </__Wrapper>
  );
};

export default GallerySidebar;

const __Wrapper = styled.aside<{ padding?: string; mobilePadding?: string }>`
  position: fixed;
  top: 100px;
  left: 1rem;

  margin-left: 1rem;
  background: #fff;

  @media only screen and (max-width: ${sizes.laptop}) {
    position: relative;
    top: unset;
    left: 0;
    bottom: 10px;

    width: 100%;
    margin-left: 0;
    margin-bottom: 1rem;

    padding: ${(props) => props.padding};

    h4 {
      padding: 0;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    div {
      max-width: unset;
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 500px) {
    top: 1.5rem;
    padding: ${(props) => (props.mobilePadding ? props.mobilePadding : null)};
  }
`;

const __CategoryWrapper = styled.div`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const __CategoryItemWrapper = styled.div`
  ${theme.displayFlex("flex-start", "space-between")}
  width: 100%;
  padding-left: 0.8rem;
`;

const __CategoryItem = styled.div`
  all: unset;
  margin-bottom: 0.5rem;

  color: #000;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 0.85rem;

  cursor: pointer;

  &:hover {
    color: ${theme.colors.sign};
    text-decoration: underline;
  }
`;

const __CategoryTitle = styled(__CategoryItem)`
  font-size: 1rem;
  cursor: default;

  &:hover {
    color: #000;
  }
`;
