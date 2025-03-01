import GuestbookTemplate from "@/components/guestbook/GuestbookTemplate";
import { THEME_META_IMAGE } from "@/libs/constants";

const page = () => <GuestbookTemplate />;

export default page;

export async function generateMetadata() {
  return {
    title: `teklog - guestbook`,
    description: `say hello to me!`,
    openGraph: {
      title: `teklog - guestbook`,
      description: `say hello to me!`,
      images: THEME_META_IMAGE,
    },
  };
}
