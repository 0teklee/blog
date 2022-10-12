import GalleryItem from "components/Atom/GalleryItem";
import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import GallerySidebar from "components/Module/GallerySidebar";
import { galleryImagesV1 } from "libs/galleryImages";
import styled from "styled-components";
import { theme } from "styles/theme";

const GalleryTemplate = ({ list, categories, query }) => {
  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 1rem 3rem 1rem">
      <Title
        title="Gallery"
        customStyle={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      />
      <GallerySidebar categories={categories} />
      <_ContentWrapper>
        <__ContentBox>
          {query !== "~2022"
            ? list?.map((item, i) => (
                <GalleryItem
                  id={item.id}
                  url={item.imgUrl}
                  title={item.title}
                  createdAt={item.createdAt}
                  key={`${item.title}_key_${i}`}
                />
              ))
            : galleryImagesV1.map((img, i) => (
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
  padding: 1rem 1rem 1rem 12rem;
  @media (max-width: 720px) {
    padding: 0;
  }
`;

const __ContentBox = styled.div`
  ${theme.displayFlex("center", "stretch")}
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
  margin-top: 2rem;
  gap: 5%;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      margin-bottom: 3rem;
    }
  }
`;
