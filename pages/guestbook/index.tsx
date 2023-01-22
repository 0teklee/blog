import MetaTag from "components/MetaTag";
import GuestbookTemplate from "components/Template/Gusetbook/GuestbookTemplate";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
};

export default GuestBook;
export const queryClient = new QueryClient();
