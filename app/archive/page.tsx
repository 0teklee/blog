import ArchiveTemplate from "components/archive/ArchiveTemplate";
import getArchiveList from "pages/api/getArchiveList";
import { THEME_META_IMAGE } from "libs/constants";

const page = async () => {
  const posts = await getArchiveList();

  return <ArchiveTemplate posts={posts} />;
};

export default page;

export async function generateMetadata() {
  return {
    title: `teklog - Archive`,
    description: `teklog: post archive`,
    openGraph: {
      title: `teklog`,
      description: `tech blog about frontend/web development`,
      images: THEME_META_IMAGE,
      url: "https://www.teklog.site",
    },
  };
}
