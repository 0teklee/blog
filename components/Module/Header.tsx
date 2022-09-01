import Router from "next/router";
import styled from "styled-components";
import { theme } from "styles/theme";

const headerItems = [
  { id: 0, item: "info", path: "/info" },
  { id: 1, item: "teklog", path: "/" },
  { id: 2, item: "archive", path: "/archive" },
  { id: 3, item: "blog", path: "/blog?page=1" },
];

const Header = () => {
  const router = Router;

  return (
    <__Wrapper>
      <__Flex>
        {headerItems
          .filter((item) => item.item !== "archive" && item.item !== "blog")
          .map((item) => (
            <__Button
              key={item.id}
              btnItem={item.item}
              onClick={() => router.push(item.path)}
            >
              {item.item}
            </__Button>
          ))}
        <__InnerFlex>
          {headerItems
            .filter((item) => item.item !== "info" && item.item !== "teklog")
            .map((item) => (
              <__Button
                key={item.id}
                btnItem={item.item}
                onClick={() => router.push(item.path)}
              >
                {item.item}
              </__Button>
            ))}
        </__InnerFlex>
      </__Flex>
    </__Wrapper>
  );
};

const __Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 2rem;

  background-clip: text;
  -webkit-background-clip: text;
  filter: invert(1);
  -webkit-filter: invert(1);
  mix-blend-mode: difference;

  z-index: 10;
`;

const __Button = styled.button<{ btnItem: string }>`
  all: unset;
  cursor: pointer;

  font-size: ${(props) => (props.btnItem !== "teklog" ? "1.2rem" : "3rem")};
  font-family: "Cormorant", serif;
  font-weight: 700;
  color: #000;

  &:hover {
    filter: invert(1);
    color: #2d10b0;
    transition: 1.5s;
    font-weight: 900;
  }
`;

const __Flex = styled.div`
  ${theme.displayFlex("center", "space-between")};
  & > button:nth-of-type(2) {
    flex-grow: 1;
    text-align: center;
    margin-right: 2rem;
  }
`;

const __InnerFlex = styled.div`
  position: absolute;
  right: 2rem;

  ${theme.displayFlex("center", "space-around")}

  & button:nth-of-type(2) {
    &::before {
      content: "";
      margin-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    & button:first-child {
      display: none;
    }
  }
`;

export default Header;
