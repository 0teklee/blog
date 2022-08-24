import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { theme } from "styles/theme";

const headerItems = [
  { id: 0, item: "contact", path: "/info" },
  { id: 1, item: "top", path: "/" },
  { id: 3, item: "CV", path: "" },
];

const Footer = () => {
  const router = Router;

  const handleContact = (): void => {
    router.push("/info");
  };

  const handleTop = (): void => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <__Wrapper>
      <__Flex>
        <__Button onClick={handleContact}>contact</__Button>
        <__Button onClick={handleTop}>top</__Button>
        <__Button>
          <Link href="https://www.naver.com">cv</Link>
        </__Button>
      </__Flex>
    </__Wrapper>
  );
};

const __Wrapper = styled.div`
  /* position: fixed; */
  bottom: 0;
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

  font-family: "proxima-nova";
  font-weight: 400;
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

export default Footer;
