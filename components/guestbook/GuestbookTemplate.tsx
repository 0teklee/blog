import Title from "components/common/Title";
import React, { Suspense } from "react";
import GuestbookList from "components/guestbook/GuestbookList";
import Loading from "components/common/Loading";
import GuestbookUserCreatePost from "components/guestbook/GuestbookUserCreatePost";
import { getServerSession } from "next-auth";
import GuestGoogleLogin from "components/guestbook/GuestGoogleLogin";

const GuestbookTemplate = async () => {
  const session = await getServerSession();
  const isLogin = session?.user;
  return (
    <article className={`flex flex-col items-center `}>
      <Title title="Guestbook" customStyle={`text-center`} />
      {!!isLogin && <GuestbookUserCreatePost />}
      {!isLogin && <GuestGoogleLogin />}
      <Suspense fallback={<Loading />}>
        <GuestbookList />
      </Suspense>
    </article>
  );
};

export default GuestbookTemplate;
