import GalleryCollectionItem from "components/gallery/GalleryCollectionItem";
import GalleryItem from "components/gallery/GalleryItem";
import Layout from "components/common/Layout";
import Title from "components/common/Title";
import GallerySidebar from "components/gallery/GallerySidebar";
import { galleryImagesV1 } from "libs/galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { theme } from "styles/theme";
import { IGalleryTemplateProp } from "types/IGallery";

const GalleryTemplate = ({ list, categories, query }: IGalleryTemplateProp) => {
  return (
    <Layout padding="8rem 2rem 5rem 2rem" mobilePadding="5rem 0 3rem 0">
      <Title
        title="Gallery"
        customStyle={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      />
      <GallerySidebar categories={categories} />
      <_ContentWrapper>
        <__ContentBox query={query}>
          {query !== "~2022" &&
            query !== "Collection" &&
            list?.map((item, i) => (
              <GalleryItem
                id={item.id}
                url={item.imgUrl}
                title={item.title}
                createdAt={item.createdAt}
                key={`${item.title}_key_${i}`}
                category={query}
              />
            ))}
          {query === "~2022" &&
            galleryImagesV1.map((img, i) => (
              <GalleryItem
                url={img.url}
                title={img.title}
                createdAt={img.createdAt}
                key={`${img.title}_key_${i}`}
                width={img.width}
                height={img.height}
                category={query}
              />
            ))}
        </__ContentBox>
        <__CollectionBox>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 3, 1024: 4 }}
          >
            <Masonry
              className="container"
              columnClassName="container-grid_column"
            >
              {query === "Collection" &&
                list?.map((item, i) => (
                  <GalleryCollectionItem
                    id={item.id}
                    url={item.imgUrl}
                    key={`${item.title}_key_${i}`}
                  />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </__CollectionBox>
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

const __ContentBox = styled.div<{ query: string }>`
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

const __CollectionBox = styled.div`
  .container {
    div > div {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 500px) {
    .container {
      display: block !important;
      margin: 0;
      div > div {
        margin-bottom: 0rem;
      }
    }
  }
`;
