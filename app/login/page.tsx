"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { clsx } from "clsx";

const page = () => {
  const { data: session } = useSession();

  return (
    <div className={clsx("flex justify-center items-center flex-col")}>
      {!session && (
        <>
          <h1 className={clsx("mb-[5rem]")}>Log In</h1>
          <a
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
            className={clsx(
              "block p-4 border border-black rounded-full",
              "text-sm font-bold cursor-pointer",
            )}
          >
            <p>Login With Github</p>
          </a>
        </>
      )}
      {session?.user && (
        <>
          <h1 className={clsx("mb-12")}>Sign Out</h1>
          <a
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            className={clsx(
              "block p-4 border border-black rounded-full",
              "text-sm font-bold cursor-pointer",
            )}
          >
            <p>Logout</p>
          </a>
        </>
      )}
    </div>
  );
};

export default page;
