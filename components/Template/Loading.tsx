import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

const Loading = () => {
  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 1rem 3rem 1rem">
      <__Flex>
        <Title title="Loading..." />
        <Image
          src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661963643/bfb2651194bf749bc45221a83bb3648c_exkwpz.png"
          alt="hummingbird"
          width="200px"
          height="200px"
        />
        <h4>
          If it takes longer than a minute... you are trying to access wrong
          URL...
        </h4>
      </__Flex>
    </Layout>
  );
};

export default Loading;

const __Flex = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  font-family: "proxima-nova", "Roboto", sans-serif;
`;
