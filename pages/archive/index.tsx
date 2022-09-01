import MetaTag from "components/MetaTag";
import ArchiveTemplate from "components/Template/Archive/ArchiveTemplate";
import { GetServerSideProps } from "next";
import getArchiveList from "pages/api/getArchiveList";

interface IProps {
  id: number;
  title: string;
  createdAt: string;
  categories: { name: string };
  content: string;
}
const index = ({ list }: { list: IProps[] }) => {
  return (
    <>
      <MetaTag
        title="Archive - Teklog"
        description="Teklog 아카이브"
        url="https://www.teklog.con/archive"
      />
      <ArchiveTemplate posts={list} />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getArchiveList();

  return {
    props: {
      list: posts,
    },
  };
};
