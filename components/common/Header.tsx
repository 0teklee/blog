import styled from "styled-components";
import { theme } from "styles/theme";
import { useRouter } from "next/navigation";

const headerLeftItems = [
  { id: 0, item: "info", path: "/info" },
  { id: 1, item: "gallery", path: "/gallery" },
];

const headerRightItems = [
  { id: 0, item: "archive", path: "/archive" },
  { id: 1, item: "blog", path: "/blog?page=1" },
];

const Header = ({ mode, setMode }: { mode: string; setMode: () => void }) => {
  const router = useRouter();

  return (
    <__Wrapper>
      <__Modebutton about="night/day_mode" onClick={() => setMode()}>
        {mode ? "☽" : "☼"}
      </__Modebutton>
      <__Flex>
        <__InnerFlexLeft>
          {headerLeftItems.map((item) => (
            <__Button key={item.id} onClick={() => router.push(item.path)}>
              {item.item}
            </__Button>
          ))}
        </__InnerFlexLeft>
        <__MainButton onClick={() => router.push("/")}>teklog</__MainButton>
        <__InnerFlexRight>
          {headerRightItems.map((item) => (
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
  padding: 2rem;

  background-clip: text;
  -webkit-background-clip: text;
  filter: invert(1);
  -webkit-filter: invert(1);
  mix-blend-mode: difference;

  z-index: 10;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const __Button = styled.button`
  all: unset;
  cursor: pointer;

  font-size: 1.5rem;
  font-family: "Cormorant", "IBM Plex Sans KR", -apple-system, sans-serif,
    Helvetica, serif;
  font-weight: 400;
  color: #000;

  &:hover {
    filter: invert(1);
    color: #2d10b0;
    transition: 1.5s;
  }
`;

const __Modebutton = styled(__Button)`
  position: fixed;
  left: 50%;
  top: 5rem;
  transform: translate(-50%);

  font-size: 1.2rem;
`;

const __MainButton = styled(__Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
`;

const __Flex = styled.div`
  position: relative;
  ${theme.displayFlex("center", "space-between")};
  & > button:nth-of-type(2) {
    margin-right: 2rem;
  }
`;

const __InnerFlexRight = styled.div`
  ${theme.displayFlex("center", "space-around")}

  & button:nth-of-type(2) {
    &::before {
      content: "";
      margin-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 750px) {
    button {
      font-family: "IBM Plex Sans KR";
      font-weight: 400;
    }

    button:nth-child(1) {
      display: none;
    }

    button:nth-of-type(2) {
      position: relative;
      top: 0.5rem;
      right: 0rem;
      font-size: 1.2rem;
      &::before {
        content: "";
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    //width: 100vw;
    padding: 0.5rem 0;
    button {
      display: none;
    }
  }
`;

const __InnerFlexLeft = styled(__InnerFlexRight)`
  @media only screen and (max-width: 600px) {
    & button:nth-of-type(2) {
      left: -1rem;
      font-size: 1.2rem;
      &::before {
        content: "";
        margin-left: 0;
      }
    }
  }
`;

export default Header;
