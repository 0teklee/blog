"use client";

import Title from "components/common/Title";
import React, { Suspense } from "react";
import GuestbookList from "components/guestbook/GuestbookList";
import Loading from "components/common/Loading";
import GuestbookUserCreatePost from "components/guestbook/GuestbookUserCreatePost";
import GuestGoogleLogin from "components/guestbook/GuestGoogleLogin";
import { useSession } from "next-auth/react";

const GuestbookTemplate = () => {
  const session = useSession();
  const userSession = session?.data;
  return (
    <article className={`flex flex-col items-center `}>
      <Title title="Guestbook" customStyle={`text-center`} />
      {!!userSession && <GuestbookUserCreatePost session={userSession} />}
      {!userSession && <GuestGoogleLogin />}
      <Suspense fallback={<Loading />}>
        <GuestbookList />
      </Suspense>
    </article>
  );
};

export default GuestbookTemplate;
