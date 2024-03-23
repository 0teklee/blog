import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { theme } from "styles/theme";

const Footer = () => {
  const router = useRouter();

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
        <__LeftBtnContainer>
          <button
            onClick={() => {
              router.push(`/daily?page=1&category=daily`);
            }}
          >
            <__LifeBlogButton>𓅩</__LifeBlogButton>
          </button>
          <__Button onClick={handleContact}>contact</__Button>
        </__LeftBtnContainer>
        <__Top onClick={handleTop}>top</__Top>
        <__Button>
          <Link href="https://teklog.site/guestbook">guestbook</Link>
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

const __LeftBtnContainer = styled.div`
  display: block;
  position: relative;
`;

const __LifeBlogButton = styled.p`
  color: #fff;

  hover {
    color: #81d0ff;
  }

  position: absolute;
  top: -150%;
  left: 0;
`;

export default Footer;
