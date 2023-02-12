import Router from "next/router";
import { useState } from "react";
import styled, { css } from "styled-components";
import { sizes, theme } from "styles/theme";
import {
  IBlogGetCategorySideBar,
  IDetailGetCategorySideBar,
} from "types/IBlogItem";

const DailySideBar = ({
  categories,
  padding = "2rem",
  mobilePadding,
}: {
  categories: IDetailGetCategorySideBar[];
  padding?: string;
  mobilePadding?: string;
}) => {
  const router = Router;
  const [mainToggle, setMainToggle] = useState<boolean>(false);
  const [mainCategory, setMainCategory] = useState<boolean>(false);

  /* subCategory Object Assign*/
  // const subKeys = categories
  //   .map((item) => item.name)
  //   .reduce((acc, item) => {
  //     return { ...acc, [item]: false };
  //   }, {});

  // const [subCategory, setSubCategory] = useState(subKeys);

  const handleMainToggle = () => {
    setMainToggle((prev) => !prev);
    setTimeout(() => setMainCategory((prev) => !prev), 300);
  };

  // const handleSubToggle = (name: string) => {
  //   setSubCategory((prev) => {
  //     return { ...prev, [name]: !prev[name] };
  //   });
  // };

  return (
    <__Wrapper padding={padding} mobilePadding={mobilePadding}>
      <__TitleWrapper>
        <__Title>Daily Posts</__Title>
        <__ToggleButton onClick={handleMainToggle} visible={mainToggle}>
          ⇣
        </__ToggleButton>
      </__TitleWrapper>
      <__CategoryWrapper visible={mainCategory} mainToggle={mainToggle}>
        {categories &&
          0 < categories.length &&
          categories.map((item) => (
            <__CategoryItemWrapper key={`${item}_wrapper`}>
              <__CategoryItem
                onClick={() =>
                  router.push({
                    pathname: `/daily/${item.id}`,
                  })
                }
                key={`${item.id}_categoryItem`}
              >
                {item.category}
                {/*{item?.posts?.map((blog, i) => (*/}
                {/*  <__SubCategoryWrapper*/}
                {/*    visible={subCategory[item.name]}*/}
                {/*    key={`${item.name}_subwrapper_${i}`}*/}
                {/*  >*/}
                {/*    <__SubCategoryTitle*/}
                {/*      onClick={(e) => {*/}
                {/*        e.stopPropagation();*/}
                {/*        router.push(`/blog/${blog.id}`);*/}
                {/*      }}*/}
                {/*      key={`${item.name}_Title`}*/}
                {/*    >*/}
                {/*      - {blog.title}*/}
                {/*    </__SubCategoryTitle>*/}
                {/*  </__SubCategoryWrapper>*/}
                {/*))}*/}
                {/*{item?.posts && item?.posts.length >= 10 && (*/}
                {/*  <__SubCategoryWrapper visible={subCategory[item.name]}>*/}
                {/*    <__SubCategoryTitle*/}
                {/*      onClick={(e) => {*/}
                {/*        e.stopPropagation();*/}
                {/*        router.push(`/blog?category=${item.name}`);*/}
                {/*      }}*/}
                {/*      key={`${item.name}_Title`}*/}
                {/*    >*/}
                {/*      .....more*/}
                {/*    </__SubCategoryTitle>*/}
                {/*  </__SubCategoryWrapper>*/}
                {/*)}*/}
              </__CategoryItem>
              {/*<__CateogryItemToggle*/}
              {/*  onClick={() => {*/}
              {/*    handleSubToggle(item.name);*/}
              {/*  }}*/}
              {/*  visible={subCategory[item.name]}*/}
              {/*  key={`${item.name}_Toggle`}*/}
              {/*>*/}
              {/*  <span>▾</span>*/}
              {/*</__CateogryItemToggle>*/}
            </__CategoryItemWrapper>
          ))}
      </__CategoryWrapper>
    </__Wrapper>
  );
};

export default DailySideBar;

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

const __TitleWrapper = styled.div`
  ${theme.displayFlex("center", "space-between")};
  min-width: 13.3rem;
`;

const __Title = styled.h4`
  padding: 1rem 1rem 1rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "proxima-nova-condensed", "Roboto", sans-serif;
`;

const __ToggleButton = styled.button<{ visible: boolean }>`
  position: relative;
  top: 0.2rem;

  margin-left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50px;

  font-size: 0.9rem;

  ${(props) =>
    props.visible
      ? css`
          transform: rotate(0.5turn);
          transition: 1s;
        `
      : null}

  &:hover {
    background: #00000013;
    transition: 0.3s;
  }

  @media only screen and (max-width: 500px) {
    top: -6.5px;
  }
`;

const __CategoryWrapper = styled.div<{ visible: boolean; mainToggle: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  animation: mount 0.5s;

  ${(props) =>
    !props.mainToggle
      ? css`
          opacity: 0;
          transition: 0.5s;
        `
      : null}
`;
const __CategoryItemWrapper = styled.div`
  ${theme.displayFlex("flex-start", "space-between")}
  width: 100%;
  padding-left: 0.8rem;
`;

// const __CateogryItemToggle = styled(__ToggleButton)<{ visible: boolean }>`
//   top: 10px;
//   color: ${theme.colors.grey};
//
//   ${(props) =>
//     props.visible
//       ? css`
//           transform: rotate(0.5turn);
//           transition: 1s;
//         `
//       : null}
//   @media only screen and(max-width: 500px) {
//     top: 18px;
//   }
// `;

const __CategoryItem = styled.div`
  all: unset;
  padding: 1rem;

  color: #000;
  font-family: "proxima-nova", "IBM Plex Sans KR", sans-serif;
  font-size: 0.9rem;

  cursor: pointer;

  &:hover {
    color: ${theme.colors.sign};
    transition: 0.5s;
  }
`;

const __SubCategoryWrapper = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 8rem;
  padding-left: 0.8rem;
  font-size: 0.8rem;
  animation: mount 0.5s;

  ${(props) =>
    !props.visible
      ? css`
          @keyframes mount {
            0% {
              opacity: 0%;
            }
            100% {
              opacity: 100%;
            }
          }
        `
      : null}
`;

const __SubCategoryTitle = styled.button`
  margin-top: 0.8rem;
  word-break: break-all;
  text-align: start;

  &:hover {
    color: ${theme.colors.sign};
    transition: 0.5s;
  }
`;
