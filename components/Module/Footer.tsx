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
        <__Top onClick={handleTop}>top</__Top>
        <__Button>
          <Link href="https://0teklee.github.io/resume">cv</Link>
        </__Button>
      </__Flex>
    </__Wrapper>
  );
};

const __Wrapper = styled.footer`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 2rem;

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

  font-family: "proxima-nova", "Roboto", sans-serif;
  font-weight: 400;
  color: #000;

  &:hover {
    filter: invert(1);
    color: #2d10b0;
    transition: 1.5s;
    font-weight: 900;
  }
`;

const __Top = styled(__Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const __Flex = styled.div`
  position: relative;
  ${theme.displayFlex("center", "space-between")};
`;

export default Footer;
