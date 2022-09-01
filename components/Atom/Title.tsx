import styled from "styled-components";

const Title = ({
  title,
  customStyle,
}: {
  title: string;
  customStyle?: { [key: string]: string };
}) => {
  return <__Title customStyle={customStyle}>{title}</__Title>;
};

export default Title;

const __Title = styled.h1<{ customStyle?: { [key: string]: string } }>`
  margin-top: 2rem;
  transition: 1s;
  font-family: "IBM Plex Sans KR", sans-serif;
  white-space: pre-wrap;

  ${(props) => (props.customStyle ? props.customStyle : null)};

  animation: intro 1s;
  @keyframes intro {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
