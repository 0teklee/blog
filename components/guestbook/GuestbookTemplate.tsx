import Title from "components/common/Title";
import React, { Suspense } from "react";
import GuestbookUserCreatePost from "components/guestbook/GuestbookUserCreatePost";
import GuestGoogleLogin from "components/guestbook/GuestGoogleLogin";
import GuestbookList from "@/components/guestbook/GuestbookList";
import Loading from "@/components/common/Loading";

const GuestbookTemplate = () => {
  return (
    <article className={`flex flex-col items-center`}>
      <Title title="Guestbook" customStyle={`text-center`} />
      <GuestbookUserCreatePost />
      <GuestGoogleLogin />
      <Suspense fallback={<Loading />}>
        <GuestbookList />
      </Suspense>
    </article>
  );
};

export default GuestbookTemplate;
