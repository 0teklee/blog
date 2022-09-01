import Footer from "components/Module/Footer";
import Header from "components/Module/Header";
import { ReactNode } from "react";
import styled from "styled-components";

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
  return (
    <__Container>
      <Header />
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

const __Container = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
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
