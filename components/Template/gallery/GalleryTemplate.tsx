import GalleryItem from "components/Atom/GalleryItem";
import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import { galleryImagesV1 } from "libs/galleryImages";
import styled from "styled-components";
import { theme } from "styles/theme";

const GalleryTemplate = () => {
  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 1rem 3rem 1rem">
      <Title title="Gallery" customStyle={{ marginBottom: "2rem" }} />
      <_ContentWrapper>
        <__ContentBox>
          {galleryImagesV1.map((img, i) => (
            <GalleryItem
              url={img.url}
              title={img.title}
              createdAt={img.createdAt}
              key={`${img.title}_key_${i}`}
              width={img.width}
              height={img.height}
            />
          ))}
        </__ContentBox>
      </_ContentWrapper>
    </Layout>
  );
};

export default GalleryTemplate;

const _ContentWrapper = styled.section`
  padding: 1rem;
`;

const __ContentBox = styled.div`
  ${theme.displayFlex("center", "center")}
  flex-wrap: wrap;
  gap: 2%;

  width: 100%;
  margin-top: 2rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      margin-bottom: 3rem;
    }
  }
`;
