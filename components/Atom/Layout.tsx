import Footer from "components/Module/Footer";
import Header from "components/Module/Header";
import isNightModeState from "libs/recoil/isNightModeState";
import { ReactNode } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode | ReactNode[];
  padding?: string;
  margin?: string;
  mobilePadding?: string;
}

const Layout = ({
  children,
  padding = "8rem 4rem 5rem 4rem",
  margin,
  mobilePadding,
}: IProps) => {
  const isNightMode = useRecoilValue<string>(isNightModeState);
  const setIsNightModeRecoil = useSetRecoilState(isNightModeState);
  const setIsNightMode = () => {
    setIsNightModeRecoil((prev) => (!prev ? "mode" : ""));
  };

  return (
    <__Container mode={isNightMode}>
      <Header mode={isNightMode} setMode={setIsNightMode} />
      <__Wrapper
        padding={padding}
        margin={margin}
        mobilePadding={mobilePadding}
      >
        {children}
      </__Wrapper>
      <Footer />
    </__Container>
  );
};

export default Layout;

const __Container = styled.div<{ mode: string }>`
  width: 100%;

  ${(props) =>
    props.mode
      ? css`
          &,
          main,
          aside,
          aside div,
          section,
          button,
          h1 {
            background-color: #22252b;
            color: #fff;
            transition: 0.5s;
          }
          main > div > button,
          main > section {
            transition: 1s;
          }

          footer,
          button,
          h1,
          h2,
          h3,
          h4 {
            filter: unset;
            mix-blend-mode: unset;
          }

          header,
          header button {
            background-color: transparent;
            color: #fff;
            filter: unset;
          }
        `
      : css`
          background: #fff;
          color: #000;

          main > div > button {
            transition: 1s;
          }
        `}
`;

const __Wrapper = styled.main<{
  padding?: string;
  margin?: string;
  mobilePadding?: string;
}>`
  padding: ${(props) => props.padding};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  @media only screen and (max-width: 500px) {
    padding: ${(props) => (props.mobilePadding ? props.mobilePadding : null)};
  }
`;
