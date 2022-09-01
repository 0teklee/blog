import Router from "next/router";
import styled from "styled-components";
import { theme } from "styles/theme";

const headerItems = [
  { id: 0, item: "info", path: "/info" },
  { id: 1, item: "gallery", path: "/gallery" },
  { id: 3, item: "archive", path: "/archive" },
  { id: 4, item: "blog", path: "/blog?page=1" },
];

const Header = () => {
  const router = Router;

  return (
    <__Wrapper>
      <__Flex>
        <__InnerFlexLeft>
          {headerItems
            .filter((item) => item.item !== ("archive" || "teklog" || "blog"))
            .map((item) => (
              <__Button key={item.id} onClick={() => router.push(item.path)}>
                {item.item}
              </__Button>
            ))}
        </__InnerFlexLeft>
        <__MainButton onClick={() => router.push("/")}>teklog</__MainButton>
        <__InnerFlexRight>
          {headerItems
            .filter((item) => item.item !== "info" && item.item !== "teklog")
            .map((item) => (
              <__Button key={item.id} onClick={() => router.push(item.path)}>
                {item.item}
              </__Button>
            ))}
        </__InnerFlexRight>
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

const __Button = styled.button`
  all: unset;
  cursor: pointer;

  font-size: 2rem;
  font-family: "Cormorant", "IBM Plex Sans KR", -apple-system, sans-serif,
    Helvetica, serif;
  font-weight: 700;
  color: #000;

  &:hover {
    filter: invert(1);
    color: #2d10b0;
    transition: 1.5s;
    font-weight: 900;
  }
`;

const __MainButton = styled(__Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`;

const __Flex = styled.div`
  position: relative;
  ${theme.displayFlex("center", "space-between")};
  & > button:nth-of-type(2) {
    margin-right: 2rem;
  }
`;

const __InnerFlexRight = styled.div`
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

const __InnerFlexLeft = styled(__InnerFlexRight)`
  left: 2rem;
`;

export default Header;
