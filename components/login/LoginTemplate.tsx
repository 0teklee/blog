"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { clsx } from "clsx";

const LoginTemplate = () => {
  const { data: session } = useSession();
  const login = async () => {
    console.log("login");
    await signIn("Github", {
      redirect: true,
    }).then((res) => {
      console.log("res done", res);
    });
  };
  return (
    <div className={clsx("flex justify-center items-center flex-col")}>
      {!session && (
        <>
          <h1 className={clsx("mb-[5rem]")}>Log In</h1>
          <button
            onClick={async (e) => {
              e.preventDefault();
              await login();
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
            onClick={async (e) => {
              e.preventDefault();
              await signOut();
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
