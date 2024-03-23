import MetaTag from "components/common/MetaTag";
import GuestbookTemplate from "components/guestbook/GuestbookTemplate";
import { QueryClient, QueryClientProvider } from "react-query";

const GuestBook = () => {
  return (
    <>
      <MetaTag
        title="teklog - guestbook"
        url="https://www.teklog.site/guestbook"
        description={`Teklog Gallery : Guestbook`}
      />
      <QueryClientProvider client={queryClient}>
        <GuestbookTemplate />
      </QueryClientProvider>
    </>
  );
};

export default GuestBook;
export const queryClient = new QueryClient();
