"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { clsx } from "clsx";

const LoginTemplate = () => {
  const { data: session } = useSession();
  return (
    <div className={clsx("flex justify-center items-center flex-col")}>
      {!session && (
        <>
          <h1 className={clsx("mb-[5rem]")}>Log In</h1>
          <button
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
          </button>
        </>
      )}
      {session?.user && (
        <>
          <h1 className={clsx("mb-12")}>Sign Out</h1>
          <button
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
          </button>
        </>
      )}
    </div>
  );
};

export default LoginTemplate;
