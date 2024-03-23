import Layout from "components/common/Layout";
import Title from "components/common/Title";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

const Loading = () => {
  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 1rem 3rem 1rem">
      <__Flex>
        <Title title="Loading..." />
        <Image
          src="https://res.cloudinary.com/dolziw8fv/image/upload/v1663058798/logo_ktizgo.jpg"
          alt="hummingbird"
          width={200}
          height={200}
        />
        <h4>
          If it takes more than a minute... you are trying to access wrong
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
